import React from "react";
import { Link } from "react-router-dom";
import Adress from "../assets/icon-1.png";
import Mail from "../assets/icon-2.png";
import Telephone from "../assets/icon-3.png";
import Insta1 from "../assets/li-0.png";
import Insta2 from "../assets/li-1.png";
import Insta3 from "../assets/li-2.png";
import Insta4 from "../assets/li-3.png";
import Insta5 from "../assets/li-4.png";
import Insta6 from "../assets/li-5.png";
import LogoFooter from "../assets/logo-footer.svg";




function Footer(){
    return(
        <div className="footer">
           <div className="leftSide">
           <img src={LogoFooter}/>
            <div><br/>
            <img src={Adress}/>
           341 Londonderry Road <br/>Istanbul Türkiye 
            </div><br/>
            <div>
            <img src={Mail}/>
            aciktim@teknolojikyemekler.com
            </div><br/>
            <div>
            <img src={Telephone}/>
           +90212 65 12 32
            </div>
            </div>
            <div className="middle">
             <h3>Sıcacık Menüler</h3> 
             <p>Terminal Pizza</p> 
             <p>5 Kişilik Hackatlon Pizza</p>
             <p>5 Kişilik Hackatlon Pizza</p> 
             <p>useEffect Tavuklu Pizza</p> 
             <p>Beyaz Console Frosty </p> 
             <p>Testler Geçti Mutlu Burger </p>
             <p>Position Absolute Acı Burger </p> 
            </div>
          <div className="rightSide">Instagram 
          <div>
          <img src={Insta1}/>
          <img src={Insta2}/>
          <img src={Insta3}/>
          <img src={Insta4}/>
          <img src={Insta5}/>
          <img src={Insta6}/>
          </div>
          </div><br/>
         
         

</div>


       
    )
}
export default Footer;