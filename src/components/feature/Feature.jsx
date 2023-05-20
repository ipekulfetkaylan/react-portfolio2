import "./feature.css";
import Phone from "../img/phone.png";

function Feature() {
  return (
    <div className="featureContainer">
      <div className="f-left">
        <img className="f-img" src={Phone} alt="phone" />
      </div>
      <div className="f-right">
        <span className="f-title">
          Lorem, ipsum.
          <br />
          Ipsum,dolar.
        </span>
        <span className="f-subTitle">
          Lorem ipsum dolor sit amet consectetur.
        </span>
        <p className="f-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis aut
          a repudiandae architecto distinctio laboriosam sunt nesciunt officia
          cum, voluptates corporis libero repellat facilis iure, voluptatibus
          consequatur rem error dicta magnam autem similique laborum sit eius
          sequi. Corrupti, enim dolor.
        </p>
        <button className="btn f-btn">Learn More</button>
      </div>
    </div>
  );
}

export default Feature;
