$(document).ready(function() {

    $('#login-button').on('click', function(event) {
      event.preventDefault();
      var nameInput = $("#username").val().trim();
      var passInput = $("#pwd").val().trim();
        $.get("/api/users", function(data) {
          for (var i = 0; i < data.length; i++) {
            if (
              data[i].username === nameInput &&
              data[i].password === passInput
              ) {
                window.location.href = "/bootcampers";
              }
          }
          $('#login-error').empty();
          $('#login-error').append('<h4 style="text-align:center;">Username or password does not exist</h4>'); 
        });
    });

});