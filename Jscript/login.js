  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBlYkiAKFc-wt2LepkHC6DEFaFe9DprNI8",
    authDomain: "horlafresh-54a44.firebaseapp.com",
    databaseURL: "https://horlafresh-54a44.firebaseio.com",
    projectId: "horlafresh-54a44",
    storageBucket: "",
    messagingSenderId: "193100735395",
    appId: "1:193100735395:web:d81c7e44fa975223"
  };
  
   // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log("firebase loaded");
  const db= firebase.firestore();
  const firestore = firebase.firestore();
  
  let Email, Password;
  const loginpage=document.getElementById("loginbtn");
  loginpage.addEventListener("click", ()=>{
    Email= documnet=getElementById("Email").value;
    Password= document.getElementById("Password").value;

    firebase.auth().signInWithEmailAndPassword(Email, Password).then(function(){

    
}).catch(function(error){
    var errorCode=error.code;
    var errorMessage=error.message;
    console.log("error:" +error.code);
  })
});