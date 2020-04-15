
function rpsGame(yourchoice){
    console.log(yourchoice);

    var humanChoice,computerChoice;
    humanChoice = yourchoice.id;

    computerChoice = numberChoice(comChoice());

    var  winner = detectWinner(humanChoice,computerChoice);

     var fullmsg = finalMsg(winner);

     rpsImgchoice(yourchoice.id,computerChoice,fullmsg);
      
}

function comChoice(){
    return Math.floor(Math.random()*3);  
}

function numberChoice(number){
    return ['rock','paper','scissor'][number];
    
}

function detectWinner(urChoice,botChoice){

var rpsDatabase = {
    'rock' : {'scissor':1, 'rock' : 0.5, 'paper':0},
    'paper' : {'rock':1, 'paper': 0.5, 'scissor': 0},
    'scissor':{'paper':1,'scissor':0.5, 'rock':0}
}


var yourScore = rpsDatabase[urChoice][botChoice];


var computerScore = rpsDatabase[botChoice][urChoice];

return [yourScore,computerScore];

}


function finalMsg([yourScore,computerScore]){

    if(yourScore === 0){
        return {"Massege" : "You Lost", "color":"red"}
    }else if (yourScore === 0.5){
         return {"Massege" : "Game Drow", "color":"Yellow"}
    }else {
        return {"Massege" : "You Win", "color":"Green"}
    }

}

function rpsImgchoice (humanImgchoice , botImgChoice , finalMsg){

var imgDataBase = {
    'rock' : document.getElementById('rock').src,
    'paper' : document.getElementById('paper').src,
    'scissor' : document.getElementById('scissor').src,
}

document.getElementById("rock").remove();
document.getElementById("paper").remove();
document.getElementById("scissor").remove();



var humanDiv = document.createElement("div");
var botDiv =  document.createElement("div");
var msgDiv =  document.createElement("div");

humanDiv.innerHTML="<img src=" +imgDataBase[humanImgchoice] + " style=' box-shadow: 0px 10px 50px rgb(252, 248, 10)'>";
msgDiv.innerHTML = "<h1 style ='color:"+finalMsg['color']+"; font-size :60px;padding:30px;'>"+ finalMsg['Massege']+"</h1>";
botDiv.innerHTML="<img src=" +imgDataBase[botImgChoice] + " style='box-shadow: 0px 10px 50px rgb(221, 221, 213)'>";

msgDiv.setAttribute("id","fahim");

document.getElementById("box").append(humanDiv);
document.getElementById("box").append(msgDiv);
document.getElementById("box").append(botDiv);


}

function refreshNow(){
    location.reload()
}