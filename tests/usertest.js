var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

nightmare
  //Begins test by going to unique URL for the User Page
  .goto("http://helloworldsf.herokuapp.com/users")

  //**types dummy information into the form**//

  //enter username.
  .type("#username", "Nina")
  .type("#password", "dev01")
  .type("#profile_pic", "http://ak2.picdn.net/shutterstock/videos/7209397/thumb/9.jpg")
  .type("#age", "32")
  .type("#gender", "Female")
  .type("#ethnicity", "African American")
  .type("#bootcamp_name", "UC Berkeley Extension")
  .type("#date_range", "April - October 2017")
  .type("#location", "Berkeley, CA")
  .type("#employed", "Yes")
  .type("#title", "Full Stack Developer Intern")
  .type("#salary", "90000")
  .click("#signup-submit")
  .wait("a[href='https://helloworldsf.herokuapp.com/bootcampers']")
  .click("a[href='https://helloworldsf.herokuapp.com/bootcampers']")
  .evaluate(function() {
  })
  .end()
  .then(function() {
    console.log("User Profile created successfully!");
  })
  .catch(function(err) {
    console.log("Whoops! That didn't work!");
  });