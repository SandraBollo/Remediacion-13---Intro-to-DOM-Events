// GO!

// TASK 1 -- Show/Hide Nav
function hiddenMenuNav(){
  var navMenuEl = document.querySelector('.answer-box .nav-menu')
     // console.log(navMenuEl);
     // console.log(navMenuEl.textContent);
   // var navMenuStyle = window.getComputedStyle(navMenuEl)
   // console.log(navMenuEl);
   navMenuEl.classList.contains("nav-menu-hidden")    // .contains retorna un valor boleano
   navMenuEl.classList.add("nav-menu-hidden")

   if(navMenuEl === "nav-menu-hidden"){
   navMenuEl.classList.remove("nav-menu-hidden")
    }

}

var task1BtnEl = document.querySelector("#hide-nav button")
task1BtnEl.addEventListener('click', hiddenMenuNav)

// TASK 2 -- Select an Icon


var wishList = document.querySelectorAll(".wish-list div")

function changeClass (){
  var currenElement = this
  console.log(currenElement);
  currenElement.classList.toggle("selected")
}
var divCollection = [...wishList] //convierte en array
  for (var i = 0; i < divCollection.length; i++) {
    var button = divCollection[i]
    button.addEventListener('click', changeClass)
  }

// TASK 3 -- Move Item From List to List
var conteo = document. querySelectorAll('.add-points button')
  console.log(conteo)
conteo.forEach(function(element) {
  console.log(element);
var suMas = parseInt(element.textContent)
  // console.log(typeof(suMas));

element.addEventListener('click', function increaseCount(evt) {
  var totalCountsEL = document.querySelector(".total-points")

  var resultado = parseInt(totalCountsEL.textContent)
 console.log(  totalCountsEL.textContent= resultado + suMas);
 resultado = resultado + suMas
 totalCountsEL.textContent = resultado

  })
});

// suMas.addEventListener('click', function increaseCount(evt){
//   console.log('loquesea')
//   // var totalCountsEL = document.querySelector(".total-points")
//   // var clikCoustNumStr = totalCountsEL.textContent
//   // var  clikCoustNum = parseInt(clikCoustNumStr)
//   // totalCountsEL.textContent = clikCoustNum + 1
//
// })

// TASK 4 -- Add Guest to List
var containerList = document.querySelectorAll("#list-2-list")
console.log("+++++++++", containerList);

for (var i = 0; i < containerList.length; i++) {
  // containerList[i]
  console.log("__________", containerList[i]);

  var buttonList = containerList = containerList[i]
  buttonList.addEventListener('click', function () {

  var padre = document.querySelector('.good-standing-list')
  var padre2 = document.querySelector('.probation-list')
  console.log(padre);
  })

  console.log();
}


//
// var button = document.querySelector('button')
// // console.log(button)
// var content = document.querySelector('.content')
// console.log(content)
//
// button.addEventListener('click', (event) => {
//   console.log("outside container was clicked!");
//   content.innerHTML = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>'
//   //event.stopPropagation();
// });
// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
var palette = document.querySelectorAll(".palette span")
// console.log(palette);
function Background() {
  var color = this.className
  console.log(color);
  document.querySelector(".msg").className = "msg "+ color


}
for (var i = 0; i < palette.length; i++) {

  var buttonPalete = palette[i]

  buttonPalete.addEventListener('click', Background)
}
