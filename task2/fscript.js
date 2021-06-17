

document.addEventListener('DOMcontentLoaded',()=>{
	document.getElementById('button').addEventListener(click,showData);
});


function showData(){

	var fname = document.getElementById('firstname').value;
	var lname = document.getElementById('lastname').value;
	var email = document.getElementById('inputemail').value;
	var password = document.getElementById('inputpassword').value;
		

console.log(fname);
console.log(lname);
console.log(email);
console.log(password);

ValidateEmail();
}

function ValidateEmail() 
{
	var emailcheck = document.getElementById('inputemail').value;
	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailcheck.match(validRegex)) {

    document.form1.text1.focus();

    return true;

  } else {

    alert("Invalid email address!");

    document.form1.text1.focus();

    return false;
    die();

  }
}
