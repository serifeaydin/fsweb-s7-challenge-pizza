import React from "react";
import Logo from "../assets/logo.svg";
import { useLocation } from "react-router-dom";

function Success() {
  const location = useLocation();
  const formData = location.state.formData;
  const total = location.state.total;
  const selectionTotal = location.state.selectionTotal;
  console.log(selectionTotal);
  return (
    <div className="last-page">
      <div className="order">
      <img src={Logo} alt="Logo" />
      <p>lezzetin yolda</p>
      <h1>SİPARİŞ ALINDI</h1>
      </div>
      <div className="order-summary">
      <h4>{formData.name}</h4>
      <p>Boyut:{formData.boyut}</p>
      <p>Hamur:{formData.select}</p>
      <p>Ek Malzemeler: {formData.ingredients.join(", ")}</p>
      </div>
      <div className="price">
        <p>Sipariş Toplamı</p>
       
      <p>Seçimler: {selectionTotal}TL</p>
      <p>Toplam: {total} TL</p>
      </div>
    </div>
  );
}

export default Success;