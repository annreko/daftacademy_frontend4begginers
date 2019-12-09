///// zadanie nr 1

function hamburgerMenu() {
    let getMenu = document.querySelector(".page-navigation");
    getMenu.classList.toggle("hamburger");
              }
              
let getHamburger = document.querySelector(".page__hamburger-menu");
getHamburger.addEventListener("click", hamburgerMenu);

//// zadanie nr 2

var button = document.querySelectorAll('.concerts__info.button');
const textElement = document.createElement("p");
const textHaveFun = document.createTextNode("Have fun!");

for ( var i = 0; i < button.length; i++ ) (function(i){ 
  button[i].onclick = function() {
  var parentDiv = button[i].parentNode
  //if (parentDiv === ".concerts__info") {
      button[i].remove();
      textElement.appendChild(textHaveFun);
      parentDiv.appendChild(textElement);
    //}
  }
})(i);

///// zadanie nr 3 

function showInput(e) {
    e.preventDefault();
    var formInfo = document.querySelector(".contact__form.form");
    var data = formInfo.querySelectorAll(".form__input");
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].name + ": " + data[i].value)
    }
  }
