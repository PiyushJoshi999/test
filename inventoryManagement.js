document.getElementById("myForm").addEventListener("submit", function(event){
   event.preventDefault();

   const itemName = document.getElementById("item-name").value;
   const itemDescription = document.getElementById("item-des").value;
   const itemPrice = document.getElementById("item-price").value;
   const quantity = document.getElementById("quantity").value;

   const item = {
    itemName: itemName,
    itemDescription: itemDescription,
    itemPrice: itemPrice,
    quantity: quantity
   };

   axios.post("https://crudcrud.com/api/1dfb8ecda02d4ee995dba2d95a8fe2be/inventoryManagement", item)
   .then((response) => {
    console.log(response);
   })
   .catch((err) => {
    console.log(err);
   })

   loadAddedItems();
})

function loadAddedItems(){
    axios.get("https://crudcrud.com/api/1dfb8ecda02d4ee995dba2d95a8fe2be/inventoryManagement")
    .then((response) => {
        const itemList = document.getElementById("items");
        itemList.innerHTML = "";

        response.data.forEach((item) => {
            const li = document.createElement("li");
            li.classList.add("list-group-item");
            li.innerHTML = `
                <div>Item Name: ${item.itemName}</div>
                <div>Item Description: ${item.itemDescription}</div>
                <div>Item Price: ${item.itemPrice}</div>
                <div>Item Quantity: ${item.quantity}</div>
            `;

            const buyButton = document.createElement("button");
            buyButton.className = "btn btn-primary btn-sm float-right buy";
            buyButton.textContent = "BUY 1";
            buyButton.dataset.id = item._id;

            buyButton.addEventListener("click", function(event){
                const itemId = event.target.dataset.id;
                const updatedQuantity = item.quantity - 1;
                if (updatedQuantity >= 0) {
                  axios.put(`https://crudcrud.com/api/1dfb8ecda02d4ee995dba2d95a8fe2be/inventoryManagement/${itemId}`, { quantity: updatedQuantity })
                    .then((response) => {
                        item.quantity = updatedQuantity;
                        const quantityDiv = li.querySelector('div:last-child');
                        if (quantityDiv) {
                          quantityDiv.textContent = `Item Quantity: ${updatedQuantity}`;
                        }
                      
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
            });

            li.appendChild(buyButton);
            itemList.appendChild(li);
        })
    })
    .catch((err) => {
        console.log(err);
    });
}


window.addEventListener("DOMContentLoaded", () => {
    loadAddedItems();
})