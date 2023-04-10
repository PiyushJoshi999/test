
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
    localStorage.setItem('first-name', firstName);
    localStorage.setItem('last-name', lastName);
    localStorage.setItem('email', eMail);
    localStorage.setItem('phone', Phone);
    return true;
  }

