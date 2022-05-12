var user = document.getElementById("user");
var score = document.getElementById("score");


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

user.innerHTML = getCookie("userName");
score.innerHTML = "Your Score: "+getCookie("userScore");