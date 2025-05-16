let card_container = document.querySelector(".card-container");
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
let totalSetPrice = 0;
let totalPrice = document.querySelector(".price")
let idArray = []
let itemCards = {};

cartItems.forEach((item) => {
  if (!idArray.includes(item.id)) {
    idArray.push(item.id);
    
    let cartItemHTML = `<div class="card mb-3" style="max-width: 540px;" data-id="${item.id}">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${item.imgSrc}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.desc}</p>
          <p class="card-text"><small class="text-muted" data-price="${item.price}">${item.price}</small></p>
         <div class="input-group">
          <input type="text" class="form-control" placeholder="Amount" value="1">
          <button class="btn btn-outline-secondary" type="button" data-action="minus">-</button>
          <button class="btn btn-outline-secondary" type="button" data-action="plus">+</button>
         </div>
        </div>
      </div>
    </div>
    </div>`;

    card_container.insertAdjacentHTML("beforeend", cartItemHTML);
    
    
    itemCards[item.id] = card_container.lastElementChild;
    totalSetPrice += +item.price;
  } else {
    const existingCard = itemCards[item.id];
    const input = existingCard.querySelector(".form-control");
    let newValue = parseInt(input.value) + 1;
    input.value = newValue;
    
    const priceElement = existingCard.querySelector(".text-muted");
    const unitPrice = parseFloat(priceElement.dataset.price);
    priceElement.innerText = (unitPrice * newValue).toFixed(2);
    
    totalSetPrice += unitPrice;
  }
});

document.querySelectorAll("[data-action='minus']").forEach(btn => {
  btn.addEventListener("click", () => {
    const input = btn.closest(".input-group").querySelector(".form-control");
    const currentValue = parseInt(input.value);

    let newValue = Math.max(1, parseInt(input.value) - 1);
    input.value = newValue;

    const priceElement = btn.closest(".card").querySelector(".text-muted");
    const unitPrice = parseFloat(priceElement.dataset.price);
    priceElement.innerText = (unitPrice * newValue).toFixed(2);
    if(currentValue != 1){
      totalSetPrice -= unitPrice;
    totalPrice.innerText = totalSetPrice;
    } 
    
  });
});

document.querySelectorAll("[data-action='plus']").forEach(btn => {
  btn.addEventListener("click", () => {
    const input = btn.closest(".input-group").querySelector(".form-control");
    let newValue = parseInt(input.value) + 1;
    input.value = newValue;

    const priceElement = btn.closest(".card").querySelector(".text-muted");
    const unitPrice = parseFloat(priceElement.dataset.price);
    priceElement.innerText = (unitPrice * newValue).toFixed(2);
    totalSetPrice += unitPrice;
    totalPrice.innerText = totalSetPrice;
  });
});

totalPrice.innerText = totalSetPrice;
