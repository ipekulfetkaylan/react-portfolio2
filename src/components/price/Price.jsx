import PriceCard from "../priceCard/PriceCard";
import "./price.css";

function Price() {
  return (
    <div className="p-container">
        <PriceCard price="25" type="Basic"/>
        <PriceCard price="50" type="Premium"/>
        <PriceCard price="60" type="Advanced"/>
    </div>
  )
}

export default Price
