//In local storage we can only store string as an input....to store the the number in local storage we have to convert it to a string.
  function validateForm() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const eMail = document.getElementById('email').value;
    const Phone = document.getElementById('phone').value;

    if (firstName == "") {
      alert("Please enter your first name");
      return false;
    }
    if (lastName == "") {
      alert("Please enter your last name");
      return false;
    }
    if (eMail == "") {
      alert("Please enter your email");
      return false;
    }
    if (Phone == "") {
      alert("Please enter your phone number");
      return false;
    }
    // localStorage.setItem('first-name', firstName);
    // localStorage.setItem('last-name', lastName);
    // localStorage.setItem('email', eMail);
    // localStorage.setItem('phone', Phone);
    var user = {
        firstName : firstName,
        lastName : lastName,
        eMail : eMail,
        Phone : Phone   
    }

    //Using JSON.stringify to convert the object into the string
    localStorage.setItem('user', JSON.stringify(user));
    //Converting string back into the normal javascript object.
    let user_desearilized = JSON.parse(localStorage.getItem('user'));

    //Redirecting the user to another page.
    //window.location.href = "success.html";
    return true;
  }

  //JS SCRIPT to store user details as an object in the local storage.

  /* // Add an event listener to the form submit button
	document.getElementById("user-form").addEventListener("submit", function(event) {
		// Prevent the default form submission behavior
		event.preventDefault();

		// Get the form input values
		var firstName = document.getElementById("first-name").value;
		var lastName = document.getElementById("last-name").value;
		var email = document.getElementById("email").value;
		var phone = document.getElementById("phone").value;

		// Create an object with the user data
		var user = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			phone: phone
		};

		// Store the user object in the local storage as a JSON string
		localStorage.setItem("user", JSON.stringify(user));

		// Redirect the user to another page
		window.location.href = "success.html";
	}); */

