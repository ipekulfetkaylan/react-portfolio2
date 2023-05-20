import "./intro.css";
import Woman from "../img/woman.png";
import AnimatedShapes from "../animated/AnimatedShapes";

function Intro() {
  return (
    <div className="IntroContainer">
        <div className="intro-left">
          <h1 className="title">Lorem, ipsum dolor.</h1>
          <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Debitis sed pariatur ipsam ab dolorum, ut optio temporibus ducimus quam ratione omnis facere at nihil officiis.
          </p>
          <div className="info">
            <button className="btn ">Start a project</button>
            <div className="contact">
              <span className="phone">Call us (021)22455259</span>
              <span className="contactText">Lorem ipsum dolor sit amet.</span>
            </div>
          </div>
        </div>
        <div className="intro-right">
          <img src={Woman} alt="" className="image"/>
        </div>
        <AnimatedShapes/>
    </div>
  )
}

export default Intro
