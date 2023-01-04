/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let form = document.querySelector("form");
  form.addEventListener("submit", enviarDatos);

  function enviarDatos(e) {
    e.preventDefault();
    //console.log("Datos enviados");
  }

  let cnumber = document.getElementById("cnumber").value;
  let ccvc = document.getElementById("ccvc").value;
  let validationServerUsername = document.getElementById(
    "validationServerUsername"
  ).value;
  let inputFirstName = document.getElementById("inputFirstName").value;
  let inputLastName = document.getElementById("inputLastName").value;

  let inputState = document.getElementById("inputState").value;

  let inputCity = document.getElementById("inputCity").value;
  let inputZip = document.getElementById("inputZip").value;
  let exampleFormControlTextarea1 = document.getElementById(
    "exampleFormControlTextarea1"
  ).value;

  console.log(cnumber.value);
  console.log(ccvc.value);
  console.log(validationServerUsername.value);
  console.log(inputFirstName.value);
  console.log(inputLastName.value);
  console.log(inputState.value);
  console.log(inputCity.value);
  console.log(inputZip.value);
  console.log(exampleFormControlTextarea1.value);

  if (cnumber.value === "") {
    document.getElementById("cnumber").style.background = "red";
    document.getElementById("alert");
  } else {
    document.getElementById("alert");
  }
};

// if (ccvc.value === "") {
//   console.log("El campo ccvc esta vacio");
// }
// if (validationServerUsername.value === "") {
//   console.log("El campo validationServerUsername esta vacio");
// }
// if (inputFirstName.value === "") {
//   console.log("El campo inputFirstName esta vacio");
// }
// if (inputLastName.value === "") {
//   console.log("El campo inputLastName esta vacio");
// }
// if (inputState.value === "") {
//   console.log("El campo inputState esta vacio");
// }
// if (inputCity.value === "") {
//   console.log("El campo inputCity esta vacio");
// }
// if (inputZip.value === "") {
//   console.log("El campo inputZip esta vacio");
// }
// if (exampleFormControlTextarea1.value === "") {
//   console.log("El campo exampleFormControlTextarea1 esta vacio");
// } else {
//   console.log("datos enviados");
// }
