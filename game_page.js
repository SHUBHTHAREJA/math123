player1_name=localStorage.getItem("player1_name_input");
player2_name=localStorage.getItem("player2_name_input");


player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";


document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;


document.getElementById("player_question").innerHTML="question-turn "+player1_name;
document.getElementById("player_answer").innerHTML="answer-turn "+player2_name;


function send(){
    num1=document.getElementById("number1").value;
    num2=document.getElementById("number2").value;

    question_word = "<h4 id='word_display'> Q. "+num1+num2+"</h4>"; 
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = num1+ "x" +num2;  document.getElementById("output").innerHTML = row; 
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";



}
