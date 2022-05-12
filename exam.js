function Question( _title, _QAnswers, _correctAnswer, _num ,_userAnswer = "none" , _isMarked)
{
    this.title = _title;
    this.QAnswers= _QAnswers;
    this.correctAnswer = _correctAnswer;
    this.num = _num;
    this.userAnswer = _userAnswer;
    this.isMarked = false;

}

function Answers( _list = [])
{
    this.list = _list;
}

//////////////////////////////////


var list1 = new Answers(["Object-Oriented", "Object-Based", "Assembly-language","High-level"]);
var q1 = new Question("Which type of JavaScript language is ___", list1.list, list1.list[1]);


var list2 = new Answers(["Alternative to if-else", "Switch statement","If-else statement","immediate if"]);
var q2 = new Question("Which one of the following known as Conditional Expression:", list2.list, list2.list[3]);

var list3 = new Answers(["Shows a warning",
    "Prompts to complete it",
    "Throws an error",
    "Ignores the statements"]);
var q3 = new Question("When interpreter encounters an empty statements, what it will:", list3.list, list3.list[3]);

var list4 = new Answers(["Keywords",
"Data types",
"Declaration statements",
"Prototypes"]);
var q4 = new Question("The function and  var are known as:", list4.list, list4.list[0]);

var list5 = new Answers(["Preprocessor",
"Triggering Event",
"RMI",
"Function/Method"]);
var q5 = new Question("Which one of the following is the correct way for calling the JavaScript code?", list5.list, list5.list[3]);

var list6 = new Answers(["Mutable variable",
"Dynamic variable",
"Volatile variable",
"Immutable variable"]);
var q6 = new Question("Which of the following type of a variable is volatile?", list6.list, list6.list[0]);

var list7 = new Answers(["Syntax error",
"Missing of semicolons",
"Division by zero",
"Missing of Bracket"]);
var q7 = new Question("In the JavaScript, which one of the following is not considered as an error:", list7.list, list7.list[2]);

var list8 = new Answers(["toString()",
    "valueOf()",
    "toLocaleString()",
    "toPrecision()"]);
var q8 = new Question("Which of the following number object function returns the value of the number?", list8.list, list8.list[1]);

var list9 = new Answers(["if(a!==null)",
    "if (a!)",
    "if(a!null)",
    "if(a!=null)"]);
var q9 = new Question("Choose the correct snippet to check if the variable -a- is not equal the NULL:", list9.list, list9.list[0]);

var list10 = new Answers(["Function prototype",
"Function literal",
"Function calling",
"Function declaration"]);
var q10 = new Question("In JavaScript, what will be used for calling the function definition expression:", list10.list, list10.list[1]);

///////////////////////////////////

var tempArr = [];
function arrayOfquestions ( param ) //questions
{
    for (var i =0; i<arguments.length; i++)
    {
        tempArr[i] = arguments[i];
    }
    return tempArr;
}
var arr = arrayOfquestions(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10);

////////////////////////////////
var timeOutPage, scorePage;
var shuffle, marked, j =0;
var userAnswer, score = 100;
var container = document.getElementById("container")
var listDiv = document.getElementById("answerList");
var qDiv = document.getElementById("question");
var main = document.getElementById("main");
var side =document.getElementById("side");
var numBtn = document.getElementById("num");
var prevBtn = document.getElementById("prev");

shuffle = arr.sort(() => Math.random() - .5); 
function display()
    {
        qDiv.innerHTML = shuffle[j].title;
        shuffle[j].num = j+1;
         for( var i =0; i < shuffle[j].QAnswers.length; i++)
         {
             var choice =listDiv.children[i];  
             choice.innerHTML = shuffle[j].QAnswers[i];
        } 
           
        QNum(shuffle[j].num);
        return j;
     }
j=display();


function next()
{
    if( j < shuffle.length-1)
    {
        j++;
        display();
        saveUserAnswer();
    }

    else
    {
        throw ("this is last question");

    }
    
}

function prev()
{
    j--;
    display();
    saveUserAnswer();    
}

function QNum( n )
{
    if (n == 1)
    {
        prevBtn.style.display = "none";

    }
    else
    {
        prevBtn.style.display = "inline";
    }
    numBtn.innerHTML = n;
}

function reset() // if user want to change his answer
{
    for( var i=0; i< answerList.children.length; i++ )
    {
        answerList.children[i].style.background ="white";
        answerList.children[i].style.color ="black"; 
    }
}

function getUserAnswer(event)
{
    reset();
    event.target.style.background = "#8a64eb";
    event.target.style.color = "white";
    shuffle[j].userAnswer = event.target.innerHTML;
}

function saveUserAnswer()
{
    reset();
    for( var i=0; i< answerList.children.length; i++ )
    {
        if (answerList.children[i].innerHTML === shuffle[j].userAnswer)
        {
            answerList.children[i].style.background ="#8a64eb";
             answerList.children[i].style.color ="white"; 
        }
    }
}



function mark(event)
{
    if ( shuffle[j].isMarked === false)
    {
        shuffle[j].isMarked =true;
        var current = shuffle[j].num;
         marked = document.createElement("button");
         marked.setAttribute("id",current);
         marked.setAttribute("class", "marked");
         marked.innerHTML= "Question " + current;
         side.appendChild(marked);
         marked.addEventListener("click", function(event)
         {
             j = event.target.id-1;
             display();
             saveUserAnswer();
         });
    }
}
/////////////////////////////////////////////////

function setCookie( key, value , date) {
    document.cookie = key + "=" + value + ";expires=" + date;
  }

function correction()
{
    for ( var i =0; i< shuffle.length; i++)
    {
         if( shuffle[i].userAnswer !== shuffle[i].correctAnswer )
         {
            score = score -10;
         }
    }
    setCookie("userScore", score,  new Date("10/10/2030"));
}

var Submitted = 1;

function submit( )
{
    correction();
    scorePage = open("score.html","_self", "Score");
    Submitted = 0;
    return Submitted;
}

function isNotSubmitted()
{
    if ( Submitted === 1)
    {
        timeOut();
    }
}

setTimeout( isNotSubmitted, 300000);

function timeOut(){
    correction();
     timeOutPage = open("timeOut.html", "_self", "TimeOut");
}



history.forward(); 
