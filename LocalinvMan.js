document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
 
    const itemName = document.getElementById("item-name").value;
    const itemDescription = document.getElementById("item-des").value;
    const itemPrice = document.getElementById("item-price").value;
    const quantity = document.getElementById("quantity").value;

    let key = "user_" + Date.now();
 
    const item = {
     itemName: itemName,
     itemDescription: itemDescription,
     itemPrice: itemPrice,
     quantity: quantity
    };
 
   localStorage.setItem(key, JSON.stringify(item));
   document.getElementById("myForm").reset();
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
            listItem.textContent = "Item Name: " + item.itemName + " " +
            ", Item Description: " + item.itemDescription + ", Item Price: " + item.itemPrice 
            + ", Quantity: " + item.quantity;

           
            const buyButton1 = document.createElement("button");
            buyButton1.className = "btn btn-primary btn-sm float-right edit";
            buyButton1.textContent = "BUY 1";
            buyButton1.setAttribute("data-key", key);
            buyButton1.addEventListener("click", function() {
                const key1 = this.getAttribute("data-key");
                const item1 = JSON.parse(localStorage.getItem(key1));
                item1.quantity = item1.quantity - 1;
                localStorage.setItem(key1, JSON.stringify(item1));
                this.parentNode.textContent = "Item Name: " + item1.itemName + ", Item Description: " + item1.itemDescription + ", Item Price: " + item1.itemPrice + ", Quantity: " + item1.quantity;
            });

            const buyButton2 = document.createElement("button");
            buyButton2.className = "btn btn-primary btn-sm float-right edit";
            buyButton2.textContent = "BUY 2";

            buyButton2.setAttribute("data-key", key);
            buyButton2.addEventListener("click", function(){
                const key2 = this.getAttribute("data-key");
               const item2 = JSON.parse(localStorage.getItem(key2));
               item2.quantity = item2.quantity - 2;
               localStorage.setItem(key2, JSON.stringify(item2));
               
               this.parentNode.textContent = "Item Name: " + item2.itemName + ", Item Description: " + item2.itemDescription + ", Item Price: " + item2.itemPrice + ", Quantity: " + item2.quantity;
            })

            const buyButton3 = document.createElement("button");
            buyButton3.className = "btn btn-primary btn-sm float-right edit";
            buyButton3.textContent = "BUY 3";

            buyButton3.setAttribute("data-key", key);
            buyButton3.addEventListener("click", function(){
                const key3 = this.getAttribute("data-key");
                const item3 = JSON.parse(localStorage.getItem(key3));
                item3.quantity = item3.quantity - 3;
                localStorage.setItem(key3, JSON.stringify(item3));
                
                this.parentNode.textContent = "Item Name: " + item3.itemName + ", Item Description: " + item3.itemDescription + ", Item Price: " + item3.itemPrice + ", Quantity: " + item3.quantity;
            })

            listItem.appendChild(buyButton1);
            listItem.appendChild(buyButton2);
            listItem.appendChild(buyButton3);
            itemsList.appendChild(listItem);




        }

    }

 }
 
 
 window.addEventListener("DOMContentLoaded", () => {
     loadAddedItems();
 })