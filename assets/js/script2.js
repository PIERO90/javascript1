const card = document.querySelector("#card");
card.classList.add = "container";

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  colour.classList.toggle("colour");
});

const button = document.querySelector("#button");
button.addEventListener("click", calculate);
alert("compra exitosa");

const num1 = document.querySelector("#num1").value;
const num2 = document.querySelector("#num2").value;
const btn = document.querySelector("#btn");
const resultado = document.querySelector("#resultado");

button.addEventListener("click", () => {
  const a = num1.value;
  const b = num2.value;

  resultado.innerHTML = Number(a) * Number(b);
});
