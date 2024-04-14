import React from "react";
import Logo from "../assets/logo.svg";
import FormBanner from "../assets/form-banner.png";
import { Link } from "react-router-dom";
import Order from "../components/Order";
import Footer from "../components/Footer";

function OrderPage() {
 
  

  return (
    <section>
      <div>
        <div className="aciklama">
        <div className="logo-footer">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="form-banner">
          <img src={FormBanner} alt="Form Banner" />
        </div>
        <div className="order-navbar">
          <Link className="order-navbar-link" to="/HomePage">Ana Sayfa</Link>
          <Link className="order-navbar-link" to="/Secenekler">- Seçenekler -</Link>
          <Link className="order-navbar-link" to="/OrderPage">Sipariş Oluştur</Link>
        </div>
        
          <div className="information">
            <b>Position Absolute Acı Pizza</b>
            <div className="fiyat">
            <h4>85 TL</h4> <p>4.9</p> <p>(200)</p>
            </div>
        <p>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok aci
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayali buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
        </p>
          </div>
        
      </div>
      </div>
      <div>
        <Order />
        <Footer />
      </div>
    </section>
  );
}
export default OrderPage;