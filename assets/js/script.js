const startButton = document.getElementById("start-innings");
startButton.addEventListener("click", startInnings);

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

const wicketsButton = document.getElementById("wicket-button");
wicketsButton.addEventListener("click", wicket);

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
/**
 * function runs with window load to request the team names from the user
 */
window.addEventListener("load", function teamInput () {
    let hTeam = prompt("Batting Team: ", "");
    let aTeam = prompt("Fielding Team: ", "");
    if (hTeam != null) {
        this.document.getElementById("home-team").innerHTML = hTeam;
    }
    if (hTeam != null) {
        this.document.getElementById("home-team-team").innerHTML = hTeam;
    }
    if (aTeam != null) {
        this.document.getElementById("away-team").innerHTML = aTeam;
    }
    if (aTeam != null) {
        this.document.getElementById("away-team-team").innerHTML = aTeam;
    }
    console.log(hTeam);
    console.log(aTeam);
});

let team1 = [];
let team2 = [];

/**
 * function runs with window load to request the players names from the user
 */
window.addEventListener("load", function submitTeam () {

    for (let ii = 0; ii < 6; ii++) {
    let player = prompt("Name of ", "batter");
    team1[ii] = {name: player, number: ii + 1, score: 0, strike: false};
}
    for (let ii = 0; ii < 6; ii++) {
    let player = prompt("Name of ", "fielder");
    team2[ii] = {name: player, number: ii + 1, balls: 0, runs: 0, wickets: 0};
}
console.log(team1);
console.log(team2);
});

let activeBats = [];
let activeBowler = [];

/**
 * begin innings, bringing the strike batsmen into control area and choosing opening bowler
 */
function startInnings () {
    activeBats[0] = team1[0];
    activeBats[1] = team1[1];
    team1.splice(0, 2);
    for (let object of activeBats) {
        if (object.number === 1) {
            object.strike = true;
        }
    }
    document.getElementById("active-bat-1").innerHTML = activeBats[0].name;
    document.getElementById("active-bat-2").innerHTML = activeBats[1].name;

    document.getElementById("start-innings").style.backgroundColor = "#D3D3D3";
    document.getElementById("start-innings").style.color = "#000000";
    document.getElementById("start-innings").style.borderColor = "#000000";
    document.getElementById("start-innings").disabled = true;

    

console.log(activeBats);
console.log(team1);
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
 * updates scoresheet for runs
 */
function runs () {
    let runsValue = parseInt(document.getElementById("run").value);
    let currentScore = parseInt(document.getElementById("total-score").innerText);
    let currentBowlScore = parseInt(document.getElementById("active-runs").innerText);
    let currentBalls = parseInt(document.getElementById("active-balls").innerText);
    let currentBallsTotal = parseInt(document.getElementById("active-balls-total").innerText);

    for (let object of activeBats) {
        if (object.strike === true) {
            object.score = object.score + runsValue;
        }
    }

    if (runsValue % 2 === 0) {
    } else {
        for (let object of activeBats) {
            if (object.strike === true) {
                object.strike = false;
            } else {
                object.strike = true;
            }
        }
    }

    for (let object of activeBats) {
        if (object.strike === true) {
            document.getElementById("active-bat-1").innerHTML = object.name;
            document.getElementById("bat-1-score").innerHTML = object.score;
        } else if (object.strike === false) {
            document.getElementById("active-bat-2").innerHTML = object.name;
            document.getElementById("bat-2-score").innerHTML = object.score;
        }
    }
    document.getElementById("total-score").innerText = currentScore + runsValue;
    document.getElementById("active-runs").innerText = currentBowlScore + runsValue;
    document.getElementById("active-balls").innerText = ++currentBalls;
    document.getElementById("active-balls-total").innerText = ++currentBallsTotal;

    console.log(activeBats);
}

/**
 * updates score sheet for no balls with runs
 */
function noBallRuns () {
    let noBallValue = parseInt(document.getElementById("no-ball").value);
    let extrasValue = parseInt(document.getElementById("extras-score").innerText);
    let currentScore = parseInt(document.getElementById("total-score").innerText);
    let currentBowlScore = parseInt(document.getElementById("active-runs").innerText);

    for (let object of activeBats) {
        if (object.strike === true) {
            object.score = object.score + noBallValue;
        }
    }

    if (noBallValue % 2 === 0) {
    } else {
        for (let object of activeBats) {
            if (object.strike === true) {
                object.strike = false;
            } else {
                object.strike = true;
            }
        }
    }

    for (let object of activeBats) {
        if (object.strike === true) {
            document.getElementById("active-bat-1").innerHTML = object.name;
            document.getElementById("bat-1-score").innerHTML = object.score;
        } else if (object.strike === false) {
            document.getElementById("active-bat-2").innerHTML = object.name;
            document.getElementById("bat-2-score").innerHTML = object.score;
        }
    }

    document.getElementById("total-score").innerText = currentScore + noBallValue + 1;
    document.getElementById("extras-score").innerText = ++extrasValue;
    document.getElementById("active-runs").innerText = currentBowlScore + noBallValue + 1;
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
 * provides function for updating scorecard with dismissed batsman info and
 * brings in next batsman into active bats array
 */
function wicket () {
    let dismissalMethod = document.getElementById("wicket").value;

    for (let object of activeBats) {
        if (object.strike === true) {
            var paragraph = document.getElementById("batting-team");
            paragraph.textContent += `${object.name} scored ${object.score} - ${dismissalMethod} by bowler: X `; 
        }}

    for(var a = 0; a < activeBats.length; a++) {
        for(var b in activeBats[a]) {
            if(activeBats[a][b] === true) {
                activeBats.splice(a, 1);
                a--;
                break;
            }
        }
    }
console.log(activeBats);

activeBats[1] = team1[0];
team1.splice(0, 1);
activeBats[1].strike = true;

for (let object of activeBats) {
    if (object.strike === true) {
        document.getElementById("active-bat-1").innerHTML = object.name;
        document.getElementById("bat-1-score").innerHTML = object.score;
    } else if (object.strike === false) {
        document.getElementById("active-bat-2").innerHTML = object.name;
        document.getElementById("bat-2-score").innerHTML = object.score;
    }
}

console.log(team1);
console.log(activeBats);
}