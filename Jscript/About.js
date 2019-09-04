function myfunction() {
    var name =document.getElementById("Surname").value;
    var Email =document.getElementById("Email").value;
    var phone =document.getElementById("Number").value;
    var Subject =document.getElementById("Subject").value;
    var Message = document.getElementById("Message").value;
    var Adress = document.getElementById("Adress").value;
   
    if (name == null || name == ""){
        alert ("Enter Your name")
    }
    else if (!Email.includes("@"))  {
        alert ("Invalid Email ")
    }
    else if (phone.length < 11 || phone.length > 11) {
        alert ("Incorrect Phone Number")
    }
    else if (Subject == null || Subject == ""){
        alert ("Input Your Subject")
    }
    else if (Adress == null || Adress == ""){
        alert("Pls Enter Your Adress")
    }
    else if (Message == null || Message == ""){
        alert ("Pls Leave Message For Us")
    }
    else {
        alert ("Submitted")
    }     
}