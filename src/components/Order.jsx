import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import {
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  CardGroup,
  FormText,
} from "reactstrap";




const Order = () => {
  
  const initialForm = {
    name: "Position Absolute Acı Pizza",
    size: "",
    ingredients: [],
    note: "",
    dough: "",
    quantity: 0,
  };

  const [formData, setFormData] = useState(initialForm);
  const [quantity, setQuantity] = useState(1);
 
  const history = useHistory();

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

 
  
  

 

 
  
 
  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    if (e.target.type === "checkbox") {
      const ingredients = [...formData.ingredients];
      if (checked) {
        ingredients.push(value);
      } else {
        const index = ingredients.indexOf(value);
        ingredients.splice(index, 1);
      }
      setFormData((prevData) => ({
        ...prevData,
        ingredients,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };


  

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

 //toplam ücreti hesapla
     
 const calculateTotal = () => {
  let total = quantity * 85;
  formData.ingredients.forEach((ingredient) => {
    total += ingredientPrices[ingredient] * quantity;
  });
  return total;
};
 //seçilenler için ücret hesapla
 
 const calculateSelections = () => {
  let selectionTotal = formData.ingredients.length * 5;
  formData.ingredients.forEach((ingredient) => {
    selectionTotal += ingredientPrices[ingredient] * (quantity-1);
  });
  return selectionTotal;
};

 
 
   //hamur tipini seç
   


   
   const handleSubmit = async (event) => {
    event.preventDefault();

    // Form validation
    if (formData.ingredients.length === 0) {
      alert("Please select size and at least one ingredient!");
      return;
    }

    // Calculate total price
    const total = calculateTotal();
    const selectionTotal= calculateSelections();
    // Send POST request
    axios.post("https://reqres.in/api/pizza", formData)
      .then((res) => {
        console.log(res.data);
        // Redirect to order received page
        history.push({
          pathname: "/Order-received",
          state: { 
            formData: formData,
            total: calculateTotal(),
            selectionTotal: calculateSelections()
          },
        })
      })
      .catch((error) => console.error(error));
  };

  
  
   return (
     <>
       <div>
         <Form onSubmit={handleSubmit}>
           <div className="selection">
             <div className="boyut">
               <b>Boyut Seç</b>
               
              <input
              id="small"
                name="boyut"
                type="radio"
                value="S"
                onChange={handleInputChange}
              />
              <label for="small">
              S
            </label>
           
              <input
                id="medium"
                name="boyut"
                type="radio"
                value="M"
                onChange={handleInputChange}
              />
               <label for="medium"> 
              M
            </label>
            
              <input
              id="large"
                name="boyut"
                type="radio"
                value="L"
                onChange={handleInputChange}
              />
              <label for="large">
              L
            </label>
            </div>
               <div className="hamur">
                 <Label for="exampleSelect">
                   <b>Hamur Seç</b>
                 </Label>
                <Input id="exampleSelect" name="select" type="select" onChange={handleInputChange}>
                <option>Hamur Kalınlığı Seçin</option>
                 <option>İnce</option>
                 <option>Normal</option>
                 <option>Kalın</option>
 </Input>
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
                           onChange={handleInputChange}
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
                 value={formData.note}
                 onChange={handleInputChange}
               />
             </div>
           </FormGroup>
           <FormGroup className="quantity-group">
             <CardGroup>
               <Button
                 type="button"
                 name="minus"
                 color="warning"
                 onClick={decreaseQuantity}
               >
                 -
               </Button>
               <FormText>{quantity}</FormText>
               <Button
                 type="button"
                 name="plus"
                 color="warning"
                 onClick={increaseQuantity}
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