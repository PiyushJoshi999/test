document.getElementById("myForm").addEventListener("submit", function(event){
event.preventDefault();

const expenseAmount = document.getElementById("expense-amt").value;
const expenseDescription = document.getElementById("expense-des").value;
const expenseCategory = document.getElementById("expense-cat").value;

let key = "user_" + Date.now();

const user = {
    expenseAmount : expenseAmount,
    expenseDescription : expenseDescription,
    expenseCategory : expenseCategory
}

localStorage.setItem(key, JSON.stringify(user));

document.getElementById("myForm").reset();

loadBookedMembers();

});

function loadBookedMembers(){
    const itemsList = document.getElementById("items");
    itemsList.innerHTML = "";

    for(let i=0;i<localStorage.length;i++){
        let key = localStorage.key(i);
        if (key.indexOf("user_") === 0){
            const user = JSON.parse(localStorage.getItem(key));

            const listItem = document.createElement("li");
            listItem.className = "list-group-item";
            listItem.textContent = "Expense Amount: " + user.expenseAmount + " " +
            ", Expense Description: " + user.expenseDescription + ", Expense Category: " + user.expenseCategory;

            const editButton = document.createElement('button');
            editButton.className = "btn btn-primary btn-sm float-right edit";
            editButton.textContent = "EDIT Expense";
            editButton.setAttribute("data-key", key);
            editButton.addEventListener("click", function(){
                const keyToRemove = this.getAttribute("data-key");
                localStorage.removeItem(keyToRemove);
                document.getElementById("expense-amt").value = user.expenseAmount;
                document.getElementById("expense-des").value = user.expenseDescription;
                document.getElementById("expense-cat").value = user.expenseCategory;

            })

        // Create a delete button for each user and add it to the list item
        const deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-danger btn-sm float-right delete";
        deleteButton.textContent = "Delete Expense";
        deleteButton.setAttribute("data-key", key); // Set the data-key attribute to the user key
        deleteButton.addEventListener("click", function() {
            // Remove the user object from local storage when delete button is clicked
            const keyToRemove = this.getAttribute("data-key");
            localStorage.removeItem(keyToRemove);
            loadBookedMembers(); // Reload the booked members list
        });
        listItem.appendChild(deleteButton);
        listItem.appendChild(editButton);

        itemsList.appendChild(listItem);

        }
    }
}

loadBookedMembers();