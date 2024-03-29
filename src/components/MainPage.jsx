import React from "react";
import { Link } from "react-router-dom";
import Yeni from "../assets/1.svg";
import Pizza from "../assets/2.svg";
import Burger from "../assets/3.svg";
import Kızartmalar from "../assets/4.svg";
import FastFood from "../assets/5.svg";
import İçecek from "../assets/6.svg";
import Kart1 from "../assets/kart-1.png";
import Kart2 from "../assets/kart-2.png";
import Kart3 from "../assets/kart-3.png";
import Food1 from "../assets/food-1.png";
import Food2 from "../assets/food-2.png";
import Food3 from "../assets/food-3.png";


function MainPage(){
  const foods=[

    {
        isim:"Terminal Pizza",
        puan:4.9,
        yorumSayisi:200,
        fiyat:"60 tl",
        
    },
    {
        isim:"Position Absolute Acılı Pizza",
        puan:4.9,
        yorumSayisi:928,
        fiyat:"85 tl"
        
       
    },
    {
        isim:"useEffect Tavuklu Burger",
        puan:4.9,
        yorumSayisi:462,
        fiyat:"75 tl"
    }

]


    return (
        <div>
            
            <div className="icons">
<img src={Yeni}/><p className="first-icons">Yeni!Kore</p>
<img src={Pizza}/><p className="first-icons">Pizza</p>
<img src={Burger}/><p className="first-icons">Burger</p>
<img src={Kızartmalar}/><p className="first-icons">Kızartmalar</p>
<img src={FastFood}/><p className="first-icons">FastFood</p>
<img src={İçecek}/><p className="first-icons">Gazlı İçecekler</p>
            </div>

            <div className="sipariş">
             <div className="left"   style={{backgroundImage: `url(${Kart1})`,}}>
              <h1>Özel <br/>Lezzetus</h1>
              <p>Position:Absolute Acı Burger</p>
              <button className="siparişButonu">Sipariş Ver</button>
             </div>

             <div className="right">
              <div className="burger"style={{backgroundImage: `url(${Kart2})`,}}>
               <h2>Hackathlon <br/>Burger Menü</h2>
               <button className="siparişButonu">Sipariş Ver</button>
              </div>
              <div className="kurye" style={{backgroundImage: `url(${Kart3})`,}}>
               <h2>Çooook hızlı<br/>npm gibi kurye</h2>
               <button className="siparişButonu">Sipariş Ver</button>
              </div>
             </div>
            </div>
         <div className="last-section">
            <p>en çok paketlenen menüler</p>
            <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
          <div className="last-icons">
        <Link className="last-icons" to="/OrderPage"><button className="icon-buttons"><img src={Yeni}/>Ramen</button></Link>
         <button className="icon-buttons"><img src={Pizza}/><Link className="last-icons" to="/OrderPage">Pizza</Link></button>
         <button className="icon-buttons"> <img src={Burger}/><Link className="last-icons" to="/OrderPage">Burger</Link></button>
         <button className="icon-buttons"><img src={Kızartmalar}/><Link className="last-icons" to="/OrderPage">French fries</Link></button>
         <button className="icon-buttons"><img src={FastFood}/><Link className="last-icons"to="/OrderPage" >FastFood</Link></button>
         <button className="icon-buttons"><img src={İçecek}/><Link className="last-icons" to="/OrderPage">Gazlı İçecekler</Link></button>
          </div>

          <div className="foods">
          <Link to={{
  pathname: "/OrderPage",
  state: {
    selectedFood: foods[0] 
  }
}} className="food1">
  <div>
    <img src={Food1} alt="Food 1" />
    <h3>{foods[0].isim}</h3>
    <p>{foods[0].puan} ({foods[0].yorumSayisi}) {foods[0].fiyat}</p>
  </div>
</Link>
<Link to={{
  pathname: "/OrderPage",
  state: {
    selectedFood: foods[1] 
  }
}} className="food2">
  <div>
    <img src={Food2} alt="Food 2" />
    <h3>{foods[1].isim}</h3>
    <p>{foods[1].puan} ({foods[1].yorumSayisi}) {foods[1].fiyat}</p>
  </div>
</Link>
<Link to={{
  pathname: "/OrderPage",
  state: {
    selectedFood: foods[2] 
  }
}} className="food3">
  <div>
    <img src={Food3} alt="Food 3" />
    <h3>{foods[2].isim}</h3>
    <p>{foods[2].puan} ({foods[2].yorumSayisi}) {foods[2].fiyat}</p>
  </div>
</Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;