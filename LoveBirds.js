// let attempt = 3;
let form = document.getElementById('form-info');
let username = document.getElementById('username');
let password = document.getElementById('password');

form.addEventListener('submit', (event) => {
     event.preventDefault();
    if(username == " " && password == " ") {
        alert ("Enter Your Details")
     }
     else {
          alert ("Login successfully");
     }
     // else {
     //      attempt --;// Decrementing by one.
     //      alert("You have left "+attempt+" attempt;");
     //      // Disabling fields after 3 attempts.
     //      if( attempt == 0){
     //      document.getElementById("username").disabled = true;
     //      document.getElementById("password").disabled = true;
     //      document.getElementById("submit").disabled = true;
     //      return false;
  })


     

     