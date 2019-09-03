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
  console.log("firebaseloaded");
  const db = firebase.firestore();
  const firestore = firebase.firestore();
  const save = document.getElementById('save');

  save.addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    saveToDataBase();
});
    const saveToDataBase = () => {


      const docRef = db.doc("test/sample");

      docRef.set({
        Name:"string",
        Email:"string",
        PhoneNumber:"string"
      }).then(function(){
        console.log("Successfully Saved");
      }).catch(function(error){
        console.log("Got an error:",error);
      });
      
      };