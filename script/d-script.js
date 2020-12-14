$(document).ready(function () {
  //Call the countdown fuction
  var countdown = countDown();

  //Remove the countdown before exiting the page
  $(window).bind('beforeunload', function () {
    clearInterval(countdown);
  });

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
      document.querySelector('#countDown').innerHTML = `${days} d : ${hours} h : ${minutes} min : ${seconds} sec`;
    }


  }, 1000);

  return interval;

}
//
function toggleElement(id)
{
    if(document.getElementById(id).style.display == 'none')
    {
        document.getElementById(id).style.display = '';
    }
    else
    {
        document.getElementById(id).style.display = 'none';
    }
}