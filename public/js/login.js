$(document).ready(function() {

    var nameInput = $("#username");
    var passInput = $("#pwd");
    
    $(document).on("submit", "#login-form", handleLoginFormSubmit);
  
    function handleLoginFormSubmit(event) {
      event.preventDefault();
  
      upsertUser({
        username: nameInput.val().trim(),
        password: passInput.val().trim()
      });
    }
  
    function upsertUser(userData) {

      $.get("/api/users", userData, function(data, status) {
          // console.log('hello');
          // console.log(data[0].username);
          for (var i = 0; i < data.length; i++) {
            console.log(data[i].username);
            console.log('user: ' + nameInput);
            if (
              data[i].username === !null &&
              data[i].password === !null) {
              // data[i].username === nameInput &&
              // data[i].password === passInput) {
                alert('Success.');
              } else {
                alert('Username or Password not found! Try again.');
              }
          }
      });
    }
  
    function reRoute() {
      window.location.href = "/api/users";
    }
});