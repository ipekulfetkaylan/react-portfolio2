import "./card.css";
import Search from "../img/search.png"

function Card() {
  return (
    <div className="c-container">
      <img className="c-image" src={Search} alt="icon" />
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
}

export default Card;
