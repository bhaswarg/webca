
/**
 * Observer using the firebase onAuthStateChanged method to detect if the user successfully signs in
 */
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    const uid = user.uid;
    $("#login").hide();
    $("#logout").show();
  } else {
    // User is signed out
    $("#login").show();
    $("#logout").hide();
  }
});

//firebase function to sign up a with Google
const signWithGoogle = async () => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    user = await firebase.auth().signInWithPopup(provider);
    return user;

  } catch (err) {
    return err;
  }

}


//firebase function to sign up a new user
const signUp = async (email, password) => {
  try {
    user = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return user;

  } catch (err) {
    return err;
  }

}


//firebase function to login a new user
const login = async (email, password) => {
  try {
    user = await firebase.auth().signInWithEmailAndPassword(email, password);
    return user;

  } catch (err) {
    return err;
  }

}
//dispalay a popup to login with Google
$("#with-google").click(function () {
  signWithGoogle();
});

//Sign out the use
$("#logout").click(function () {
  if (confirm("You will be loggged out. Are sure about it?")) {
    firebase.auth().signOut();
  }
});


const user = firebase.auth().currentUser;



//Enfoce signing before accessing regitration and leaderboard page
var destination = window.location.href;
if (destination.match(/registration|leaderboard/i)) {
  const user = firebase.auth().currentUser;
  if (!user) {
    //Ask the user to signup/Login
    showWithAnimation("#signup-modal", 3000);
    $("#signup-modal").addClass("modal");
  }

}

/*
//hide the signup modal
$("#modal-close,.modal-close").click(function (e) {
  e.preventDefault();
  var destination = window.location.href;
  if (destination.match(/registration|leaderboard/i)) {
    const user = firebase.auth().currentUser;
    if (!user) {

      //hide with animation the modal
      hideWithAnimation("#signup-modal", 3000);
      window.location.href = "/index.html";
    }

  }

})
*/