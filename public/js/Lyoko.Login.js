/*
*
* SECURE LOGIN TO THE PARK
* ACCESS LYOKO FX AND IDE
* v. 0.1.0.0
* by Patrice-Morgan de Goma
*
*/
var storage, database, AlbumAuthor, AlbumAuthorNoSpaces, AlbumName, AlbumNameNoSpaces, PromisedPause, AlbumTrackList;

const config = {
    apiKey: "AIzaSyDb25cWx6pMmh2xt54c_G5hS_rTDzpnpKw",
    authDomain: "galactic-kids-next-door.firebaseapp.com",
    databaseURL: "https://galactic-kids-next-door-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "galactic-kids-next-door",
    storageBucket: "galactic-kids-next-door.appspot.com",
    messagingSenderId: "273360155490",
    appId: "1:273360155490:web:a752b1c28ad6156791f23b"
};

var windowIsLoaded = false;

firebase.initializeApp(config);

firebase.auth().signInWithEmailAndPassword("ceo@dronepong.com", "L3R0!d3G0M@")
  .then((userCredential) => {
    // Signed in
    console.log("signed in");
    var user = userCredential.user;
    //console.log(user);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("couldn't sign in!")
    console.log(errorCode);
    console.log(errorMessage)
  });

storage = firebase.storage();
database = firebase.database();
