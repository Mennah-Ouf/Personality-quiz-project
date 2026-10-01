/*Add your JavaScript here*/
var indoorScore=0;
var outdoorScore=0;
var questionCount=0;
var q1a1=document.getElementById("q1a1");
var q1a2=document.getElementById("q1a2");
var q2a1=document.getElementById("q2a1");
var q2a2=document.getElementById("q2a2");
var q3a1=document.getElementById("q3a1");
var q3a2=document.getElementById("q3a2");
var result=document.getElementById("result");
var redo=document.getElementById("redo");
q1a1.addEventListener("click", outdoor);
q1a2.addEventListener("click", indoor);
q2a1.addEventListener("click", indoor);
q2a2.addEventListener("click",outdoor);
q3a1.addEventListener("click", outdoor);
q3a2.addEventListener("click", indoor);
redo.addEventListener("click", again)
function indoor(){indoorScore+=1
                 questionCount+=1
                 console.log("question count="+questionCount+" indoor score="+indoorScore)
if(questionCount==3)
{console.log("the quiz is over")
updateResult();}
                 };
function outdoor(){outdoorScore=outdoorScore+=1
  questionCount=questionCount+=1
                  console.log("question count="+questionCount+"outdoor score="+outdoorScore)
if(questionCount==3)
{console.log("the quiz is over");
 updateResult();}
};
function updateResult(){if(indoorScore>=2){result.innerHTML="isn't it cool to be an indoor person?"
  console.log("isn't it cool to be an indoor person?")}
else if(outdoorScore>=2){result.innerHTML="wow! You are an outdoor person, wonder how it feels like?"
  console.log("wow! You are an outdoor person, wonder how it feels like?")}};
function again(){questionCount=0;
                indoorScore=0;
                outdoorScore=0;
                console.log("question count="+questionCount+" indoor score="+indoorScore+" outdoor score="+outdoorScore);
                result.innerHTML="your result is"};