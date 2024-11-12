function displayTeams() {
    let homeTeam = document.getElementById('home-team').textContent;
    document.getElementById('teamsheet-home-team').innerHTML = $(homeTeam);

}

function runs1 () {
    let currentScore = parseInt(document.getElementById("total-score").innerText);
    document.getElementById("total-score").innerText = ++currentScore;
}