const teamsButton = document.getElementById("teams-update");
teamsButton.addEventListener("click", displayTeams);

const dotButton = document.getElementById("dot");
dotButton.addEventListener("click", dot);

const Run1Button = document.getElementById("1-run");
Run1Button.addEventListener("click", runs1);

const Run2Button = document.getElementById("2-run");
Run2Button.addEventListener("click", runs2);

function displayTeams() {
    let homeTeam = document.getElementById('home-team').textContent;
    document.getElementById('teamsheet-home-team').innerHTML = $(homeTeam);
}

function dot () {
    let currentBalls = parseInt(document.getElementById("active-balls").innerText);
    let currentBallsTotal = parseInt(document.getElementById("active-balls-total").innerText);

    document.getElementById("active-balls").innerText = ++currentBalls;
    document.getElementById("active-balls-total").innerText = ++currentBallsTotal;

    }

function runs1 () {
    let currentScore = parseInt(document.getElementById("total-score").innerText);
    let currentBatScore = parseInt(document.getElementById("bat-1-score").innerText);
    let currentBowlScore = parseInt(document.getElementById("active-runs").innerText);
    let currentBalls = parseInt(document.getElementById("active-balls").innerText);
    let currentBallsTotal = parseInt(document.getElementById("active-balls-total").innerText);

    document.getElementById("total-score").innerText = ++currentScore;
    document.getElementById("bat-1-score").innerText = ++currentBatScore;
    document.getElementById("active-runs").innerText = ++currentBowlScore;
    document.getElementById("active-balls").innerText = ++currentBalls;
    document.getElementById("active-balls-total").innerText = ++currentBallsTotal;

    }

function runs2 () {
    let currentScore = parseInt(document.getElementById("total-score").innerText);
    let currentBatScore = parseInt(document.getElementById("bat-1-score").innerText);
    let currentBowlScore = parseInt(document.getElementById("active-runs").innerText);
    let currentBalls = parseInt(document.getElementById("active-balls").innerText);
    let currentBallsTotal = parseInt(document.getElementById("active-balls-total").innerText);

    document.getElementById("total-score").innerText = currentScore + 2;
    document.getElementById("bat-1-score").innerText = currentBatScore + 2;
    document.getElementById("active-runs").innerText = currentBowlScore + 2;
    document.getElementById("active-balls").innerText = ++currentBalls;
    document.getElementById("active-balls-total").innerText = ++currentBallsTotal;

    }