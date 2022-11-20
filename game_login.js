function addUsersNames(){
player_1Name = document.getElementById("Player1name").value;
player_2Name = document.getElementById("Player2name").value;

localStorage.setItem("Player1",player_1Name);
localStorage.setItem("Player2",player_2Name);

window.location = "game_page.html";
}

