const starRates =document.querySelectorAll(".fa-star");



function rateclickd(){
 for(let x of starRates){
    x.classList.toggle("active");
  }
}
// cart details form on and off process
const cartDeatailForm = document.querySelector(".cartdeatails");

function cartformonoff(){
  cartDeatailForm.classList.toggle("active");
}
function allcartdataReset(){

  cartItem.textContent=`Item: 0`;
  cartitemQuentity.textContent=`Quentity: 0`;
  cartitemTax.textContent=`Tax(12%): 0`;
  cartItemToatal.textContent=`Total: 00.00 $`;
  cartNotifi.style.display="none";
  cartDeatailForm.classList.toggle("active");


}

// add to cart button jscript

const cartNotifi = document.getElementById("cart-notification-count");
// cart calculation process

const cartItem = document.getElementById("itemnameandprice");
const cartitemQuentity = document.getElementById("itemqentity");
const cartitemTax = document.getElementById("itemtax");
const cartItemToatal = document.getElementById("totalofitems");

let notificationTimes=0;

//items object have 9 fast food prices in the objact type data , tax=12.0%

let fastFoodPrice = {
    pizza : 12.00,
    burger : 7.00,
    chickennuguts: 10.00,
    chicksubmarine : 9.55,
    potatofri : 5.99,
    eggsandwitch : 4.00,
    sushi : 7.00,
    tacos : 6.99
}

// calculat each btn and show cart data in the box

function clickgrid01(){
  notificationTimes ++;
  cartNotifi.style.display="inline";
  cartNotifi.textContent=notificationTimes;

  let item01 =fastFoodPrice.pizza;

  cartItem.textContent=`Item: Pizza | $${item01}`;
  cartItem.style.color="white";
  cartitemQuentity.textContent=`Quentity: ${notificationTimes}`;
  cartitemQuentity.style.color="white";
  let item01Tax= item01*0.12;
  cartitemTax.textContent=`Tax(12%): ${item01Tax}`;
  cartitemTax.style.color="white";

  let item01TotalAmount= (item01 + item01Tax)*notificationTimes;
  cartItemToatal.textContent=`Total: ${item01TotalAmount}`;
  cartItemToatal.style.color="white";

}

function clickgrid02(){
  notificationTimes ++;
  cartNotifi.style.display="inline";
  cartNotifi.textContent=notificationTimes;

  let item01 =fastFoodPrice.burger;

  cartItem.textContent=`Item: Burger | $${item01}`;
  cartitemQuentity.textContent=`Quentity: ${notificationTimes}`;

  let item01Tax= item01*0.12;
  cartitemTax.textContent=`Tax(12%): ${Math.ceil(item01Tax)}`;

  let item01TotalAmount= (item01 + item01Tax)*notificationTimes;
  cartItemToatal.textContent=`Total: ${Math.ceil(item01TotalAmount)}`;
  cartItem.style.color="white";
  cartitemQuentity.style.color="white";
  cartitemTax.style.color="white";
cartItemToatal.style.color="white";
}
function clickgrid03(){
  notificationTimes ++;
  cartNotifi.style.display="inline";
  cartNotifi.textContent=notificationTimes;

  let item01 =fastFoodPrice.chickennuguts;

  cartItem.textContent=`Item: Chicken-NUGTS| $${item01}`;
  cartitemQuentity.textContent=`Quentity: ${notificationTimes}`;

  let item01Tax= item01*0.12;
  cartitemTax.textContent=`Tax(12%): ${item01Tax}`;

  let item01TotalAmount= (item01 + item01Tax)*notificationTimes;
  cartItemToatal.textContent=`Total: ${item01TotalAmount}`;
  cartItem.style.color="white";
  cartitemQuentity.style.color="white";
  cartitemTax.style.color="white";
  cartItemToatal.style.color="white";
}

