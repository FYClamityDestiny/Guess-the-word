 name1 = localStorage.getItem("Player1");
 name2 = localStorage.getItem("Player2");
player_1_score = 0;
player_2_score = 0;
document.getElementById("P1").innerHTML = name1 + ":";
document.getElementById("P2").innerHTML = name2 + ":";
document.getElementById("scoreP1").innerHTML = player_1_score;
document.getElementById("scoreP2").innerHTML = player_2_score;
document.getElementById("Question").innerHTML = "Question Turn:" +  name1;
document.getElementById("Answer").innerHTML = "Answer Turn" + name2;
function sendWord(){
getword = document.getElementById("word").value;
getwordLc = getword.toLowerCase();

console.log(getwordLc);

charred1 = getwordLc.charAt(1);
console.log(charred1);
getwordlength_2 = Math.floor(getwordLc.length/2);

charred2 = getwordLc.charAt(getwordlength_2);
console.log(charred2);
lengthM1 = getwordLc.length - 1;

charred3 = getwordLc.charAt(lengthM1);
console.log(charred3);
getwordreplaced1 = getwordLc.replace(charred1, "_");
getwordreplaced2 = getwordreplaced1.replace(charred2, "_");
getwordreplaced3 = getwordreplaced2.replace(charred3, "_");

console.log(getwordreplaced3);

questionword =  "<h4 id='q'>Q." + getwordreplaced3 + "</h4>";
answerword = "<h6>Answer:</h6><input type='text' id='inputter'</input>";
buttonCheck = "<button class = 'btn btn-info' id = 'check' onclick='checkWord()'>Check</button>";
concation = questionword + answerword + buttonCheck;
document.getElementById("output").innerHTML = concation;
document.getElementById("word").value = "";

}

question_turn = "player1"
answer_turn = "player2"

function checkWord(){
AnswerfromTbox = document.getElementById("inputter").value;
AnswerfromTboxRefined = AnswerfromTbox.toLowerCase();
console.log(AnswerfromTboxRefined);

if(AnswerfromTboxRefined == getwordLc){
if (answer_turn == "player1"){
player_1_score = player_1_score + 1;
document.getElementById("scorep1").innerHTML = player_1_score;
}
else{
player_2_score = player_2_score + 1;
document.getElementById("scorep2").innerHTML = player_2_score;
}
}
if(question_turn == "player1"){
question_turn = "player2"
document.getElementById("Question").innerHTML = "Question:" + name2;
}
else{
    question_turn = "player1";
    document.getElementById("Question").innerHTML = "Question:" + name1;
}
if(answer_turn == "player1"){
answer_turn = "player2";
document.getElementById("Answer").innerHTML = "Answer:" + name2;
}
else{
answer_turn = "player1";
document.getElementById("Answer").innerHTML = "Answer:" + name1;
}
document.getElementById("output").innerHTML = "";
}