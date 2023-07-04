import React, { useEffect } from "react";
import Profileheader from "../Components/DashboardLayout/Profileheader";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Layout from "../Components/DashboardLayout/Layout";
import {
  GetAdminOrderSummary,
  OrderPageBookNavigate,
  PostOrderTrack,
} from "../Redux/action/ApiCollection";

const TrackOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let param = useParams();
  let paramHash = useLocation();

  const PostOrderTrackData = useSelector(
    (state) => state.PostOrderTrackReducer.PostOrderTrackData?.data
  );


  console.log("ppppppppp", param)

  useEffect(() => {
    let payload = {
      oid: param.id,
    };
    dispatch(PostOrderTrack(payload));
  }, []);

  

  console.log("PostOrderTrackData", PostOrderTrackData);

  return (
    <Layout
    searchBox="none"
>
      <div className="container">
        <div className="orderinfo-header">
          <h2>
            <span>#{param.id}</span>
          </h2>
        </div>

        <div className="ordertrack-part  ">
          <div className="left-part">
            <ul className="left-part track-list">
              <li className={`active`}>
                <span>
                  <svg
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 5.08469V12.2266H3.57094H7.14187V11.8423V11.4581H3.95515H0.768429V5.08469V0.768429H2.5539H4.33936V2.84771C4.33936 4.23088 4.35293 4.92699 4.38457 4.92699C4.41169 4.92699 4.82302 4.66482 5.30668 4.34389L6.17907 3.76078L7.05599 4.34389C7.53965 4.66482 7.94646 4.92699 7.96906 4.92699C7.98714 4.92699 8.0007 3.99131 8.0007 2.84771V0.768429H9.78617H11.5716V3.99483V4.13546H11.9559H12.3401V3.61061V5.58794e-08H6.17003H0V5.08469ZM7.23227 2.12448C7.23227 2.87031 7.22323 3.48053 7.20967 3.48053C7.19611 3.48053 6.9701 3.33589 6.71246 3.16412C6.45481 2.98783 6.21524 2.84771 6.1836 2.84771C6.15195 2.84771 5.8943 3.00139 5.61405 3.18672L5.10779 3.52573V2.14708V0.768429H6.17003H7.23227V2.12448Z" />
                    <path d="M9.76824 4.76922C8.66984 4.99975 7.698 5.73202 7.19174 6.70837C6.89793 7.28243 6.81657 7.59885 6.79396 8.32207C6.77136 8.86901 6.78492 9.00914 6.86629 9.33911C7.2505 10.8715 8.47547 11.9699 10.0349 12.1823C11.3051 12.3586 12.6702 11.8071 13.4522 10.8082C14.6048 9.34363 14.528 7.25531 13.2759 5.91282C12.8058 5.41108 12.3583 5.12179 11.6984 4.89578C11.3096 4.7647 11.2237 4.75114 10.6226 4.7421C10.2609 4.73306 9.87672 4.74662 9.76824 4.76922ZM11.4588 5.62805C12.0057 5.80886 12.5436 6.19759 12.8691 6.64057C13.3256 7.25983 13.4883 7.74801 13.4883 8.49836C13.4838 8.92326 13.4657 9.04982 13.3618 9.35719C13.0408 10.2883 12.3628 10.9709 11.4407 11.2918C11.1017 11.4139 10.9932 11.432 10.5547 11.432C9.99877 11.432 9.63715 11.3506 9.22582 11.1427C8.16358 10.6093 7.54883 9.62388 7.54883 8.47576C7.54883 7.60789 7.79744 7.0067 8.40767 6.39196C8.62011 6.17951 8.90489 5.93994 9.04049 5.8631C9.75468 5.46533 10.6904 5.3704 11.4588 5.62805Z" />
                    <path d="M10.125 7.68329V8.83594H11.3002H12.4755V8.45172V8.06751H11.6845H10.8934V7.29908V6.53065H10.5092H10.125V7.68329Z" />
                  </svg>
                </span>

                <p>{PostOrderTrackData?.track_details[0].PENDING}</p>
                <h4>Your Order has been placed </h4>
              </li>
              <li
                className={`${
                  PostOrderTrackData?.current_status === "BOOKED" ||
                  PostOrderTrackData?.current_status === "IN_TRANSIT" ||
                  PostOrderTrackData?.current_status === "DELIVERED" ||
                  PostOrderTrackData?.current_status === "RTO" ||
                  PostOrderTrackData?.current_status === "RTO_DELIVERED"
                    ? "active"
                    : ""
                }`}
              >
                <span>
                  <svg
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 5.08469V12.2266H3.57094H7.14187V11.8423V11.4581H3.95515H0.768429V5.08469V0.768429H2.5539H4.33936V2.84771C4.33936 4.23088 4.35293 4.92699 4.38457 4.92699C4.41169 4.92699 4.82302 4.66482 5.30668 4.34389L6.17907 3.76078L7.05599 4.34389C7.53965 4.66482 7.94646 4.92699 7.96906 4.92699C7.98714 4.92699 8.0007 3.99131 8.0007 2.84771V0.768429H9.78617H11.5716V3.99483V4.13546H11.9559H12.3401V3.61061V5.58794e-08H6.17003H0V5.08469ZM7.23227 2.12448C7.23227 2.87031 7.22323 3.48053 7.20967 3.48053C7.19611 3.48053 6.9701 3.33589 6.71246 3.16412C6.45481 2.98783 6.21524 2.84771 6.1836 2.84771C6.15195 2.84771 5.8943 3.00139 5.61405 3.18672L5.10779 3.52573V2.14708V0.768429H6.17003H7.23227V2.12448Z"
                      fill="white"
                    />
                    <path
                      d="M9.76824 4.76922C8.66984 4.99975 7.698 5.73202 7.19174 6.70837C6.89793 7.28243 6.81657 7.59885 6.79396 8.32207C6.77136 8.86901 6.78492 9.00914 6.86629 9.33911C7.2505 10.8715 8.47547 11.9699 10.0349 12.1823C11.3051 12.3586 12.6702 11.8071 13.4522 10.8082C14.6048 9.34363 14.528 7.25531 13.2759 5.91282C12.8058 5.41108 12.3583 5.12179 11.6984 4.89578C11.3096 4.7647 11.2237 4.75114 10.6226 4.7421C10.2609 4.73306 9.87672 4.74662 9.76824 4.76922ZM11.4588 5.62805C12.0057 5.80886 12.5436 6.19759 12.8691 6.64057C13.3256 7.25983 13.4883 7.74801 13.4883 8.49836C13.4838 8.92326 13.4657 9.04982 13.3618 9.35719C13.0408 10.2883 12.3628 10.9709 11.4407 11.2918C11.1017 11.4139 10.9932 11.432 10.5547 11.432C9.99877 11.432 9.63715 11.3506 9.22582 11.1427C8.16358 10.6093 7.54883 9.62388 7.54883 8.47576C7.54883 7.60789 7.79744 7.0067 8.40767 6.39196C8.62011 6.17951 8.90489 5.93994 9.04049 5.8631C9.75468 5.46533 10.6904 5.3704 11.4588 5.62805Z"
                      fill="white"
                    />
                    <path
                      d="M10.125 7.68329V8.83594H11.3002H12.4755V8.45172V8.06751H11.6845H10.8934V7.29908V6.53065H10.5092H10.125V7.68329Z"
                      fill="white"
                    />
                  </svg>
                </span>

                <p>{PostOrderTrackData?.track_details[1]?.BOOKED}</p>
                <h4>
                  {PostOrderTrackData?.current_status === "BOOKED" ||
                  PostOrderTrackData?.current_status === "IN_TRANSIT" ||
                  PostOrderTrackData?.current_status === "DELIVERED" ||
                  PostOrderTrackData?.current_status === "RTO" ||
                  PostOrderTrackData?.current_status === "RTO_DELIVERED"
                    ? " Your Order has been Booked"
                    : ""}
                </h4>
              </li>
              <li
                className={`${
                  PostOrderTrackData?.current_status === "IN_TRANSIT" ||
                  PostOrderTrackData?.current_status === "DELIVERED" ||
                  PostOrderTrackData?.current_status === "RTO" ||
                  PostOrderTrackData?.current_status === "RTO_DELIVERED"
                    ? "active"
                    : ""
                }`}
              >
                <span>
                  <svg
                    width="21"
                    height="11"
                    viewBox="0 0 21 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.77427 0.0548297C3.60603 0.129168 3.48082 0.281758 3.43779 0.457823C3.41822 0.539986 3.40257 0.829515 3.40257 1.10339V1.6042H2.67875C1.95884 1.6042 1.95102 1.6042 1.85712 1.70201C1.72409 1.83113 1.72409 2.04241 1.85712 2.17152L1.95102 2.26934H3.98554H6.02007L6.1218 2.17935C6.27048 2.05414 6.27048 1.81939 6.1218 1.69419C6.02007 1.6042 6.00442 1.6042 5.04193 1.6042H4.06771V1.13469V0.665188H9.23228H14.3968V4.73424V8.8033H12.1315H9.86611L9.81916 8.65462C9.66266 8.16947 9.334 7.78995 8.88015 7.57476C8.64148 7.46129 8.60236 7.45347 8.15633 7.45347C7.7103 7.45347 7.67508 7.46129 7.42859 7.57476C7.28383 7.64518 7.09211 7.76647 7.00212 7.84864C6.78693 8.04035 6.56 8.39248 6.49349 8.62332L6.44263 8.8033H5.25712H4.06771V7.94254V7.08178H4.56069C5.04976 7.08178 5.17105 7.05439 5.26886 6.92919C5.35103 6.82355 5.32755 6.62009 5.22191 6.51446L5.12801 6.41664H2.99958H0.871152L0.788988 6.50663C0.659874 6.64357 0.671611 6.89397 0.804638 6.99961C0.906365 7.07786 0.953315 7.08178 2.15447 7.08178H3.40257V8.11469C3.40257 9.17499 3.42605 9.35888 3.55908 9.42931C3.60211 9.45278 4.19682 9.46843 5.04193 9.46843H6.44654L6.47393 9.59364C6.51305 9.78144 6.67347 10.0905 6.83388 10.2822C7.31121 10.8652 8.23458 11.0491 8.9271 10.7009C9.34183 10.4935 9.67048 10.1101 9.80742 9.67971L9.87394 9.46843H12.6753H15.4767L15.5432 9.67971C15.7702 10.3879 16.4314 10.873 17.1787 10.877C17.9807 10.877 18.6302 10.3996 18.8572 9.63276L18.908 9.46843H19.2641C19.6592 9.46843 19.8079 9.40975 19.9409 9.20629C20.0035 9.10848 20.0114 8.99501 20.0075 7.9621C20.0075 6.89006 20.0035 6.81181 19.9214 6.58097C19.8275 6.31492 18.1764 3.3179 17.9964 3.09097C17.9377 3.01663 17.8242 2.91491 17.7382 2.86796C17.5895 2.78188 17.5582 2.77797 16.3257 2.77797H15.062V1.58855C15.062 0.42261 15.062 0.399134 14.972 0.27002C14.925 0.195682 14.8233 0.105693 14.749 0.0704799C14.6199 0.00396651 14.2795 5.3959e-05 9.25184 5.3959e-05C4.87369 0.00396651 3.87208 0.0117916 3.77427 0.0548297ZM18.3016 4.969C18.7633 5.79846 19.1897 6.58097 19.2445 6.71008C19.3384 6.93701 19.3423 6.98396 19.358 7.87211L19.3736 8.8033H19.1389H18.9041L18.8376 8.59593C18.6967 8.15382 18.3681 7.78604 17.926 7.57867C17.6756 7.46129 17.6404 7.45347 17.1943 7.45347C16.7483 7.45347 16.7092 7.46129 16.4705 7.57476C16.1184 7.743 15.8445 8.00123 15.6802 8.32206C15.6019 8.46682 15.5315 8.63506 15.5158 8.69375C15.4924 8.79547 15.4767 8.8033 15.2772 8.8033H15.062V6.1232V3.4431L16.2592 3.45093L17.4565 3.46266L18.3016 4.969ZM8.58671 8.19294C8.80581 8.29467 9.0523 8.54507 9.1462 8.76026C9.1775 8.83851 9.20489 9.01067 9.20489 9.15543C9.2088 9.4567 9.0836 9.7384 8.8645 9.93012C8.61409 10.1492 8.49672 10.1923 8.15633 10.1923C7.78463 10.1923 7.61248 10.1179 7.36599 9.84795C6.87692 9.31584 7.06864 8.45899 7.74551 8.16555C7.9607 8.07165 8.35587 8.08339 8.58671 8.19294ZM17.6599 8.19685C17.9768 8.34944 18.2038 8.67419 18.2546 9.04979C18.3133 9.46452 18.016 9.95359 17.5973 10.1336C17.2022 10.3018 16.717 10.1923 16.4196 9.8636C15.9032 9.29237 16.1145 8.43552 16.8383 8.1499C17.0143 8.07948 17.476 8.10687 17.6599 8.19685Z" />
                    <path d="M3.55127 2.95075C3.42216 3.04857 3.40259 3.20507 3.40259 4.11278V5.00876H2.92135C2.47923 5.00876 2.42837 5.01658 2.36185 5.09092C2.2523 5.21221 2.26404 5.46653 2.38142 5.56043C2.46749 5.63085 2.58487 5.63477 5.398 5.63477H8.3285L8.40675 5.53304C8.51239 5.40001 8.51239 5.24351 8.40675 5.11048L8.3285 5.00876H6.19616H4.06773V4.03844C4.06773 3.07204 4.06773 3.06422 3.97774 2.98205C3.87601 2.88424 3.65691 2.86859 3.55127 2.95075Z" />
                    <path d="M0.115705 3.37587C0.0335414 3.41891 0.0178912 3.45803 0.00615355 3.6341C-0.0134092 4.00579 -0.0681849 3.99014 1.34816 3.99014C2.72147 3.99014 2.71755 3.99014 2.7645 3.70844C2.78407 3.58323 2.76842 3.54802 2.66669 3.44238L2.54931 3.32501H1.37946C0.522611 3.32501 0.186131 3.34066 0.115705 3.37587Z" />
                  </svg>
                </span>

                <p>{PostOrderTrackData?.track_details[2]?.IN_TRANSIT}</p>
                <h4>
                  {PostOrderTrackData?.current_status === "IN_TRANSIT" ||
                  PostOrderTrackData?.current_status === "DELIVERED" ||
                  PostOrderTrackData?.current_status === "RTO" ||
                  PostOrderTrackData?.current_status === "RTO_DELIVERED"
                    ? "Your item is out for delivery"
                    : ""}
                </h4>
              </li>
              <li
                className={`${
                  PostOrderTrackData?.current_status === "DELIVERED" ||
                  PostOrderTrackData?.current_status === "RTO" ||
                  PostOrderTrackData?.current_status === "RTO_DELIVERED"
                    ? "active"
                    : ""
                }`}
              >
                <span>
                  <svg
                    width="24"
                    height="14"
                    viewBox="0 0 24 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.03425 0.521558C1.5638 0.667398 1.14039 1.04846 0.900459 1.53303L0.773438 1.79178V6.28459V10.7774L0.909869 11.0597C1.21096 11.6713 1.79432 12.0711 2.44354 12.1088C2.76815 12.1276 2.8199 12.1182 2.90929 12.0288C3.04101 11.8971 3.04572 11.5913 2.9187 11.4643C2.86695 11.4125 2.72581 11.3561 2.59879 11.3419C2.12363 11.2714 1.80373 11.0503 1.62496 10.6598C1.54498 10.4763 1.52616 10.3305 1.51205 9.58716L1.49323 8.73094H8.83698H16.1807V10.0482V11.3655H12.4218H8.66762L8.56412 11.0597C8.24421 10.0764 7.43974 9.48837 6.40945 9.48366C5.70848 9.48366 5.19098 9.70007 4.73935 10.1799C4.32064 10.6269 4.12776 11.1161 4.12776 11.7418C4.12776 12.3675 4.32064 12.8568 4.73935 13.3037C5.19098 13.7836 5.70848 14 6.40945 14C7.43974 13.9953 8.24421 13.4072 8.56412 12.424L8.66762 12.1182H12.9864H17.3051L17.3616 12.3158C17.5074 12.8756 17.9732 13.4637 18.4671 13.7271C19.1399 14.0894 19.9961 14.0894 20.6688 13.7271C21.1628 13.4637 21.6286 12.8756 21.7744 12.3158L21.8309 12.1182H22.4848C23.0823 12.1182 23.1528 12.1088 23.2375 12.0241C23.3269 11.9347 23.3316 11.8689 23.3316 9.67655V7.42308L21.9861 5.69182C21.2475 4.73681 20.6077 3.92763 20.5653 3.8947C20.5089 3.85236 20.0667 3.83824 18.7165 3.83824H16.9382L16.924 2.81266L16.9099 1.79178L16.7735 1.50951C16.5947 1.14726 16.2372 0.789715 15.8749 0.610944L15.5927 0.474513L8.91225 0.465104C3.45501 0.460399 2.1942 0.469808 2.03425 0.521558ZM15.4986 1.32603C15.7573 1.46717 15.9408 1.65535 16.0584 1.90939C16.1572 2.11639 16.1572 2.18696 16.1713 5.0473L16.1854 7.97822H8.84168H1.49793L1.51205 5.0473C1.52616 2.18696 1.52616 2.11639 1.62496 1.90939C1.79432 1.54714 2.0907 1.31192 2.46706 1.24605C2.57056 1.22724 5.50148 1.21783 8.98282 1.22253L15.3104 1.22724L15.4986 1.32603ZM21.3463 6.1858L22.5789 7.78063V9.57305V11.3655H22.2025H21.8309L21.7744 11.1679C21.6286 10.608 21.1628 10.02 20.6688 9.75653C19.9961 9.39428 19.1399 9.39428 18.4671 9.75653C17.9732 10.02 17.5074 10.608 17.3616 11.1679C17.3098 11.3561 17.3004 11.3655 17.1216 11.3655H16.9335V7.97822V4.59097H18.5236L20.109 4.59567L21.3463 6.1858ZM6.9834 10.401C7.30331 10.5422 7.52442 10.7445 7.69378 11.0456C7.8161 11.2714 7.83021 11.3372 7.83021 11.7418C7.83021 12.1511 7.8161 12.2123 7.68908 12.4428C7.43033 12.9133 7.02104 13.1579 6.4612 13.1908C6.12247 13.2096 6.0425 13.1955 5.82138 13.0967C5.46855 12.9321 5.24743 12.7251 5.07807 12.3911C4.95575 12.1464 4.93694 12.0523 4.93694 11.7418C4.93694 11.4313 4.95575 11.3372 5.07807 11.0926C5.44032 10.3681 6.2542 10.0764 6.9834 10.401ZM20.156 10.401C20.476 10.5422 20.6971 10.7445 20.8664 11.0456C20.9887 11.2714 21.0029 11.3372 21.0029 11.7418C21.0029 12.1511 20.9887 12.2123 20.8617 12.4428C20.603 12.9133 20.1937 13.1579 19.6338 13.1908C19.2951 13.2096 19.2151 13.1955 18.994 13.0967C18.6412 12.9321 18.4201 12.7251 18.2507 12.3911C18.1284 12.1464 18.1096 12.0523 18.1096 11.7418C18.1096 11.4313 18.1284 11.3372 18.2507 11.0926C18.613 10.3681 19.4268 10.0764 20.156 10.401Z" />
                    <path d="M11.5601 1.80542C11.5178 1.82424 10.3369 2.831 8.93029 4.04947C7.52834 5.26324 6.3334 6.29353 6.27694 6.34057C6.17815 6.41585 6.15933 6.39703 4.9879 5.06094C4.32927 4.31293 3.76473 3.69193 3.72709 3.67782C3.44482 3.56961 3.14844 3.75779 3.14844 4.04477C3.14844 4.19061 3.28487 4.35997 4.49393 5.7431C5.23254 6.58521 5.88647 7.3097 5.95233 7.34734C6.0276 7.39909 6.11699 7.4132 6.21108 7.39439C6.30987 7.37557 7.14728 6.6793 8.99615 5.07976C12.247 2.26646 12.087 2.4123 12.087 2.16296C12.087 2.03594 12.0588 1.94185 12.0023 1.8948C11.9035 1.80071 11.673 1.75837 11.5601 1.80542Z" />
                    <path d="M17.7806 5.43867C17.6912 5.52805 17.6865 5.59392 17.6865 6.85002C17.6865 8.10613 17.6912 8.17199 17.7806 8.26138C17.87 8.35076 17.9359 8.35547 19.7565 8.35547C21.5772 8.35547 21.643 8.35076 21.7324 8.26138C21.7936 8.20022 21.8265 8.10613 21.8265 7.97911C21.8265 7.80504 21.7606 7.71565 20.8809 6.65243C20.3587 6.02203 19.8929 5.4716 19.8412 5.42455C19.7565 5.35399 19.6342 5.34458 18.8109 5.34458C17.9359 5.34458 17.87 5.34928 17.7806 5.43867ZM19.8506 6.69477C20.1235 7.01939 20.4057 7.35811 20.4763 7.44279L20.608 7.60275H19.526H18.4392V6.85002V6.0973H18.9003H19.3566L19.8506 6.69477Z" />
                  </svg>
                </span>
                <p>{PostOrderTrackData?.track_details[3]?.DELIVERED}</p>
                <h4>
                  {PostOrderTrackData?.current_status === "DELIVERED" ||
                  PostOrderTrackData?.current_status === "RTO" ||
                  PostOrderTrackData?.current_status === "RTO_DELIVERED"
                    ? "Your item has been delivered"
                    : ""}
                </h4>
              </li>
              <li
                className={`${
                  PostOrderTrackData?.current_status === "RTO" ||
                  PostOrderTrackData?.current_status === "RTO_DELIVERED"
                    ? "active"
                    : ""
                }`}
              >
                <span>
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.7852 1.018C5.24796 1.19525 3.86218 1.78179 2.70199 2.74217C2.34749 3.03866 1.77062 3.64776 1.49669 4.01193C0.768351 4.98842 0.28494 6.12927 0.0722389 7.3668C0.00133863 7.78253 -0.0244433 8.90727 0.0271205 9.37456C0.0819071 9.89343 0.201148 10.4413 0.375176 10.9602C0.542759 11.4726 0.613659 11.5757 0.778019 11.5435C0.894037 11.5209 0.993942 11.421 0.993942 11.3243C0.993942 11.2889 0.929488 11.0697 0.852142 10.8345C-0.401504 7.10253 1.60626 3.087 5.35431 1.8398C7.61345 1.08568 10.1433 1.54008 11.9964 3.02899C12.2703 3.24814 12.6667 3.63164 12.6474 3.6542C12.6377 3.66065 12.3444 3.63809 11.9932 3.59942C11.2004 3.51562 11.1295 3.51562 11.0489 3.59619C10.9683 3.67676 10.9651 3.82501 11.0424 3.91524C11.094 3.9797 11.1842 3.99581 12.1124 4.09572C12.6699 4.15695 13.1952 4.20851 13.2758 4.20851C13.524 4.20851 13.5207 4.21496 13.6464 3.09022C13.7753 1.90425 13.7785 1.78179 13.6915 1.69478C13.611 1.61421 13.4531 1.61099 13.3725 1.69155C13.3016 1.76245 13.2951 1.7979 13.2081 2.61326C13.1147 3.48017 13.1598 3.42539 12.8278 3.10634C11.8804 2.19108 10.7202 1.54653 9.45041 1.22426C9.22159 1.16625 8.87998 1.09535 8.69307 1.06634C8.29989 1.00511 7.15582 0.976105 6.7852 1.018Z" />
                    <path d="M7.50402 4.06989C7.47824 4.07956 6.58554 4.50818 5.52203 5.02382C4.45853 5.53623 3.51427 5.99064 3.42081 6.03254C3.32735 6.07443 3.23711 6.13566 3.221 6.17111C3.19522 6.21301 3.18555 6.98324 3.18555 8.53661C3.18555 10.6829 3.18877 10.8441 3.24356 10.9085C3.27256 10.944 4.25227 11.4338 5.41891 11.9914C7.03027 12.7681 7.55558 13.0065 7.61037 12.9872C7.74572 12.9453 11.8354 10.9762 11.8934 10.9214C11.9482 10.8731 11.9514 10.7506 11.9514 8.53338C11.9514 6.4805 11.945 6.19045 11.9031 6.14211C11.8547 6.08732 7.7425 4.09889 7.61681 4.06989C7.58136 4.06022 7.5298 4.06022 7.50402 4.06989ZM9.03482 5.3042C9.02837 5.31709 8.22913 5.70704 7.25909 6.17434L5.49947 7.01869L4.78403 6.67386C4.39085 6.48694 4.05246 6.31936 4.03313 6.30969C4.01701 6.2968 4.80336 5.9004 5.7863 5.42988L7.57492 4.56941L8.3097 4.92714C8.71577 5.12372 9.04126 5.29453 9.03482 5.3042ZM11.0104 6.23235C11.0651 6.26135 11.1135 6.29036 11.1135 6.30002C11.1135 6.30969 10.3142 6.70287 9.34098 7.17016L7.57169 8.01774L6.85302 7.67291C6.45663 7.48277 6.12468 7.31841 6.10857 7.30552C6.09568 7.29263 6.88525 6.89623 7.86496 6.42571L9.64392 5.57168L10.2724 5.87462C10.6204 6.0422 10.9523 6.20334 11.0104 6.23235ZM5.77985 7.70514L7.32677 8.44959L7.33643 10.409C7.34288 12.0139 7.33643 12.3652 7.30098 12.3523C7.27843 12.3427 6.45018 11.9495 5.46402 11.4725L3.66896 10.612V8.65262V6.6932L3.95256 6.82855C4.10725 6.90268 4.92905 7.29585 5.77985 7.70514ZM11.468 8.6494V10.6088L10.2047 11.2179C9.50856 11.5499 8.68676 11.9463 8.38383 12.0913L7.82629 12.3588V10.3993V8.44315L9.64069 7.56656C10.6365 7.08637 11.4551 6.6932 11.4615 6.6932C11.4648 6.68998 11.468 7.57301 11.468 8.6494Z" />
                    <path d="M4.6585 8.48865C4.58438 8.56921 4.5876 8.76258 4.66172 8.82703C4.74229 8.90116 5.97982 9.49414 6.05072 9.49414C6.08295 9.49414 6.1474 9.46514 6.19575 9.42646C6.27954 9.36201 6.30532 9.24277 6.25698 9.12353C6.22797 9.04618 4.94532 8.43064 4.81319 8.43064C4.75518 8.43064 4.6875 8.45642 4.6585 8.48865Z" />
                    <path d="M14.1751 5.59516C14.0881 5.68217 14.0946 5.75952 14.2235 6.10435C14.3556 6.44919 14.5039 7.02283 14.5844 7.48046C14.665 7.94776 14.665 9.12084 14.5844 9.60747C14.1526 12.1921 12.4864 14.2482 10.0694 15.1828C9.66974 15.3375 8.94463 15.5244 8.487 15.5921C8.05837 15.6533 6.99487 15.6437 6.54046 15.5728C5.18047 15.3601 3.94294 14.7929 2.91166 13.9034C2.7183 13.7326 2.53138 13.565 2.49593 13.5295C2.43792 13.4619 2.43792 13.4619 2.54427 13.4748C2.8182 13.5134 3.83981 13.6198 3.92682 13.6198C4.0654 13.6198 4.15886 13.5167 4.14597 13.3716C4.12986 13.1654 4.08796 13.1557 2.99223 13.0397C2.45081 12.9849 1.95773 12.9301 1.89327 12.9204C1.80304 12.9076 1.76114 12.9204 1.69347 12.9785C1.60645 13.0558 1.60323 13.0719 1.49366 14.0871C1.43242 14.6543 1.38086 15.1731 1.38086 15.2408C1.38086 15.46 1.60001 15.5663 1.76759 15.431C1.83527 15.3762 1.84816 15.3085 1.9255 14.5963C1.97062 14.1709 2.01896 13.8164 2.02863 13.8099C2.0383 13.8035 2.18654 13.9259 2.35735 14.0839C3.57877 15.2054 5.01933 15.8854 6.59847 16.0852C7.13989 16.1561 8.31619 16.1367 8.79316 16.0562C10.9266 15.6856 12.7023 14.535 13.8915 12.7496C14.1751 12.321 14.5522 11.554 14.7166 11.0738C15.171 9.74283 15.258 8.3506 14.9776 6.97449C14.8938 6.55554 14.6038 5.66928 14.5232 5.58871C14.4426 5.50815 14.2589 5.51137 14.1751 5.59516Z" />
                  </svg>
                </span>

                <p>{PostOrderTrackData?.track_details[4]?.RTO}</p>
                <h4>
                  {" "}
                  {PostOrderTrackData?.current_status === "RTO" ||
                  PostOrderTrackData?.current_status === "RTO_DELIVERED"
                    ? "Your item is out for return"
                    : ""}
                </h4>
              </li>
              <li
                className={`${
                  PostOrderTrackData?.current_status === "RTO_DELIVERED"
                    ? "active"
                    : ""
                }`}
              >
                <span>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.08583 1.08552L0 2.16814V7.1893C0 12.1655 0 12.2073 0.0642503 12.2715C0.128501 12.3358 0.170263 12.3358 6.41861 12.3358C11.7996 12.3358 12.7184 12.3293 12.773 12.2908C12.8308 12.2458 12.834 12.1816 12.8501 10.6428L12.8661 9.04293L12.9978 9.29993C13.2645 9.81393 13.348 10.1994 13.3255 10.8034C13.3095 11.1471 13.2902 11.2788 13.2195 11.5005C12.8436 12.6763 11.8606 13.473 10.6495 13.5886C10.2961 13.6208 10.203 13.6497 10.1708 13.7364C10.1291 13.8424 10.1516 14.0063 10.2158 14.0705C10.2736 14.1283 10.3218 14.1348 10.839 14.1348C11.7032 14.1348 12.2268 14.0191 12.9304 13.669C13.4347 13.4184 13.7978 13.1517 14.1897 12.7437C14.8097 12.0916 15.2145 11.2853 15.3719 10.3793C15.4329 10.0292 15.4329 9.24531 15.3719 8.89515C15.2948 8.44861 15.1727 8.06953 14.9703 7.65512C14.5656 6.82308 13.9038 6.13238 13.0846 5.67942L12.8501 5.55092V4.0057V2.45727L13.6211 1.68626L14.3921 0.915257V3.5431V6.16772H14.6491H14.9061V3.14796C14.9061 0.169953 14.9061 0.12819 14.8418 0.0639396C14.7776 -0.00031076 14.7358 -0.00031076 8.47462 -0.00031076H2.16845L1.08583 1.08552ZM6.28047 1.2847L5.50947 2.0557H3.21252H0.915567L1.68657 1.2847L2.45758 0.513692H4.75453H7.05148L6.28047 1.2847ZM7.76465 1.34252L6.93904 2.17135V3.14153V4.11171H6.42503H5.91103V3.28609V2.45727L6.88121 1.48708L7.8546 0.513692H8.22404H8.59027L7.76465 1.34252ZM13.2195 1.2847L12.4485 2.0557H10.1516H7.8546L8.62561 1.2847L9.39661 0.513692H11.6936H13.9905L13.2195 1.2847ZM5.39703 3.53346C5.39703 4.45545 5.40024 4.50043 5.46128 4.56146C5.52232 4.6225 5.56729 4.62571 6.42503 4.62571C7.28278 4.62571 7.32775 4.6225 7.38879 4.56146C7.44983 4.50043 7.45304 4.45545 7.45304 3.53346V2.5697H9.89455H12.3361V3.95109C12.3361 4.70924 12.3296 5.33247 12.3232 5.33247C12.3136 5.33247 12.1594 5.29392 11.9763 5.24894C11.7064 5.18148 11.5426 5.1622 11.0928 5.14935L10.5371 5.13008V4.42975C10.5371 3.76797 10.5338 3.723 10.4728 3.66196C10.431 3.6202 10.3668 3.59771 10.2833 3.59771C10.174 3.59771 9.98129 3.72621 8.33327 4.90199C7.32775 5.61838 6.48607 6.22876 6.46358 6.25767C6.41218 6.32192 6.41218 6.52752 6.4668 6.59177C6.48607 6.62069 7.32775 7.23107 8.33327 7.94746C9.98129 9.12324 10.174 9.25174 10.2833 9.25174C10.3668 9.25174 10.431 9.22925 10.4728 9.18749C10.5338 9.12645 10.5371 9.08148 10.5371 8.42933V7.73222L10.7555 7.75149C11.1988 7.79326 11.7482 8.01171 12.1369 8.30083L12.3361 8.44861V10.1352V11.8218H6.42503H0.514003V7.19573V2.5697H2.95552H5.39703V3.53346ZM10.0231 4.96303C10.0231 5.46418 10.0295 5.53164 10.0809 5.58304C10.1323 5.63444 10.219 5.64729 10.733 5.66336C11.6068 5.69548 12.0694 5.79186 12.6413 6.07135C13.6982 6.58535 14.4563 7.51377 14.7679 8.67349C14.8675 9.04935 14.9061 9.81072 14.845 10.2091C14.7133 11.054 14.315 11.8378 13.7174 12.4321C13.4283 12.7213 12.9754 13.0618 13.0846 12.914C13.6628 12.1077 13.8427 11.6322 13.8684 10.8162C13.8877 10.2733 13.8524 9.99062 13.7142 9.56657C13.3769 8.53214 12.5256 7.68082 11.5072 7.35957C11.0928 7.23107 10.8808 7.19573 10.4824 7.19573C10.007 7.19573 10.0231 7.17324 10.0231 7.88963C10.0231 8.20125 10.0102 8.44861 9.99735 8.44218C9.90098 8.40685 7.19604 6.444 7.20246 6.4183C7.21531 6.38617 9.9588 4.40726 10.0006 4.40405C10.0134 4.40084 10.0231 4.65463 10.0231 4.96303Z" />
                    <path d="M1.02832 10.0223V10.2793H2.57033H4.11234V10.0223V9.76529H2.57033H1.02832V10.0223Z" />
                    <path d="M1.02832 11.0516V11.3086H2.57033H4.11234V11.0516V10.7946H2.57033H1.02832V11.0516Z" />
                  </svg>
                </span>

                <p>{PostOrderTrackData?.track_details[5]?.RTO_DELIVERED}</p>
                <h4>
                  {PostOrderTrackData?.current_status === "RTO_DELIVERED"
                    ? "Your item has been returned"
                    : ""}
                </h4>
              </li>
            </ul>
          </div>

          <div className="right-part">
            <div className="box summery-table">
              <table>
                <tr>
                  <th>
                    <b>Items Summary</b>
                  </th>
                  <th>Product Type</th>
                  <th>Qty</th>
                  <th>Weight</th>
                  <th>Total Price</th>
                </tr>

                <tr>
                  <td>
                    {" "}
                    <img src="/images/icon33.svg" alt="img" />{" "}
                    {PostOrderTrackData?.order_details?.name}
                  </td>
                  <td>{PostOrderTrackData?.order_details?.product_type}</td>
                  <td>{PostOrderTrackData?.order_details.quantity}</td>
                  <td>{PostOrderTrackData?.order_details?.weight}</td>
                  <td>{PostOrderTrackData?.order_details?.amount}</td>
                </tr>
              </table>
            </div>

            <div className=" box customer-part">
              <h2>Customer Information</h2>
              <ul>
                <li>
                  <h4> Customer Name </h4>
                  <p> {PostOrderTrackData?.customer_details?.name} </p>
                </li>
                <li>
                  <h4> Phone Number </h4>
                  <p>{PostOrderTrackData?.customer_details?.phone_number}</p>
                </li>
                <li>
                  <h4> Email Id </h4>
                  <p> {PostOrderTrackData?.customer_details?.email}</p>
                </li>
                <li>
                  <h4>Delivered Address </h4>
                  <p>
                    {`${PostOrderTrackData?.delivered_address?.delivered_address},
                     ${PostOrderTrackData?.delivered_address?.delivered_city},
                     ${PostOrderTrackData?.delivered_address?.delivered_state}, 
                     ${PostOrderTrackData?.delivered_address?.delivered_pincode}`}{" "}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </Layout>
 
  );
};

export default TrackOrder;
