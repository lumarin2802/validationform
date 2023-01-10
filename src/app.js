/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let form = document.getElementById("form");
  form.addEventListener("submit", enviarDatos);

  function enviarDatos(e) {
    e.preventDefault();
    let card = document.getElementById("card");
    let cvc = document.getElementById("cvc");
    let amount = document.getElementById("amount");
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let city = document.getElementById("city");
    let state = document.getElementById("state");
    let postalCode = document.getElementById("postalCode");
    let message = document.getElementById("message");
    let alert = document.getElementById("alert");

    console.log(card.value);
    console.log(cvc.value);
    console.log(amount.value);
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(city.value);
    console.log(state.value);
    console.log(postalCode.value);
    console.log(message.value);
    console.log(alert);

    if (card.value === "") {
      console.log("El campo card está vacio");
      document.getElementById("card").style.background = "red";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.visibility = "hidden";
    }

    if (cvc.value === "") {
      console.log("El campo cvc está vacio");
      document.getElementById("cvc").style.background = "red";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.visibility = "hidden";
    }
    if (amount.value === "") {
      console.log("El campo amount está vacio");
      document.getElementById("amount").style.background = "red";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.visibility = "hidden";
    }
    if (firstName.value === "") {
      console.log("El campo firstName está vacio");
      document.getElementById("firstName").style.background = "red";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.visibility = "hidden";
    }
    if (lastName.value === "") {
      console.log("El campo lastname está vacio");
      document.getElementById("lastName").style.background = "red";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.visibility = "hidden";
    }

    if (city.value === "") {
      console.log("El campo city está vacio");
      document.getElementById("city").style.background = "red";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.visibility = "hidden";
    }
    if (state.value === "Choose...") {
      console.log("El campo state está vacio");
      document.getElementById("state").style.background = "red";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.visibility = "hidden";
    }

    if (postalCode.value === "") {
      console.log("El campo postal code está vacio");
      document.getElementById("postalCode").style.background = "red";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.visibility = "hidden";
    }

    if (message.value === "") {
      console.log("El campo message está vacio");
      document.getElementById("message").style.background = "red";
      //alert
      document.getElementById("alert");
    } else {
      document.getElementById("alert").style.visibility = "hidden";
    }
  }
};
