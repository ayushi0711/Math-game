var playing=false;
var action;
var timeremaining;
var correctAnswer;
//if we click on start/reset
document.getElementById('startreset').onclick=function(){
    if(playing==true)
    {
        location.reload();
    }
    else{
        playing=true;
        score=0;
        document.getElementById('scorevalue').innerHTML=score;
        
        show('timeremaining');
        timeremaining=60;
        document.getElementById('trvalue').innerHTML=timeremaining;
        hide('gameover');
        document.getElementById('startreset').innerHTML="Reset Game"
        ShowCountdown();
        genrateQA();

    }
}
for(i=1; i<5; i++){
document.getElementById('box'+ i).onclick=function(){
    if(playing==true){
        if(this.innerHTML==correctAnswer){
            score++;
            document.getElementById('scorevalue').innerHTML=score;
            hide('wrong');
            show('correct');
            setTimeout(function(){
                hide('correct');
            },1000)
            genrateQA();
        }
        else{
            
            hide('correct');
            show('wrong');

            setTimeout(function(){
                hide('correct');
            },1000)
        }
    }
} 
}
function ShowCountdown(){
    action=setInterval(function(){
     timeremaining--;
     document.getElementById('trvalue').innerHTML=timeremaining;
     if(timeremaining==0){
        stopCountdown();
        show('gameover')
        document.getElementById('gameover').innerHTML="<p> Game Over!</p><p>Your score is "+ score + ".</p>"
         hide('timeremaining');
         hide('correct');
         hide('wrong');
         playing=false;
        document.getElementById('startreset').innerHTML="Start Game"


     }
    },1000)
}
function stopCountdown(){
    clearInterval(action);
}
function hide(id){
    document.getElementById(id).style.display="none";
}
function show(id){
    document.getElementById(id).style.display="block";
}
function genrateQA(){
    var  x=1+Math.round(9*Math.random());
    var  y=1+Math.round(9*Math.random());
     correctAnswer=x*y;
     document.getElementById('question').innerHTML=x + "x" +y;
    var correctPosition =1+Math.round(3*Math.random());
document.getElementById('box' + correctPosition).innerHTML=correctAnswer
var answers=[correctAnswer];
for(i=1; i<5; i++){
    if(i!=correctPosition){
        var wrongAnswer;
        do{
        wrongAnswer=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
        }while(answers.indexOf(wrongAnswer)>-1)
        answers.push(wrongAnswer);
        document.getElementById('box'+i).innerHTML=wrongAnswer;
    }
}
}