import React from "react";
import "./Footer.scss"
const Footer = () => {
  return (
    <div className="footer">
    <div className="top">
      <div className="item">
        <h1 className="loogo">
          <img src="/img/trend.png"/>
        </h1>
        
        <p className="te">
        You can spruce up your style with the right clothing.Trend is home to some of the best cloths for men, for kids, and for women. Brands such as Wrangler, Levi’s, Lee, W, Peter England, and U.S. Polo Assn have a wide selection of chinos, jeans, shorts, and more.
        </p>
      </div>

      <div className="item">
        <h1>Categories</h1>
        <span>Women</span>
        <span>Men</span>
        <span>Shoes</span>
        <span>Accessories</span>
        <span>New Arrivals</span>
      </div>
      <div className="item">
        <h1>Links</h1>
        <span>FAQ</span>
        <span>Pages</span>
        <span>Stores</span>
        <span>Compare</span>
        <span>Cookies</span>
      </div>
      <div className="item">
        <h1>Contact</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consequatur in incidunt quo sequi sunt rerum commodi voluptate tempora unde a cum ratione alias maiores, impedit tempore illo mollitia similique.</p>
      </div>
    </div>
    <div className="bottom">
      <div className="left">

      <div className="logo">TRENDHIVE</div>
      <div className="copyright"></div>
      <span>© Copyright 2023. All Rights Reserved
      </span>
      </div>
      <div className="right">
        <img src="/img/payment.png"></img>

      </div>
    </div>
    </div>
      
  );
};

export default Footer;
