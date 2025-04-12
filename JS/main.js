const main = document.getElementsByTagName("main").item(0);
const URLMain = "https://fakestoreapi.com/products/";
const cards = document.getElementById("cards");
const ulMenu = document.getElementById("ulMenu");

function getData() {
    fetch(URLMain)
        .then((response) => {
            console.log(response);
            response.json().then((res) => {
                //console.log(res.length);
                //console.log(res[19].description);

                createCards(res);

            });
        })
        .catch((err) => {
            main.insertAdjacentHTML("beforeend",
                `<div class="alert alert-danger" role="alert">
                        ${err.message}
               </div>`);
        });

}//getData

getData();

function createCards(products) {
    let card = "";
    cards.innerText = "";

 products.forEach(product => {
        card += `
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${product.image}" class="img-fluid rounded-start" alt="${product.title}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${product.category}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-text"><small class="text-body-secondary">${product.price}</small></p>
      </div>
    </div>
  </div>
</div>`

    })

    
    cards.insertAdjacentHTML("beforeend", card)

    .catch((err) => {
        main.insertAdjacentHTML("beforeend",
            `<div class="alert alert-danger" role="alert">
                    ${err.message}
           </div>`);
    });

} 