function clickgrid04(){
  notificationTimes ++;
  cartNotifi.style.display="inline";
  cartNotifi.textContent=notificationTimes;

  let item01 =fastFoodPrice.chicksubmarine;

  cartItem.textContent=`Item: Chiken-Submri | $${item01}`;
  cartitemQuentity.textContent=`Quentity: ${notificationTimes}`;

  let item01Tax= item01*0.12;
  cartitemTax.textContent=`Tax(12%): ${item01Tax}`;

  let item01TotalAmount= (item01 + item01Tax)*notificationTimes;
  cartItemToatal.textContent=`Total: ${item01TotalAmount}`;
  cartItem.style.color="white";
  cartitemQuentity.style.color="white";
  cartitemTax.style.color="white";
  cartItemToatal.style.color="white";
}
function clickgrid05(){
  notificationTimes ++;
  cartNotifi.style.display="inline";
  cartNotifi.textContent=notificationTimes;

  let item01 =fastFoodPrice.potatofri;

  cartItem.textContent=`Item: fries| $${item01}`;
  cartitemQuentity.textContent=`Quentity: ${notificationTimes}`;

  let item01Tax= item01*0.12;
  cartitemTax.textContent=`Tax(12%): ${item01Tax}`;

  let item01TotalAmount= (item01 + item01Tax)*notificationTimes;
  cartItemToatal.textContent=`Total: ${item01TotalAmount}`;
  cartItem.style.color="white";
  cartitemQuentity.style.color="white";
  cartitemTax.style.color="white";
  cartItemToatal.style.color="white";
}

function clickgrid06(){
  notificationTimes ++;
  cartNotifi.style.display="inline";
  cartNotifi.textContent=notificationTimes;

  let item01 =fastFoodPrice.pizza;

  cartItem.textContent=`Item: Pizza| $${item01}`;
  cartitemQuentity.textContent=`Quentity: ${notificationTimes}`;

  let item01Tax= item01*0.12;
  cartitemTax.textContent=`Tax(12%): ${item01Tax}`;

  let item01TotalAmount= (item01 + item01Tax)*notificationTimes;
  cartItemToatal.textContent=`Total: ${item01TotalAmount}`;
  cartItem.style.color="white";
  cartitemQuentity.style.color="white";
  cartitemTax.style.color="white";
  cartItemToatal.style.color="white";
}
function clickgrid07(){
  notificationTimes ++;
  cartNotifi.style.display="inline";
  cartNotifi.textContent=notificationTimes;

  let item01 =fastFoodPrice.eggsandwitch;

  cartItem.textContent=`Item: eGG-Sandwitch| $${item01}`;
  cartitemQuentity.textContent=`Quentity: ${notificationTimes}`;

  let item01Tax= item01*0.12;
  cartitemTax.textContent=`Tax(12%): ${item01Tax}`;

  let item01TotalAmount= (item01 + item01Tax)*notificationTimes;
  cartItemToatal.textContent=`Total: ${item01TotalAmount}`;
  cartItem.style.color="white";
  cartitemQuentity.style.color="white";
  cartitemTax.style.color="white";
  cartItemToatal.style.color="white";
}

function clickgrid08(){
  notificationTimes ++;
  cartNotifi.style.display="inline";
  cartNotifi.textContent=notificationTimes;

  let item01 =fastFoodPrice.sushi;

  cartItem.textContent=`Item: Suschi | $${item01}`;
  cartitemQuentity.textContent=`Quentity: ${notificationTimes}`;

  let item01Tax= item01*0.12;
  cartitemTax.textContent=`Tax(12%): ${item01Tax}`;

  let item01TotalAmount= (item01 + item01Tax)*notificationTimes;
  cartItemToatal.textContent=`Total: ${item01TotalAmount}`;
  cartItem.style.color="white";
  cartitemQuentity.style.color="white";
  cartitemTax.style.color="white";
  cartItemToatal.style.color="white";
}
function clickgrid09(){
  notificationTimes ++;
  cartNotifi.style.display="inline";
  cartNotifi.textContent=notificationTimes;

  let item01 =fastFoodPrice.tacos;

  cartItem.textContent=`Item: Tacos | $${item01}`;
  cartitemQuentity.textContent=`Quentity: ${notificationTimes}`;

  let item01Tax= item01*0.12;
  cartitemTax.textContent=`Tax(12%): ${item01Tax}`;

  let item01TotalAmount= (item01 + item01Tax)*notificationTimes;
  cartItemToatal.textContent=`Total: ${item01TotalAmount}`;
  cartItem.style.color="white";
  cartitemQuentity.style.color="white";
  cartitemTax.style.color="white";
  cartItemToatal.style.color="white";
}

