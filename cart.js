let container_card = document.querySelector(".container-card")

cart = JSON.parse(localStorage.getItem("cart")) || [] 

cart.forEach(card => {
  let cardHTML = `
  <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${card.img}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${card.title}</h5>
        <p class="card-text">${card.desc}</p>
        <p class="card-text"><small class="text-muted">${card.price}</small></p>
      </div>
    </div>
  </div>
</div>
`
container_card.insertAdjacentHTML("beforeend", cardHTML);
});

