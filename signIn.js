var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var signDiv = document.getElementById("sign");
var span1 = document.createElement("span");

var signBtn = document.getElementById("signBtn");


var userEmail = getCookie("userEmail");
var userPassword = getCookie("userPassword");

signDiv.insertBefore(span1, signBtn);

var examPage;

function getCookie( key)
{
    var result ="not found";
    var data = document.cookie;
    var arr = data.split("; ");
    arr.forEach(function( param)
    {
        var keyValue = param.split("=");
        if (keyValue[0] == key)
        {
            result = keyValue[1];
        }
    });

    return result;
}

function validation()
{
  
    email = emailInput.value;
    password = passwordInput.value;
    var emailRegx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(email == "" || password == "")
    {
        span1.innerHTML="please fill all fields";           
    }
    
    else if( !emailRegx.test(email))
    {
        span1.innerHTML="please enter valid email";
    }
    
    else if( email !== userEmail)
    {
        span1.innerHTML="user not found";

    }

    else if( password !== userPassword)
    {
        span1.innerHTML="wrong password";

    }

    else{
        examPage = open("exam.html","_self", "Exam");

    }

    email ="";
    password ="";
}