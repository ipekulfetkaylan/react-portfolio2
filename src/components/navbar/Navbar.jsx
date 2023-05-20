import "./navbar.css";

function Navbar() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
        <span className="logo">Aqua Art</span>
        <ul className="menu">
          <li className="menuItem"> <a href="Home">Home</a></li>
          <li className="menuItem"><a href="Features">Features</a></li>
          <li className="menuItem"><a href="Services">Services</a></li>
          <li className="menuItem"><a href="Pricing">Pricing</a></li>
          <li className="menuItem"><a href="Contact">Contact</a></li>
        </ul>
        </div>
       
        <button className="btn">Join Now</button>
      </div>
    </div>
  )
}

export default Navbar;

