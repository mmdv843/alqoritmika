let rateTo = document.getElementById("rate_to");
let input_amount = document.getElementById('input_amount');
let output_amount = document.getElementById('output_amount');
let rateFrom = document.getElementById('rate_from');
let form = document.querySelector(".form")
let base = document.querySelectorAll(".base")
let symbol = document.querySelectorAll(".symbol")

//#region Events
for (let i = 0; i < base.length; i++) {
  base[i].addEventListener("click", compute)
}
for (let i = 0; i < symbol.length; i++) {
  symbol[i].addEventListener("click", compute)
}
input_amount.addEventListener('input', compute);
output_amount.addEventListener('input', compute);
//#endregion
//#region Compute Function
function compute(){
  let myForm = new FormData(form);
  let base = myForm.get("baseoptions");
  let symbol = myForm.get("symbolsoptions");
  fetch(`https://api.exchangerate-api.com/v4/latest/${base}`)
  .then(res => res.json())
  .then(res => {
      const new_rate = res.rates[symbol];
      rateFrom.innerText = `1 ${base} = ${new_rate.toFixed(4)} ${symbol}`
      rateTo.innerText = `1 ${symbol} = ${(1 / new_rate).toFixed(4)} ${base} `
      output_amount.value = (input_amount.value * new_rate).toFixed(2);
  })
}
compute();
//#endregion