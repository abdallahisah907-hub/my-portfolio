let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
function myFun() {
    if(fname !== null && lname != null && email !== null) {
       let text =  window.alert("Thanks for reaching out to Abdullahi");
    }
    else{
        text = "Fill out your informations";
    }
    document.getElementById('demo').innerHTML = text;
    
}

