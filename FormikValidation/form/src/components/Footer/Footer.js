import React, { useState, useRef } from "react";
import "./Footer.css";
// import greencell_logo from "../../assets/images/gcm_logo_wh.png"
// import addressIcon from "../../assets/icons/footer-address-icon.png"
// import callIcon from "../../assets/icons/footer-call-icon.png"
// import emailIcon from "../../assets/icons/footer-email-icon.png"
// import linkedIn from "../../assets/icons/linkedin.svg"
// import twitter from "../../assets/icons/twit.svg"
// import whatsapp from "../../assets/icons/whatsappImage.png"
import emailjs from "@emailjs/browser";

const Result = () => {
  return <p>Your message has successfully sent.we will contact you soon</p>;
};

const Footer = () => {
  const form = useRef();
  const [result, setResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oj7kznl",
        "template_8p37v88",
        form.current,
        "TwQE2s9pVt7IQy-BL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };

  return (
    <div class="container-footer">
      <div class="footer-left-part">
        <img src="" class="footer_logo" alt="" />
        <div className="row-element">
          <img src="" alt="" />
          <div>
            <p>
              Unit No. 405, 4th Floor, ‘E’ Wing,
              <br />
              Corporate Avenue, New A. K. Link Road, <br />
              Chakala, Andheri (East), <br />
              Mumbai – 400059, Maharashtra, India
            </p>
          </div>
        </div>
        <div className="row-element">
          <img src="" alt="" />
          <a href="tel:(+91)022 6907 4500">(+91) 022 6907 4500</a>
        </div>
        <div className="row-element">
          <img src="" alt="" />
          <a href="mailto:contact@greencellmobility.com">
            contact@greencellmobility.com
          </a>
        </div>
        <div className="row-element">
          <a href="https://www.linkedin.com/company/greencell-mobility/">
            <img src="" class="me-2" alt=""></img>
          </a>
          <a href="https://twitter.com/greencellev">
            <img src="" alt=""></img>
          </a>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=919930000446&text=Hello this is the starting message"
          >
            {" "}
            <img src="" alt="" />
          </a>
        </div>
      </div>

      <div class="footer-right-part">
        <form onSubmit={sendEmail} ref={form}>
          <div>
            <h4>Send Us a Message</h4>
            <div className="row">
              <div className="row-element">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Enter Name" name="name" />
              </div>
              <div className="row-element">
                <label htmlFor="Company">Company</label>
                <input type="text" placeholder="Company" name="company" />
              </div>
            </div>

            <div className="row">
              <div className="row-element">
                <label htmlFor="">Designation</label>
                <input
                  type="text"
                  placeholder="Enter Designation"
                  name="designation"
                />
              </div>
              <div className="row-element">
                <label htmlFor="">Email</label>
                <input type="text" placeholder=" Enter Email " name="email" />
              </div>
            </div>
            <div className="row">
              <div className="row-element">
                <label htmlFor="">Contact</label>
                <input
                  type="text"
                  placeholder="Contact Number"
                  name="contact"
                />
              </div>
              <div className="row-element">
                <label htmlFor="">Business Category</label>
                <select name="Business Category" id="select">
                  <option value="null">-----</option>
                  <option value="Business Development">
                    Business Development
                  </option>
                  <option value="Marketing">Marketing</option>
                  <option value="HR">HR</option>
                  <option value="Finance">Finance</option>
                  <option value="Customer Service">Customer Service</option>
                  <option value="Legal">Legal</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="row-element">
                <label htmlFor="">Message</label>
                <textarea placeholder="Enter Message" name="message"></textarea>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="row-element">
                  <input type="submit" value="Submit" />
                </div>
              </div>
              <div className="row">{result ? <Result /> : null}</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;
