import "./priceCard.css";

function PriceCard({price, type}) {
  return (
    <div className="pc-container">
      <div className="pCardContainer">
        <span className="price">
          <span className="dolar">$</span> {price}
        </span>
      </div>
      <button className="type">{type}</button>
      <ul className="list">
        <li className="list-item">Lorem, ipsum.</li>
        <li className="list-item">Lorem, ipsum dolar.</li>
        <li className="list-item">Lorem, ipsum sit.</li>
        <li className="list-item">Lorem, ipsum dolar sit.</li>
      </ul>
      <button className="btn">Join Now</button>
    </div>
  );
}

export default PriceCard;
