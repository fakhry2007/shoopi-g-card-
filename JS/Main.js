let addButtons = Array.from(document.querySelectorAll(".add-button"));
let minusButtons = Array.from(document.querySelectorAll(".minus-button"));
let quantitys = Array.from(document.querySelectorAll(".quantity"));
let prices = Array.from(document.querySelectorAll(".price"));
let deletes = Array.from(document.querySelectorAll(".delete"));
let parents = Array.from(document.querySelectorAll(".parent"));
let hearts = Array.from(document.querySelectorAll(".heart"));

// let arrOfQuantitys = [];
// let arrOfPrices = [];
// for(let i in quantitys){
//     arrOfQuantitys[i] = 1 ;
// }
// for(let i in prices ){
//     arrOfPrices[i] = +prices[i].innerHTML;
// }

let total = 0;

//   return document.getElementById(
//     "totale-price"
//   ).textContent = `TOTALE PRICE : ${total} $`;

//********************PLUS_BUTTON*********************************/
for (let i in addButtons) {
  addButtons[i].addEventListener("click", function () {
    quantitys[i].innerHTML++;
    // quantitys[i].innerHTML = arrOfQuantitys[i];
    updateTotal();
  });
}

//********************MINUS_BUTTON*********************************/
for (let i in minusButtons) {
  minusButtons[i].addEventListener("click", function () {
    if (quantitys[i].innerHTML > 0) {
      // if(arrOfQuantitys[i] > 0){
      // arrOfQuantitys[i]--;
      quantitys[i].innerHTML--;
      // quantitys[i].innerHTML = arrOfQuantitys[i];
      updateTotal();
    }
  });
}

//********************DELETE_BUTTON*********************************/
for (let i in deletes) {
  deletes[i].addEventListener("click", function () {
    // arrOfQuantitys[i] = 0;
    updateTotal();
    parents[i].remove();
  });
}

//********************HEART_BUTTON*********************************/
for (let i in hearts) {
  hearts[i].addEventListener("click", function () {
    if (hearts[i].getAttribute("src") === "red")
      hearts[i].setAttribute("src", "red");
    else hearts[i].setAttribute("src", "gray");
  });
}

// function updateTotal() {
//   //   for (let i in quantitys) {

//   for (let i = 0; i < quantitys.length; i++) {

//     console.log(i);

//     total = Number(quantitys[i].innerHTML) * Number(prices[i].innerHTML);

//     console.log("t", total);
//     return (document.getElementById("totale-price").innerHTML = total);
//   }

// }

function updateTotal() {
  let quantitys = Array.from(document.querySelectorAll(".quantity"));
  let prices = Array.from(document.querySelectorAll(".price"));

  console.log(quantitys , prices)

  let t = 0 ;

  for(let i=0 ; i<quantitys.length ; i++) {

    t = t+(quantitys[i].innerHTML * prices[i].innerHTML)



  }

  return document.getElementById('totale-price').innerHTML = t  + "$"
  

}
