const main = document.getElementsByTagName("main").item(0);
const URLMain = "https://fakestoreapi.com/products/";
const cards = document.getElementById("cards");
const ulMenu = document.getElementById("ulMenu");


function getData(cat) {
  const options = {"method" : "GET"};
    fetch(URLMain+cat, options)
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

function getCategories() {
  const options = {"method" : "GET"};
    fetch(URLMain+"categories/", options)
        .then((response) => {
            //console.log(response);
            response.json().then((res) => {
                //console.log("categories:", res);
                res.forEach((cat)=>{
                  ulMenu.insertAdjacentHTML("afterbegin",
                  `<li><a class="dropdown-item" style="cursor:pointer;" onclick="getData('category/${(cat.replace("'","%27"))}');">${cat}</a></li>`);
                });//forEach

            });
        })
        .catch((err) => {
            main.insertAdjacentHTML("beforeend",
                `<div class="alert alert-danger" role="alert">
                        ${err.message}
               </div>`);
        });

}//getCategories

getCategories();
getData("");

function createCards(products) {
    let card = "";
    cards.innerText = "";

 products.forEach(product => {
  
        card += `
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${product.image}" class="img-fluid rounded-start" alt="">
    </div>
    <div class="col-md-8">
      <div class="card-body">
         <h3 class="card-title">${product.title}</h3>
        <h6 class="card-title">${product.category}</h6>
        <p class="card-text">${product.description}</p>
        <p class="card-text"><small class="text-body-secondary">${product.price}</small></p>
      </div>
    </div>
  </div>
</div>`

    })
    
    cards.innerHTML="";
    cards.insertAdjacentHTML("beforeend", card)

    

} 





