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
  
  //initialize firestore database and save the instance to db variable 
    const db= firebase.firestore();
    
    //create a collection and empty document and save the instance to docRef variable 
     const docRef = db.collection("messages").doc();
     let save = document.getElementById('save');
     
   
   
   //declared this global variable so they can be accessed by all functions 
  let Fname, Email, Cemail, Phone, Pword, Cpword;
  const date= Date.now();
  save.addEventListener("click", () => {
     Fname=document.getElementById("Fullname").value;
     Email= document.getElementById("Email").value;
     Cemail= document.getElementById("Email_two").value;
     //E= Email.includes("@");
     Phone= document.getElementById("Phone").value;
     Pword= document.getElementById("Pword").value;     
     Cpword= document.getElementById("Pword_two").value;
     
     
     if(!Fname.match(/^['a-z A-Z]+$/) || Fname==""){
        alert("Enter your Fullame")
    }
    
    else if(!Email.includes("@")){
        alert("invalid email")
    }

    else if(!Cemail.includes("@")){
        alert("invalid email")

    }
        else if(!Phone.match(/^[+0-9]+$/) || Phone.length<11 || Phone.length>11){
        alert("Your number is incorrect")
    
    }

     else if (!Pword.match(/^[a-zA-Z0-9]+$/)||Pword.length < 5) {
            alert("Input your Password")
        }

    else if (!Cpword.match(Pword)){
            alert ("Invalid confirm password")
        }
    

    else{
        alert("Submitted");
      
    
     docRef.set({
      Fname: Fname,
      Email: Email,
      Cemail: Cemail,
      Phone: Phone,
      Pword: Pword,
      Cpword: Pword
      
      }
      ) 
      .then(function(){
        console.log("SUCCESSFULLY SAVED");
      })
      .catch(function(error){
        console.log("Got an Error:"+ error);
      });
    };
  }); 