
//ADD YOUR FIREBASE LINKS

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD--yu-tLCeAHRpa2BEZbxMByti23RmAaU",
    authDomain: "practicekwitter-7e567.firebaseapp.com",
    databaseURL: "https://practicekwitter-7e567-default-rtdb.firebaseio.com",
    projectId: "practicekwitter-7e567",
    storageBucket: "practicekwitter-7e567.appspot.com",
    messagingSenderId: "379135110767",
    appId: "1:379135110767:web:d2ec3e02870e253416279a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}