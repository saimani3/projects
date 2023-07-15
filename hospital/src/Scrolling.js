import React from "react";
import { Img } from "react-image";
import './App.css';
import img1 from "./images/scrolling6.jpg";
import img2 from "./images/scrolling2.jpg";
import img3 from "./images/scrolling1.jpg";

const Scrolling = () => {
  return (
    <div id="demo" className="carousel slide" data-ride="carousel">

  {/* <!-- Indicators --> */}
  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  
  {/* <!-- The slideshow --> */}
  <div className="carousel-inner">
    <div className="item active">
      <Img src={img1} alt="Los Angeles" />
    </div>
    <div className="item">
      <Img src={img2} alt="Chicago" />
    </div>
    <div className="item">
      <Img src={img3} alt="New York" />
    </div>
  </div>
  
  {/* <!-- Left and right controls --> */}
  <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
</div>

  );
};
export default Scrolling;
