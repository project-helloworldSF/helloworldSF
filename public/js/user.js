$(document).ready(function() {

  var nameInput = $("#username");
  var passInput = $("#password");
  var profile_picInput = $("#profile_pic");
  var ageInput = $("#age");
  var genderInput = $("#gender");
  var ethnicityInput = $("#ethnicity");
  var bootcamp_nameInput = $("#bootcamp_name");
  var date_rangeInput = $("#date_range");
  var locationInput = $("#location");
  var employedInput = $("#employed");
  var titleInput = $("#title");
  var salaryInput = $("#salary");
  
  $(document).on("submit", "#user-form", handleUserFormSubmit);

  function handleUserFormSubmit(event) {
    event.preventDefault();

    upsertUser({
      username: nameInput.val().trim(),
      password: passInput.val().trim(),
      profile_pic: profile_picInput.val().trim(),
      age: ageInput.val().trim(),
      gender: genderInput.val().trim(),
      ethnicity: ethnicityInput.val().trim(),
      bootcamp_name: bootcamp_nameInput.val().trim(),
      date_range: date_rangeInput.val().trim(),
      location: locationInput.val().trim(),
      employed: employedInput.val().trim(),
      title: titleInput.val().trim(),
      salary: salaryInput.val().trim()
    });
  }

  // A function for creating an user. 
  function upsertUser(userData) {
    $.post("/api/users", userData).then(reRoute());
  }

  function reRoute() {
    window.location.href = "/bootcampers";
  }
  
});