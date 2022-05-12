var firstNameInput = document.getElementById("first");
var lastNameInput = document.getElementById("last");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var cPasswordInput = document.getElementById("confirmPassword");
var registerDiv = document.getElementById("register");
var span1 = document.createElement("span");

var registerBtn = document.getElementById("regBtn");

span1.style.fontSize ="15px";
registerDiv.insertBefore(span1, registerBtn);

var signInPage;



function validation()
{
    firstName = firstNameInput.value;
    lastName = lastNameInput.value;
    email = emailInput.value;
    password = passwordInput.value;
    cPassword = cPasswordInput.value;
    var emailRegx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


    if(firstName == "" || lastName == "" ||email == "" || password == "" || cPassword =="")
    {
        span1.innerHTML="please fill all fields";           
    }

    else if( isFinite(firstName) || isFinite(lastName))
    {
        span1.innerHTML="name must be a string";        

    }

    
    else if( !emailRegx.test(email))
    {
        span1.innerHTML="please enter valid Email";
    }
    
    else if( password.length < 8)
    {
        span1.innerHTML="password must be 8 or more characters ";
    }

    else if(cPassword !== password)
    {
        span1.innerHTML ="passwords is not matched";
        
    }
  
  
    else{

        signInPage = open("signIn.html", "_self", "SignIn",);
       setCookie("userEmail", email,  new Date("10/10/2030"));
       setCookie("userName", firstName+" "+lastName, new Date("10/10/2030"));
       setCookie("userPassword", password,  new Date("10/10/2030")); 
    }
      

    firstName = "";
    lastName = "";
    email = "";
    password="";
    cPassword="";
}

function setCookie( key, value , date) {
    document.cookie = key + "=" + value + ";expires=" + date;
  }

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


  history.forward(); 

