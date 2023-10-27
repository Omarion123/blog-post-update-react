import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";
const Contactus = () => {
  return (
    <div className="contactus-container">
      <div className="contact-content">
        <div className="contact-head">
          <h3>Contact us</h3>
        </div>
        <form>
          <div className="image-select">
            <AiOutlineMail className="contact-email-icon" />
            <input type="email" placeholder="Enter email here..." required />
          </div>
          <div className="image-select">
            <AiFillMessage className="contact-message-icon" />
            <input type="text" required placeholder="Enter message here..." />
          </div>
          <div className="contact-button">
            <button className="contact-button-send">Send</button>
            <BsFillSendFill className="contact-button-icon" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
