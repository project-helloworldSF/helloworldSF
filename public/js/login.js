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
  
    // A function for checking an user. 
    function upsertUser(userData) {
    //   $.get("/api/users", userData).then(reRoute());

      $.get("/api/users", userData, function(data, status) {
          console.log('hello');
        if (data.body.username != null && data.body.username !=null && data.body.username === nameInput && data.body.password===passInput) {
                  res.redirect("/");
                } else {
                  // you'd maybe like to set response status to 404
                  // also some user friendly error message could be good as response body
                  console.log("Error: user not found");
                  alert("Data: " + data + "\nStatus: " + status);
                }
      });

    }
  
    function reRoute() {
      window.location.href = "/api/users";
    }




    // $("#login-button").click(function(event){

    //     event.preventDefault();

    //     var username = $("#username").val().trim();
    //     var password = $("#pwd").val().trim();
    //     // console.log("user: " + username + "password" + password);

    //     // $.get("/api/users", { username: req.body.username, password: password }, function(data){
    //     //     console.log("here is what you are getting" + data.body.username + "and" + data.body.password);
    //     // });

    //     function handleLoginFormSubmit(event) {
    //         event.preventDefault();
        
    //         upsertUser({
    //           username: username,
    //           password: password
    //         });
    //       }
        
    //       // A function for creating an user. 
    //       function upsertUser(userData) {
    //         $.post("/api/users", userData).then(reRoute());
    //       }
        
    //       function reRoute() {
    //         window.location.href = "/api/users";
    //       }

    // });

    // $("#login-button").on('click', function() {
        
    //     var username = $("#username-l").val().trim();
    //     var password = $("#pwd-l").val().trim();

    //     console.log('hello');

    //     // $.get("/api/users", { username: username, password: password }, function(data){
    //     //     console.log("here is what you are getting" + data.body.username + "and" + data.body.password);
    //     // });

    //     // function handleUserFormSubmit(event) {
    //     //     event.preventDefault();
        
    //     //     upsertUser({
    //     //       username: username,
    //     //       password: password
    //     //     });
    //     //   }
        
    //     //   // A function for creating an user. 
    //     //   function upsertUser(userData) {
    //     //     $.post("/api/users", userData).then(reRoute());
    //     //   }
        
    //     //   function reRoute() {
    //     //     window.location.href = "/api/users";
    //     //   }
    // });

});