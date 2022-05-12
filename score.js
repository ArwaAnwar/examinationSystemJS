var congrats = document.getElementById("congrats");
var user = document.getElementById("user");
var score = document.getElementById("score");
var userScore = getCookie("userScore");


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

function passOrfail()
{
    if (  userScore >= 60)
    {
        congrats.innerHTML = "Congratulations!";
    }

    else
    {
        congrats.innerHTML = "Good Luck Next Time";

    }
}
passOrfail();
user.innerHTML = getCookie("userName");
score.innerHTML = "Your Score: "+getCookie("userScore");