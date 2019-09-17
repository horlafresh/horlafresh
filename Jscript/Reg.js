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
  let save = document.getElementById('submitData');

     
  
  let Container, SendingLayout, SuccessLayout, FailedLayout;

 Container = document.getElementById("Container");
 SendingLayout = document.getElementById("SendingLayout");
 SuccessLayout = document.getElementById("SuccessLayout");
 FailedLayout = document.getElementById("FailedLayout");
 
 SendingLayout.style.display = "none";
 SuccessLayout.style.display = "none";
 FailedLayout.style.display = "none";
     
   
   
   //declared this global variable so they can be accessed by all functions 
   let Fname, Email, Cemail, Phone, Pass, Cpass;
   const submitData = document.getElementById("submitData");
  submitData.addEventListener("click", () => {
      Fname =document.getElementById("Fullname").value;
      Email =document.getElementById("Email").value;
      Cemail =document.getElementById("CEmail").value;
      Phone =document.getElementById("Phone").value;
      Pass =document.getElementById("Pword").value;
      CPass =document.getElementById("CPword").value;
    
      if (!Fname.match(/^[a-zA-Z]+$/)){
          alert ("Enter Your  Fullname")
          
      }
      
      else if (!Email.includes("@")) {
          alert ("Invalid Email ")
          
      }

      else if (!Cemail.includes("@")) {
        alert ("Invalid Email ")
        
    }
      else if (!Phone.match(/^[0-9]+$/)||Phone.length < 11 || Phone.length > 11) {
          alert ("Incorrect Phone Number")
          
      }
      
      else if (!Pass.match(/^[a-zA-Z-0-9]+$/)){
          alert("Incorrect Password")
          SendData()
      }
      else if (!CPass.match(Pass)){
          alert ("Incorrect Comfirm Password")
          
      }
      else{
        firebase.auth().createUserWithEmailAndPassword(Email, Pass).catch(function(error) {
            SendData()
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
          
      }
      
  });
      
  const SendData = () => {
    Container.style.display = "none";
    SendingLayout.style.display = "block";
    SendToDataBase();
};

const SendToDataBase = () => {
    let docRef = db.collection("Container").doc(Phone);
    docRef.set({
    Fullname: Fname,
    Email: Email,
    CEmail: Cemail,
    Phone: Phone,
    Pword: Pass,
    Cpword: CPass 
    })
    .then(function(){
        SendingLayout.style.display = "none";
        SuccessLayout.style.display = "block";
        console.log("Successfully Saved");
    })
    .catch(function(error){
        Container.style.display = "block";
        FailedLayout.style.display = "block";
        console.log("Got an error:",error);
    });
};