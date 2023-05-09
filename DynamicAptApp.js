// Retrieve the form element and add a submit event listener
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form data
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Create a unique key for the user object
    //let key = "user_" + Date.now(); // Using current timestamp as a unique identifier

    // Create a user object
    const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone
    };

    // Store the user object in local storage with the unique key
    //localStorage.setItem(key, JSON.stringify(user));

    // Clear the form fields
    //document.getElementById("myForm").reset();

    axios.post("https://crudcrud.com/api/615e9c3b084d4f0880e44a79c0cbe8fe/DynamicAptApp", user)
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });


    // Reload the booked members list to display the updated list
    loadBookedMembers();
});

// Function to load booked members from local storage and display in the list
function loadBookedMembers() {
   // Get the list of registered members
   axios.get("https://crudcrud.com/api/615e9c3b084d4f0880e44a79c0cbe8fe/DynamicAptApp")
   .then((response) => {
       const itemsList = document.getElementById("items");
       itemsList.innerHTML = ""; // Clear the existing list

       // Loop through the list of members and display them on the page
       response.data.forEach((user) => {
           const li = document.createElement("li");
           li.classList.add("list-group-item");
           li.innerHTML = `
               <div>Name: ${user.firstName} ${user.lastName}</div>
               <div>Email: ${user.email}</div>
               <div>Phone: ${user.phone}</div>
           `;

           const editButton = document.createElement("button");
           editButton.className = "btn btn-primary btn-sm float-right edit";
           editButton.textContent = "EDIT";
           editButton.dataset.id = user._id;
           editButton.addEventListener("click", function(event){
            const userId = event.target.dataset.id;
            axios.delete(`https://crudcrud.com/api/615e9c3b084d4f0880e44a79c0cbe8fe/DynamicAptApp/${userId}`)
            .then(() => {
                li.remove();
                document.getElementById("first-name").value = user.firstName;
                document.getElementById("last-name").value = user.lastName;
                document.getElementById("email").value = user.email;
                document.getElementById("phone").value = user.phone;
            })
           })

           const deleteButton = document.createElement("button");
           deleteButton.className = "btn btn-danger btn-sm float-right delete";
           deleteButton.textContent = "DELETE";
           deleteButton.dataset.id = user._id;
        
           deleteButton.addEventListener("click", function(event) {
            const userId = event.target.dataset.id;
            axios.delete(`https://crudcrud.com/api/615e9c3b084d4f0880e44a79c0cbe8fe/DynamicAptApp/${userId}`)
            .then(() => {
                li.remove();

            })
            .catch((err) => {
                console.log(err);
            })
           })
           li.appendChild(editButton);
           li.appendChild(deleteButton);
           itemsList.appendChild(li);
       });
   })
   .catch((err) => {
       console.log(err);
   });

}

// Initial load of booked members list when the page loads
window.addEventListener("DOMContentLoaded", () => {
    loadBookedMembers();
})