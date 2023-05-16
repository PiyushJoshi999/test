const totalValueElement = document.getElementById("totalValue");
let totalValue = 0;


document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
 
    const productName = document.getElementById("product-name").value;
    const productPrice = parseFloat(document.getElementById("product-price").value);

    let key = "user_" + Date.now();
 
    const item = {
     productName: productName,
     productPrice: productPrice
    };
 
   localStorage.setItem(key, JSON.stringify(item));
   document.getElementById("myForm").reset();

   totalValue += productPrice;
  updateTotalValueDisplay();

    loadAddedItems();
 })
 
 function loadAddedItems(){
    const itemsList = document.getElementById("items");
    itemsList.innerHTML = "";

    for(let i=0;i<localStorage.length;i++){
        let key = localStorage.key(i);

        if(key.indexOf("user_") === 0){
            const item = JSON.parse(localStorage.getItem(key));

            const listItem = document.createElement("li");
            listItem.className = "list-group-item";
            listItem.textContent = "Product Name: " + item.productName + " " +
            ", Product Price: " + item.productPrice;

           
            const deleteProduct = document.createElement("button");
            deleteProduct.className = "btn btn-primary btn-sm float-right edit";
            deleteProduct.textContent = "Delete Product";
            deleteProduct.setAttribute("data-key", key);
            deleteProduct.addEventListener("click", function() {
                const key1 = this.getAttribute("data-key");
                const deletedProduct = JSON.parse(localStorage.getItem(key1));
                totalValue -= deletedProduct.productPrice;
                updateTotalValueDisplay();
                localStorage.removeItem(key1);
                loadAddedItems();
            });

            

            listItem.appendChild(deleteProduct);
            itemsList.appendChild(listItem);




        }

    }

 }

 function updateTotalValueDisplay() {
    totalValueElement.textContent = "Total value worth of products is Rs. " + totalValue;
  }
 
 
 window.addEventListener("DOMContentLoaded", () => {
     loadAddedItems();
     updateTotalValueDisplay();
 })