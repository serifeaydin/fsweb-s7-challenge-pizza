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
    return (
        <div>
            
            <div className="icons">
<img src={Yeni}/><Link className="first-icons">Yeni!Kore</Link>
<img src={Pizza}/><Link className="first-icons">Pizza</Link>
<img src={Burger}/><Link className="first-icons">Burger</Link>
<img src={Kızartmalar}/><Link className="first-icons">Kızartmalar</Link>
<img src={FastFood}/><Link className="first-icons">FastFood</Link>
<img src={İçecek}/><Link className="first-icons">Gazlı İçecekler</Link>
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
         <button className="icon-buttons"> <img src={Yeni}/><Link className="last-icons">Ramen</Link></button>
         <button className="icon-buttons"><img src={Pizza}/><Link className="last-icons">Pizza</Link></button>
         <button className="icon-buttons"> <img src={Burger}/><Link className="last-icons">Burger</Link></button>
         <button className="icon-buttons"><img src={Kızartmalar}/><Link className="last-icons">French fries</Link></button>
         <button className="icon-buttons"><img src={FastFood}/><Link className="last-icons" >FastFood</Link></button>
         <button className="icon-buttons"><img src={İçecek}/><Link className="last-icons">Gazlı İçecekler</Link></button>
          </div>

          <div className="foods"> 
            <div className="food1">
                <img src={Food1}/>
<h3>Terminal Pizza</h3>
<p>4.9   (200)    60tl</p>
            </div>
            <div className="food2">
            <img src={Food2}/>    
<h3>Position Absolute Acı Pizza</h3>
<p>4.9   (928)    85tl</p>
            </div>
            <div className="food3">
            <img src={Food3}/>
<h3>Useeffect Tavuk Burger</h3>
<p>4.9   (462)    75tl</p>
            </div>

          </div>

         </div>
        </div>


 )
}
export default MainPage;