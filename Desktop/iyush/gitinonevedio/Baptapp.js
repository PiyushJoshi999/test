

// Retrieve the form element and add a submit event listener
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form data
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Create a unique key for the user object
    let key = "user_" + Date.now(); // Using current timestamp as a unique identifier

    // Create a user object
    const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone
    };

    // Store the user object in local storage with the unique key
    localStorage.setItem(key, JSON.stringify(user));

    // Clear the form fields
    document.getElementById("myForm").reset();

    // Reload the booked members list to display the updated list
    loadBookedMembers();
});

// Function to load booked members from local storage and display in the list
function loadBookedMembers() {
    const itemsList = document.getElementById("items");
    itemsList.innerHTML = ""; // Clear the list before populating with updated data

    // Loop through all the keys in local storage
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.indexOf("user_") === 0) { // Check if the key is for a user object
            const user = JSON.parse(localStorage.getItem(key)); // Parse the user object from local storage

            // Create a new list item element and add it to the list
            const listItem = document.createElement("li");
            listItem.className = "list-group-item";
            listItem.textContent = "Name: " + user.firstName + " " + user.lastName +
                ", Email: " + user.email + ", Phone: " + user.phone;

                //Create a edit button for each user and add it to the list item:

                const editButton = document.createElement('button');
                editButton.className = "btn btn-primary btn-sm float-right edit";
                editButton.textContent = "EDIT";
                editButton.setAttribute("data-key", key);
                editButton.addEventListener("click", function(){
                    const keyToRemove = this.getAttribute("data-key");
                    localStorage.removeItem(keyToRemove);
                    document.getElementById("first-name").value = user.firstName;
                    document.getElementById("last-name").value = user.lastName;
                    document.getElementById("email").value = user.email;
                    document.getElementById("phone").value = user.phone;

                })

            // Create a delete button for each user and add it to the list item
            const deleteButton = document.createElement("button");
            deleteButton.className = "btn btn-danger btn-sm float-right delete";
            deleteButton.textContent = "X";
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

// Initial load of booked members list when the page loads
loadBookedMembers();
