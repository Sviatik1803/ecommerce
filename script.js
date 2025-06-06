function goToCart() {
  window.location.href = "cart.html";
}

window.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.hasAttribute("data-cart")) {
      let btn_bye = event.target
      let card = btn_bye.closest(".card")
      let product_info = {
        title:card.querySelector(".card-title").innerText,
        img: card.querySelector(".card-img").getAttribute("src"),
        desc: card.querySelector(".card-sub").innerText,
        price: card.querySelector(".price").innerText
      }
   
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(product_info)
    localStorage.setItem("cart", JSON.stringify(cart))
  }
});
