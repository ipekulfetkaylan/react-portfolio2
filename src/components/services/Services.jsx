import "./services.css";
import Woman from "../img/woman-tablet.png";
import Card from "../card/Card";
import Play from "../img/play (1).png";
import { useState } from "react";

function Services() {
  const [open, setOpen] = useState(true);

  return (
    <div className="s-container">
      <div className="s-left">
        {open && <img src={Woman} alt="woman" className="s-img" />}
        {!open && (
          <iframe
            width="660"
            height="auto"
            src="https://www.youtube.com/embed/W-f6F2gxrl4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            autoplay="true"
            className="video"
          ></iframe>
        )}
      </div>
      <div className="s-right">
        <div className="s-wrapper">
          <h1 className="s-title">Lorem, ipsum dolor.</h1>
          <p className="s-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            dolores perferendis eveniet, adipisci nam ratione culpa, non quo
            esse ad sapiente aliquid rerum molestias nostrum porro earum
            possimus placeat ipsa.
          </p>
          <div className="card-container">
            <Card />
            <Card />
            <Card />
          </div>
          <button className="btn s-btn" onClick={() => setOpen(!open)}>
            {open && (
              <>
                <img className="s-icon" src={Play} alt="" />
                <span>How it works</span>
              </>
            )}
            {!open && <span>Close</span>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
