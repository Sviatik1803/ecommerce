
let input = document.querySelector(".form-control")
let btn = document.querySelector(".btn-search")
let form = document.getElementById("searchForm");
let cards = document.querySelectorAll(".card")
let btn_bye = document.querySelectorAll(".btn-bye")

form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  let input_variable = input.value.trim().toLowerCase();
  cards.forEach(element => {
    if(input_variable != ""){
      if(element.querySelector('.card-title').textContent.toLowerCase().search(input_variable) == -1){
        element.style.display = "none"
      } else {
        element.style.display = "block"
      }
    } else {
      element.style.display = "block"
    }
  });
});
