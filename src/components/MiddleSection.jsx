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
        fiyat:"60 TL",
        
    },
    {
        isim:"Position Absolute Acılı Pizza",
        puan:4.9,
        yorumSayisi:928,
        fiyat:"85 TL"
        
       
    },
    {
        isim:"useEffect Tavuklu Burger",
        puan:4.9,
        yorumSayisi:462,
        fiyat:"75 TL"
    }

]


    return (
        <div>
            
            <div className="icons">
<img src={Yeni}/><b className="first-icons">Yeni!Kore</b>
<img src={Pizza}/><b className="first-icons">Pizza</b>
<img src={Burger}/><b className="first-icons">Burger</b>
<img src={Kızartmalar}/><b className="first-icons">Kızartmalar</b>
<img src={FastFood}/><b className="first-icons">FastFood</b>
<img src={İçecek}/><b className="first-icons">Gazlı İçecekler</b>
            </div>

            <div className="sipariş">
             <div className="left"   style={{backgroundImage: `url(${Kart1})`,}}>
              <h1>Özel <br/>Lezzetus</h1>
              <p>Position:Absolute Acı Burger</p>
              <button className="siparişButonu">Sipariş Ver</button>
             </div>

             <div className="right">
              <div className="burger"style={{backgroundImage: `url(${Kart2})`,}}>
               <h3>Hackathlon <br/>Burger Menü</h3>
               <button className="siparişButonu">Sipariş Ver</button>
              </div>
              <div className="kurye" style={{backgroundImage: `url(${Kart3})`,}}>
               <h3>Çooook</h3><h3> hızlı<br/>npm gibi kurye</h3>
               <button className="siparişButonu">Sipariş Ver</button>
              </div>
             </div>
            </div>
         <div className="last-section">
            <p className="kirmizi">en çok paketlenen menüler</p>
            <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
          <div className="last-icons">
        <Link className="last-icons" to="/OrderPage"><button className="icon-buttons"><img src={Yeni}/>Ramen</button></Link>
        <Link className="last-icons" to="/OrderPage"><button className="icon-buttons"><img src={Pizza}/>Pizza</button></Link>
        <Link className="last-icons" to="/OrderPage"><button className="icon-buttons"><img src={Burger}/>Burger</button></Link>
        <Link className="last-icons" to="/OrderPage"><button className="icon-buttons"><img src={Kızartmalar}/>French fries</button></Link>
        <Link className="last-icons" to="/OrderPage"><button className="icon-buttons"><img src={FastFood}/>FastFood</button></Link>
        <Link className="last-icons" to="/OrderPage"><button className="icon-buttons"><img src={İçecek}/>Gazlı İçecekler</button></Link>
         
          </div>

          <div className="foods" >
          
  <div className="food1">
    <img src={Food1} alt="Food 1" />
    <h3>{foods[0].isim}</h3>
    <div  className="food-p">
    <p>{foods[0].puan}</p>
    <p>  ({foods[0].yorumSayisi}) </p>
    <p> {foods[0].fiyat}</p>
    </div>
  </div>


  <div className="food2">
    <img src={Food2} alt="Food 2" />
    <h3>{foods[1].isim}</h3>
    <div className="food-p">
    <p>{foods[1].puan}</p>
    <p> ({foods[1].yorumSayisi})</p>
    <p> {foods[1].fiyat}</p>
    </div>
  </div>


  <div className="food3">
    <img src={Food3} alt="Food 3" />
    <h3>{foods[2].isim}</h3>
    <div className="food-p">
    <p>{foods[2].puan}</p>
    <p> ({foods[2].yorumSayisi})</p>
    <p> {foods[2].fiyat}</p>
    </div>
  </div>

        </div>
      </div>
    </div>
  );
}

export default MainPage;