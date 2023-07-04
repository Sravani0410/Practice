import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { reactLocalStorage } from "reactjs-localstorage";

import { useNavigate, NavLink, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetWalletBalance, GetWalletHistory, PostWalletAddMoney } from "../Redux/action/ApiCollection";

import Axios from "axios";
import { parse } from "date-fns";

const WalletHistory = () => {


  // old wallet


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [paymentmoney, setPaymentMoney] = useState("");
  const [paymentactive, setPaymentActive] = useState(false);

  const [walletdata, setWalletData] = useState("")
  const [amount, setAmount] = useState("")
  const ToggleFunData = useSelector(
    (state) => state.ToggleSideBarReducer.ToggleSideBarData
  );



  const PostWalletAddMoneyData = useSelector(
    (state) => state.PostWalletAddMoneyReducer?.PostWalletAddMoneyData
  );

  const GetWalletBalanceData = useSelector(
    (state) => state.GetWalletBalanceReducer?.GetWalletBalanceData
  );

  const GetWalletHistoryData = useSelector(
    (state) => state.GetWalletHistoryReducer?.GetWalletHistoryData
  );

  useEffect(() => {
    dispatch(GetWalletBalance())
  }, [PostWalletAddMoneyData])


  let isEmployeData = reactLocalStorage.get("isEmploye", false);

  useEffect(() => {

    if(isEmployeData=="true"){
      navigate("/admin/dashboard#/")
    }



    if (GetWalletHistoryData) {
      let Walletdata = GetWalletHistoryData?.data?.reverse().map((item, id) => {
        let dateParse = new Date(Date.parse(item?.created_at))
        let d = new Date(item?.created_at);

        // let t = new Date(item?.created_at);
        // console.log("sd", t.toTimeString())
        // let spliteDataa = DateParse&&DateParse?.split(" ")
        // console.log("spliteDataaspliteDataa", spliteDataa)
        // let spliteData = item.created_at.split("T")
        // let splitTime = spliteData[1]?.split("+")

        let object =
        {
          "amount": item.amount,
          "created_date": d.toUTCString().slice(0, -13),
          "order_id": item.order_id,
          "status": item.status,
          "created_time": formatAMPM(dateParse),
          "transaction_status":item.transaction_status,
        }
        return object
      })
      setWalletData(Walletdata)
    }

  }, [GetWalletHistoryData]

  )

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  const ProceedToPay = () => {
    PaymentFun()
  }

  const handlePaymentSuccess = async (response, PaymentFunResData) => {
    console.log("response3", response);
    console.log("datadata111", PaymentFunResData)
    // setLoadSpiner((o) => !o);
    let BearerToken = reactLocalStorage.get("token", false);
    const ProductOrderId = reactLocalStorage.get("product_order_id", false);

    let InvoicePayLoad = {
      product_order_id: ProductOrderId,
      request_type: "create",
    };

    try {
      let bodyData = new FormData();
      let objectResponse = { ...response, "txnId": parseInt(PaymentFunResData?.data?.txnId) }

      // let objectResponse={
      //   "razorpay_order_id":response.razorpay_order_id,
      //   "razorpay_payment_id":response.razorpay_payment_id,
      //   "razorpay_signature":response.razorpay_signature,
      //   "txnId":parseInt(PaymentFunResData?.data?.txnId)

      // }
      // response ====> it gives me razorpay_order_id,razorpay_payment_id,razorpay_signature
      // we will send the response we've got from razorpay to the backend to validate the payment
      bodyData.append("response", JSON.stringify(objectResponse));

      //  console.log("bodyDatabodyDatabodyData",response) it gives me razorpay_order_id,razorpay_payment_id,razorpay_signature

      await Axios({
        url: `${process.env.REACT_APP_BASE_URL}/wallet/complete_add_money`,
        method: "POST",
        data: bodyData,
        headers: {
          Authorization: `Bearer ${BearerToken}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          // setLoadSpiner((o) => !o);
          // toast.success(res.data.message);
          // reactLocalStorage.remove('PaymentMethod');

          navigate("/admin/wallethistory");
          window.location.reload(false)

          // dispatch(PostOrderDownloadInvoiceFile(InvoicePayLoad));
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(console.error());
    }
  };




  const loadScript = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
  };

  const PaymentFun = async () => {
    const res = await loadScript();

    let amountValue = amount;
    let BearerToken = reactLocalStorage.get("token", false);

    let getShipmentId = reactLocalStorage.get("ShipmentId", false);
    let OrderDetailsId = reactLocalStorage.get("OrderDetailsId", false);
    const ProductOrderId = reactLocalStorage.get("product_order_id", false);

    let dataa = JSON.parse(OrderDetailsId);
     
     

    let bodyContent
    if (PostWalletAddMoneyData) {
      bodyContent = JSON.stringify({
        amount: parseInt(amountValue),
         
      });
    }
     

    const data = await Axios({
      url: `${process.env.REACT_APP_BASE_URL}/wallet/add_money`, //razorpay
      method: "POST",
      headers: {
        Authorization: `Bearer ${BearerToken}`,
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      data: bodyContent,
    }).then((res) => {
      console.log("resresres", res);
      return res;
    });

    console.log("datadatadata", data)
    // in data we will receive an object from the backend with the information about the payment
    //that has been made by the user

    let options = {
      key_id: "rzp_live_aVrVtNqIm5u7p2", // in react your environment variable must start with REACT_APP_
      key_secret: "qys5qYSmgUtmf9UJbt7bpke4",
      amount: parseInt(amount),
      currency: "INR",
      description: "Test transaction",
      image: "", // add image url
      order_id: data?.data?.order_id,
      handler: function (response) {
        // we will handle success by calling handlePaymentSuccess method and
        // will pass the response that we've got from razorpay
        console.log("somjbjw", response);
        handlePaymentSuccess(response, data);
      },
    };

    dispatch(GetWalletHistory())
    console.log("optionsoptionsoptions1", options)
    let rzp1 = new window.Razorpay(options);
    rzp1.open();
    console.log("optionsoptionsoptions", options);
  };


  const payment = (e) => {
    setAmount(e.target.value);
    // if (e.target.value < 100 && e.target.value !== 0) {
    //   setPaymentActive(true);
    // } else {
    //   setPaymentActive(false);
    // }
  };




  return (
    <div className={`${ToggleFunData ? "collapsemenu" : ""}`}>
      <Header />
      <div className='dashboard-part  '>
        <Sidebar />
        <div className="content-sec">
          <div className="wallet-part">
            <div className="left-part">
              <h2>Your Wallet Balance</h2>
              <h4>
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <rect width="38" height="38" fill="url(#pattern0)" />
                  <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlinkHref="#image0_175_1182" transform="scale(0.00195312)" />
                    </pattern>
                    <image id="image0_175_1182" width="512" height="512" xlinkHref="data:image/png;base64,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" />
                  </defs>
                </svg><span> Rs. {GetWalletBalanceData?.data?.balance}/-</span>
              </h4>

              <div className="addmoney-part">
                <div class="amout">
                  <h2>Add Money</h2>
                  <p>Enter Amount in multiples of 100 below</p><div class=""><p>Rs.</p>


                    <input type="number" class="form-control" placeholder="500"
                      value={amount}
                      onChange={(e) => payment(e)}
                    />


                  </div>
                  <span >
                    <div style={{ height: "15px" }}>
                      {paymentactive ? (<span className="text-danger ">
                        <small> Min. amount Rs.100</small>
                      </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </span>
                  <p className="mt-3">Or select from below</p>
                  <ul>
                    <li onClick={(e) => { setAmount("500"); setPaymentActive(false) }}>Rs.500</li>
                    <li onClick={(e) => { setAmount("1000"); setPaymentActive(false) }}>Rs.1000</li>
                    <li onClick={(e) => { setAmount("2500"); setPaymentActive(false) }} >Rs.2500</li>
                    <li onClick={(e) => { setAmount("5000"); setPaymentActive(false) }}>Rs.5000</li>
                  </ul>
                  <button type="button" class="btn pr-pay mt-5"
                    onClick={(e) => ProceedToPay(e)}>Proceed To Add {amount} /-</button>
                </div>

              </div>
            </div>
            <div className="right-part">
              <div className="trh-box">
                <h4>Transactions History</h4>
                <ul>
                  {walletdata && walletdata?.map((item, id) => {

                    return <li>
                      <p className="pb-3 mb-0">{item.created_date}</p>
                      <div className="row mx-0">
                        <div className="col-8 pb-sm-3  text-black ">
                          {item?.status == "DEBIT" ? " Debit to wallet " : "Credit to wallet"}
                        </div>
                        <div className={`${item?.transaction_status == "COMPLETED" ? " text-green  col-4 pb-3 text-end" : "text-yellow  col-4 pb-3 text-end"}  ${item?.status == "DEBIT"  ? " text-red   col-4 pb-3 text-end" : ""}    ${item?.transaction_status == "FAILED" ? "text-red " : ""}`}>
                          {item?.status == "DEBIT" ? "-" : "+"} {item.amount}/-
                        </div>
                       
                          <div className="col-6">
                          {item.created_time}
                          </div>
                          <div className="col-6 pb-3  text-end">
                          <button className={`${item?.transaction_status == "COMPLETED" ? " text-game  " : "text-orange "}  ${item?.transaction_status == "FAILED" ? "text-danger " : ""}`}>
                          {item.transaction_status} 
                          </button>
                          </div>
                        
                      </div>
                    </li>
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default WalletHistory;
