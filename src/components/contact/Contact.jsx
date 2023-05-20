import "./contact.css";
import Send from "../img/send.png";
import Phone from "../img/telephone-call.png";
import Pin from   "../img/pin.png";


function Contact() {
  return (
    <div className="contact-container">
      <div className="c-wrapper">
        <div className="form-container">
            <h1 className="f-title">Contact With Us</h1>
          <div className="form">
            <div className="form-left ">
              <input type="text" className="input" placeholder="Your Name" />
              <input type="email" className="input" placeholder="Your Email" />
              <input type="text" className="input" placeholder="Subject" />
            </div>
            <div className="f-right">
              <textarea
                type="text"
                className="textarea"
                placeholder="Your Message"
              />
              <div className="btn s-btn">Send</div>
            </div>
          </div>
        </div>
        <div className="address-container">
            <div className="address-item">
                <img className="a-icon" src={Pin} alt="icon" />
                <span className="a-text">Lorem ipsum dolor sit amet.</span>
            </div>
            <div className="address-item">
                <img className="a-icon" src={Phone} alt="icon" />
                <span className="a-text">+34 0512 54578</span>
            </div>
            <div className="address-item">
                <img className="a-icon" src={Send} alt="icon" />
                <span className="a-text">info@lorem.com</span>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
