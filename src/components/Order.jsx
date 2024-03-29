import React, { useState } from "react";
import {
  Button,
  CardGroup,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";

function Order() {
  // State for quantity of pizza
  const [quantity, setQuantity] = useState(1);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  // Maximum number of ingredients allowed
  const maxIngredientSelection = 10;

  // Function to handle quantity change and order submission
  const handleButtonClick = (event) => {
    const { name } = event.target;
    if (name === "minus") {
      // Decrease quantity by 1
      if (quantity > 1) setQuantity(quantity - 1);
    } else if (name === "plus") {
      // Increase quantity by 1
      setQuantity(quantity + 1);
    } else if (name === "submit-btn") {
      // Submit order
      submitOrder();
    }
  };

  // Function to handle ingredient selection
  const handleIngredientChange = (event) => {
    const ingredient = event.target.value;
    if (event.target.checked) {
      // Add selected ingredient
      if (selectedIngredients.length < maxIngredientSelection) {
        setSelectedIngredients((prevIngredients) => [
          ...prevIngredients,
          ingredient,
        ]);
      } else {
        // Show error message if maximum ingredient limit reached
        toast.error("Please select maximum of 10 ingredients.");
      }
    } else {
      // Remove deselected ingredient
      setSelectedIngredients((prevIngredients) =>
        prevIngredients.filter((item) => item !== ingredient)
      );
    }
  };

  // Array of pizza ingredients
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
    mushrooms:5,
    olives:5,
    sausage:5,
    ham: 5,
    onions:5,
    cheese: 5,
    "bell pepper": 5,
    jalapenos: 5,
    pineapple: 5,
    chicken:5,
    tomatoes: 5,
    corn: 5,
  };
  const calculateTotal = () => {
    let total = quantity * 10; // Başlangıç fiyatı (10 TL bir pizza)
  
    // Seçilen malzemelerin fiyatlarını ekle
    selectedIngredients.forEach((ingredient) => {
      total += ingredientPrices[ingredient];
    });
  
    return total;
  };
  return (
    <>
      <div>
        <Form>
          {/* Size and crust thickness selection */}
          <FormGroup >
            
              <legend><b>Boyut Seç</b></legend>
              {/* Radio buttons for size selection */}
              <FormGroup >
                <Input name="size" type="radio" className="size-selector" />{" "}
                <Label check>S</Label>
              </FormGroup>
              <FormGroup>
                <Input name="size" type="radio" /> <Label check>M</Label>
              </FormGroup>
              <FormGroup >
                <Input name="size" type="radio" /> <Label check>L</Label>
              </FormGroup>
          
            
              <Label for="crustSelect"><b>Hamur Seç</b></Label>
              
              <Input id="crustSelect" name="crust" type="select">
                <option>--Hamur Kalınlığı Seçin--</option>
                <option>İnce</option>
                <option>Normal</option>
                <option>Kalın</option>
              </Input>
            
          </FormGroup>

          {/* Additional ingredients selection */}
          <FormGroup>
            <Label><b>Ek Malzemeler</b></Label>
            <p>En fazla 10 Malzeme Seçebilirsiniz.5 tl</p> 
            <Row>
              {/* Checkboxes for ingredient selection */}
              {ingredients.map((ingredient, index) => (
                
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
               
              ))}
            </Row>
          </FormGroup>

          {/* Notes and name input fields */}
          <FormGroup row>
            
              <Label><b>Sipariş Notu</b></Label>
              <p>Siparişine eklemek istediğin bir not var mı?</p>
              <Input name="notes" type="textarea" />
           
            
              
          </FormGroup>

          {/* Quantity selection */}
          <FormGroup className="quantity-group">
            <CardGroup>
             
              {/* Buttons for increasing and decreasing quantity */}
              <Button type="button" name="minus" color="warning" onClick={handleButtonClick}>-</Button>
             
                <FormText >{quantity}</FormText>
             
              <Button type="button" name="plus" color="warning" onClick={handleButtonClick}>+</Button>
            </CardGroup>
          </FormGroup>
          <FormGroup>
          <Label><b>Sipariş Toplamı</b></Label>
          <p>Toplam: {calculateTotal()} TL</p>
        </FormGroup>

        {/* Submit butonu */}
        <Button color="warning" type="submit" name="submit-btn" onClick={handleButtonClick}>Submit</Button>
      </Form>
    </div>
  </>
);
          
}

export default Order;