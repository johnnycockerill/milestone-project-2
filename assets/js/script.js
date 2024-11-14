const teamsButton = document.getElementById("teams-update");
teamsButton.addEventListener("click", displayTeams);

const submitTeamsButton = document.getElementById("submit-teams");
submitTeamsButton.addEventListener("click", submitTeams);

const dotButton = document.getElementById("dot");
dotButton.addEventListener("click", dot);

const runsButton = document.getElementById("runs");
runsButton.addEventListener("click", runs);

const byesButton = document.getElementById("byes");
byesButton.addEventListener("click", byes);

const widesButton = document.getElementById("wides");
widesButton.addEventListener("click", wides);

const noBallByesButton = document.getElementById("no-balls-byes");
noBallByesButton.addEventListener("click", noBallByes);

const noBallRunsButton = document.getElementById("no-balls-runs");
noBallRunsButton.addEventListener("click", noBallRuns);

/**
 * update teams entered into team sheet below
 */
function displayTeams() {
    let homeTeam = document.getElementById('home-team').textContent;
    document.getElementById('teamsheet-home-team').innerHTML = $(homeTeam);
}

/**
 * updates scoresheet for a dot ball
 */
function dot () {
    let currentBalls = parseInt(document.getElementById("active-balls").innerText);
    let currentBallsTotal = parseInt(document.getElementById("active-balls-total").innerText);

    document.getElementById("active-balls").innerText = ++currentBalls;
    document.getElementById("active-balls-total").innerText = ++currentBallsTotal;

    }

/**
 * updates scoresheet for runs
 */
function runs () {
    let runsValue = parseInt(document.getElementById("run").value);
    let currentScore = parseInt(document.getElementById("total-score").innerText);
    let currentBatScore = parseInt(document.getElementById("bat-1-score").innerText);
    let currentBowlScore = parseInt(document.getElementById("active-runs").innerText);
    let currentBalls = parseInt(document.getElementById("active-balls").innerText);
    let currentBallsTotal = parseInt(document.getElementById("active-balls-total").innerText);

    document.getElementById("total-score").innerText = currentScore + runsValue;
    document.getElementById("bat-1-score").innerText = currentBatScore + runsValue;
    document.getElementById("active-runs").innerText = currentBowlScore + runsValue;
    document.getElementById("active-balls").innerText = ++currentBalls;
    document.getElementById("active-balls-total").innerText = ++currentBallsTotal;

}

/**
 * updates scoresheet for byes
 */
function byes () {
    let byesValue = parseInt(document.getElementById("bye").value);
    let extrasValue = parseInt(document.getElementById("extras-score").innerText);
    let currentScore = parseInt(document.getElementById("total-score").innerText);
    let currentBalls = parseInt(document.getElementById("active-balls").innerText);
    let currentBallsTotal = parseInt(document.getElementById("active-balls-total").innerText);

    document.getElementById("total-score").innerText = currentScore + byesValue;
    document.getElementById("extras-score").innerText = extrasValue + byesValue;
    document.getElementById("active-balls").innerText = ++currentBalls;
    document.getElementById("active-balls-total").innerText = ++currentBallsTotal;

}

/**
 * updates scoresheet for wides
 */
function wides () {
    let widesValue = parseInt(document.getElementById("wide").value);
    let extrasValue = parseInt(document.getElementById("extras-score").innerText);
    let currentScore = parseInt(document.getElementById("total-score").innerText);
    let currentBowlScore = parseInt(document.getElementById("active-runs").innerText);

    document.getElementById("total-score").innerText = currentScore + widesValue;
    document.getElementById("extras-score").innerText = extrasValue + widesValue;
    document.getElementById("active-runs").innerText = currentBowlScore + widesValue;
}

/**
 * updates score sheet for no balls with byes
 */
function noBallByes () {
    let noBallValue = parseInt(document.getElementById("no-ball").value);
    let extrasValue = parseInt(document.getElementById("extras-score").innerText);
    let currentScore = parseInt(document.getElementById("total-score").innerText);
    let currentBowlScore = parseInt(document.getElementById("active-runs").innerText);

    document.getElementById("total-score").innerText = currentScore + noBallValue + 1;
    document.getElementById("extras-score").innerText = extrasValue + noBallValue + 1;
    document.getElementById("active-runs").innerText = ++currentBowlScore;
}

/**
 * updates score sheet for no balls with runs
 */
function noBallRuns () {
    let noBallValue = parseInt(document.getElementById("no-ball").value);
    let currentBatScore = parseInt(document.getElementById("bat-1-score").innerText);
    let extrasValue = parseInt(document.getElementById("extras-score").innerText);
    let currentScore = parseInt(document.getElementById("total-score").innerText);
    let currentBowlScore = parseInt(document.getElementById("active-runs").innerText);

    document.getElementById("total-score").innerText = currentScore + noBallValue + 1;
    document.getElementById("bat-1-score").innerText = currentBatScore + noBallValue;
    document.getElementById("extras-score").innerText = ++extrasValue;
    document.getElementById("active-runs").innerText = currentBowlScore + noBallValue + 1;
}

let team1 = [];

let bat1 = document.getElementById("team1-player-1").innerText;
var bat1Score = document.getElementById("batsman-score-1").innerText;

let bat2 = document.getElementById("team1-player-2").innerText;
var bat2Score = document.getElementById("batsman-score-2").innerText;

let bat3 = document.getElementById("team1-player-3").innerText;
var bat3Score = document.getElementById("batsman-score-3").innerText;

let bat4 = document.getElementById("team1-player-4").innerText;
var bat4Score = document.getElementById("batsman-score-4").innerText;

let bat5 = document.getElementById("team1-player-5").innerText;
var bat5Score = document.getElementById("batsman-score-5").innerText;

let bat6 = document.getElementById("team1-player-6").innerText;
var bat6Score = document.getElementById("batsman-score-6").innerText;

function submitTeams () {
    team1.push({name: bat1, score: bat1Score});
    team1.push({name: bat2, score: bat2Score});
    team1.push({name: bat3, score: bat3Score});
    team1.push({name: bat4, score: bat4Score});
    team1.push({name: bat5, score: bat5Score});
    team1.push({name: bat6, score: bat6Score});
    console.log(team1);

}