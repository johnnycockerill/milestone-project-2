const teamsButton = document.getElementById("teams-update");
teamsButton.addEventListener("click", displayTeams);

const Run1Button = document.getElementById("1-run");
Run1Button.addEventListener("click", runs1);

function displayTeams() {
    let homeTeam = document.getElementById('home-team').textContent;
    document.getElementById('teamsheet-home-team').innerHTML = $(homeTeam);
}

function runs1 () {
    let currentScore = parseInt(document.getElementById("total-score").innerText);
    let currentBatScore = parseInt(document.getElementById("bat-1-score").innerText);
    let scoresTotal = parseInt(document.getElementById("scores-total-score").innerText);

    document.getElementById("total-score").innerText = ++currentScore;
    document.getElementById("bat-1-score").innerText = ++currentBatScore;
    document.getElementById("scores-total-score").innerText = ++scoresTotal;
}