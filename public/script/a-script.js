$(document).ready(function () {
  //Hide the modal signup form
  $("#signup-modal").addClass("hide");

  //Call the countdown fuction
  if (document.querySelector('#countDown')) {
    var countdown = countDown();
  }

  //Remove the countdown before exiting the page
  $(window).bind('beforeunload', function () {
    clearInterval(countdown);
  });

 

  //show signup modal
  $("#login").click(function (e) {
    e.preventDefault();
    //show with animation the modal

    showWithAnimation("#signup-modal", 3000);
    $("#signup-modal").addClass("modal");

  });







  //Registration form validation check
  $("#registration-form").submit(function (e) {
    e.preventDefault();

    var registrationResult = registrationValidation();
    if (registrationResult) {
      //show paypal button when the form is validated
      showWithAnimation("#paypal-button-container", 3000);
    }


    return false;
  });

  $("input").focus(function () {
    $("input,select").removeClass("error");
  })


})

//Count down function definition
countDown = () => {


  // Set the date of the game we're counting down to 2020-12-19T18:00:00.000+00:00
  const gameDate = new Date("2020-12-19T18:00:00.000+00:00").getTime();
  // Update the count down every 1 second
  const interval = setInterval(() => {
    // Find the distance between now and the count down date
    const distance = gameDate - Date.now();

    //Calculate days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //display the count down
    if (distance < 0) {
      document.querySelector('#countDown').innerHTML = "";
    } else {
      document.querySelector('#countDown').innerHTML = `<strong>${days} days</strong> ${hours}h : ${minutes} : ${seconds}`;
    }


  }, 1000);

  return interval;

}

//fade out animation
const hideWithAnimation = (selector, milliseconds) => {
  $(selector).fadeOut(milliseconds);
}

//fade in animaition
const showWithAnimation = (selector, milliseconds) => {
  $(selector).fadeIn(milliseconds);
}

const registrationValidation = () => {
  //Valid url regex
  const urlRegex = /http[s]?:\/\/.*\..*\..*/i;
  //get form elements by ID
  const tournament = document.querySelector("#tournament").selectedIndex;
  const teamcaptain = document.querySelector("#teamcaptain").value;
  const trackeraccount = document.querySelector("#trackeraccount").value;
  const streamlink = document.querySelector("#streamlink").value;

  //aerror variable
  let error = false;
  //regitration inputs values
  let registration = { tournament, teamcaptain, trackeraccount, streamlink }

  Object.keys(registration).forEach(value => {

    if (!registration[value]) {
      $(`#${value}`).addClass('error');
      error = true;
    }

    if (value === 'trackeraccount') {

      if (!registration[value]) {
        error = true;
        $(`#${value}`).addClass('error');
      } else {
        //Check invalid url
        if (!registration[value].match(urlRegex)) {
          error = true;
          $(`#${value}`).addClass('error');
        }
      }

    }


    if (value === 'streamlink') {

      if (!registration[value]) {
        error = true;
        $(`#${value}`).addClass('error');
      } else {
        //Check invalid url
        if (!registration[value].match(urlRegex)) {
          error = true;
          $(`#${value}`).addClass('error');
        }
      }

    }


  });

  if (error) {
    $("#error-messsage").addClass("error-message");
  } else {
    return registration;
  }

}


