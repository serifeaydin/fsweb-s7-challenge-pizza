import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import {
  Col,
  Button,
  ButtonGroup,
  CardGroup,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";




const Order = () => {
  const history = useHistory();
  const initialForm = {
    name: "",
    size: "",
    ingredients: [],
    note: "",
    dough:[],
  };
  

  const [form, setForm] = useState(initialForm);

  
  const ingredients = [
    { value: "pepperoni", label: "Pepperoni" },
    { value: "mushrooms", label: "Mushrooms" },
    { value: "olives", label: "Olives" },
    { value: "sausage", label: "Sausage" },
    { value: "ham", label: "Ham" },
    { value: "onions", label: "Onions" },
    { value: "cheese", label: "Extra Cheese" },
    { value: "bell pepper", label: "Bell Pepper" },
    { value: "jalapenos", label: "Jalapenos" },
    { value: "pineapple", label: "Pineapple" },
    { value: "chicken", label: "Chicken" },
    { value: "tomatoes", label: "Tomatoes" },
    { value: "corn", label: "Corn" },
  ];

  const ingredientPrices = {
    pepperoni: 5,
    mushrooms: 5,
    olives: 5,
    sausage: 5,
    ham: 5,
    onions: 5,
    cheese: 5,
    "bell pepper": 5,
    jalapenos: 5,
    pineapple: 5,
    chicken: 5,
    tomatoes: 5,
    corn: 5,
  };

 
  
  

  //pizza adeti belirleme

  const [quantity, setQuantity] = useState(1);

  const handleButtonClick = (event) => {
    const { name } = event.target;
    if (name === "minus") {
      if (quantity > 1) setQuantity(quantity - 1);
    } else if (name === "plus") {
      setQuantity(quantity + 1);
    }
  };

  //ek malzeme seçimi

  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const maxIngredientSelection = 10;

  const handleIngredientChange = (event) => {
    const ingredient = event.target.value;
    if (event.target.checked) {
      if (selectedIngredients.length < maxIngredientSelection) {
        setSelectedIngredients((prevIngredients) => [
          ...prevIngredients,
          ingredient,
        ]);
      } else {
        alert("Please select maximum of 10 ingredients.");
      }
    } else {
      setSelectedIngredients((prevIngredients) =>
        prevIngredients.filter((item) => item !== ingredient)
      );
    }
  };

  
//toplam ücreti hesapla
    
  const calculateTotal = () => {
    let total = quantity * 85;
    selectedIngredients.forEach((ingredient) => {
      total += ingredientPrices[ingredient] * quantity;
    });
    return total;
  };
//seçilenler için ücret hesapla

   const [quantitySelections, setQuantitySelections] = useState(0);
 
    const calculateSelections = () => {
    let selectionTotal = quantitySelections * 5;
    selectedIngredients.forEach((ingredient) => {
      selectionTotal += ingredientPrices[ingredient] * quantity;
    });
    return selectionTotal;
  };

  
//boyutu seçili mi
  const [selectedSize, setSelectedSize] = useState(null);

  const onCheckboxBtnClick = (size) => {
    if (selectedSize === size) {
      setSelectedSize(null);
    } else {
      setSelectedSize(size);
    }
  };

  //hamur tipini seç
  const [dough, setDough] = useState(""); // 1. Adım: hamur tipini tutacak state

  const handleDoughChange = (event) => {
    setDough(event.target.value); // 2. Adım: hamur tipi seçimi değiştiğinde state'i güncelle
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Sipariş bilgilerini hazırla
    const orderData = {
      name: "Position Absolute Acı Pizza",
      size: selectedSize,
      dough:dough,
      ingredients: selectedIngredients,
      note: form.note || "", 
    };
    // Formu doldurulmuş mu kontrol et
    if (!selectedSize || selectedIngredients.length === 0) {
      alert("Please select size and at least one ingredient!");
      return;
    }

    
    
    
    const total = calculateTotal();
    const selectionTotal = calculateSelections();
    
    try {
      // Axios ile POST request gönder
      const response = await axios.post("https://reqres.in/api/pizza", orderData);
      // Response'u konsola yazdır
      console.log("Response:", response.data);
      // Sipariş özetini konsola yazdır
      console.log("Order Summary:", orderData);
      // Sipariş alındı sayfasına yönlendirme yap
      
      // Sipariş alındı sayfasına yönlendirme yap
      history.push({
        pathname: "/order-received",
        state: { orderData, selectionTotal, total},
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

 

  return (
    <>
      <div>
        <Form>
          <div className="selection">
            <div className="boyut">
              <b>Boyut Seç</b>
              <div>
                <ButtonGroup>
                  <Button
                    color="secondary"
                    onClick={() => onCheckboxBtnClick("S")}
                    active={selectedSize === "S"}
                  >
                    S
                  </Button>
                  <Button
                    color="secondary"
                    onClick={() => onCheckboxBtnClick("M")}
                    active={selectedSize === "M"}
                  >
                    M
                  </Button>
                  <Button
                    color="secondary"
                    onClick={() => onCheckboxBtnClick("L")}
                    active={selectedSize === "L"}
                  >
                    L
                  </Button>
                </ButtonGroup>
              </div>
              <div className="hamur">
                <Label for="exampleSelect">
                  <b>Hamur Seç</b>
                </Label>
               <Input id="exampleSelect" name="select" type="select" onChange={handleDoughChange}>
               <option>Hamur Kalınlığı Seçin</option>
                <option>İnce</option>
                <option>Normal</option>
                <option>Kalın</option>
</Input>
              </div>
            </div>
          </div>
          <FormGroup>
            <div className="secim">
              <Label>
                <b>Ek Malzemeler</b>
              </Label>
              <p>En fazla 10 Malzeme Seçebilirsiniz. 5 tl</p>
              <Row className="malzeme">
                {ingredients.map((ingredient, index) => (
                  <Col md={4} key={index}>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          value={ingredient.value}
                          onChange={handleIngredientChange}
                        />
                        {ingredient.label}
                      </Label>
                    </FormGroup>
                  </Col>
                ))}
              </Row>
            </div>
          </FormGroup>
          <FormGroup>
            <div className="order-note">
              <Label>
                <b>Sipariş Notu</b>
              </Label>
              <p>Siparişine eklemek istediğin bir not var mı?</p>
              <Input
                name="note"
                type="textarea"
                value={form.note}
                onChange={(e) => setForm({ ...form, note: e.target.value })}
              />
            </div>
          </FormGroup>
          <FormGroup className="quantity-group">
            <CardGroup>
              <Button
                type="button"
                name="minus"
                color="warning"
                onClick={handleButtonClick}
              >
                -
              </Button>
              <FormText>{quantity}</FormText>
              <Button
                type="button"
                name="plus"
                color="warning"
                onClick={handleButtonClick}
              >
                +
              </Button>
            </CardGroup>
          </FormGroup>
          <FormGroup>
            <Label>
              <b>Sipariş Toplamı</b>
            </Label>
            <p>Seçimler: {calculateSelections()} TL</p>
            <p className="toplam">Toplam: {calculateTotal()} TL</p>
          </FormGroup>
          <div className="btn-warning">
            <Button 
              color="warning"
              type="submit"
              name="submit-btn"
              onClick={handleSubmit}
            >
              Sipariş Ver
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Order;