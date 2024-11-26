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
    team2[ii] = {name: player, number: ii + 1, balls: 0, runs: 0, wickets: 0, active: false};
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
    document.getElementById("bat-1-no").innerHTML = activeBats[0].number;
    document.getElementById("bat-2-no").innerHTML = activeBats[1].number;

    document.getElementById("bowl-1-no").innerHTML = team2[0].number;
    document.getElementById("bowl-1-name").innerHTML = team2[0].name;
    document.getElementById("bowl-2-no").innerHTML = team2[1].number;
    document.getElementById("bowl-2-name").innerHTML = team2[1].name;
    document.getElementById("bowl-3-no").innerHTML = team2[2].number;
    document.getElementById("bowl-3-name").innerHTML = team2[2].name;
    document.getElementById("bowl-4-no").innerHTML = team2[3].number;
    document.getElementById("bowl-4-name").innerHTML = team2[3].name;
    document.getElementById("bowl-5-no").innerHTML = team2[4].number;
    document.getElementById("bowl-5-name").innerHTML = team2[4].name;
    document.getElementById("bowl-6-no").innerHTML = team2[5].number;
    document.getElementById("bowl-6-name").innerHTML = team2[5].name;

    let activeBowler = prompt(`Bowler No. of Bowler: \n${team2[0].number}   ${team2[0].name} <br> ${team2[1].number}   ${team2[1].name} <br> ${team2[2].number}   ${team2[2].name} <br> ${team2[3].number}   ${team2[3].name} <br> ${team2[4].number}   ${team2[4].name} <br> ${team2[5].number}   ${team2[5].name}`, "number");
    for (let object of team2) {
        if (object.number == activeBowler) {
            object.active = true;
        }
    }

    /**
    var selectTag = document.createElement("select");
    for (var i = 0; i < team2.length; i++) {
        var option = team2[i];
        selectTag.options.add(new option(option.number, option.name));
    }
    */

    document.getElementById("start-innings").style.backgroundColor = "#D3D3D3";
    document.getElementById("start-innings").style.color = "#000000";
    document.getElementById("start-innings").style.borderColor = "#000000";
    document.getElementById("start-innings").disabled = true;

console.log(activeBats);
console.log(team1);
console.log(team2);
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

    if (byesValue % 2 === 0) {
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
            document.getElementById("bat-1-no").innerHTML = object.number;
        } else if (object.strike === false) {
            document.getElementById("active-bat-2").innerHTML = object.name;
            document.getElementById("bat-2-score").innerHTML = object.score;
            document.getElementById("bat-2-no").innerHTML = object.number;
        }
    }

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
            document.getElementById("bat-1-no").innerHTML = object.number;
        } else if (object.strike === false) {
            document.getElementById("active-bat-2").innerHTML = object.name;
            document.getElementById("bat-2-score").innerHTML = object.score;
            document.getElementById("bat-2-no").innerHTML = object.number;
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
            document.getElementById("bat-1-no").innerHTML = object.number;
        } else if (object.strike === false) {
            document.getElementById("active-bat-2").innerHTML = object.name;
            document.getElementById("bat-2-score").innerHTML = object.score;
            document.getElementById("bat-2-no").innerHTML = object.number;
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
            document.getElementById("bat-1-no").innerHTML = object.number;
        } else if (object.strike === false) {
            document.getElementById("active-bat-2").innerHTML = object.name;
            document.getElementById("bat-2-score").innerHTML = object.score;
            document.getElementById("bat-2-no").innerHTML = object.number;
        }
    }

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

    if (widesValue % 2 === 0) {
        for (let object of activeBats) {
            if (object.strike === true) {
                object.strike = false;
            } else {
                object.strike = true;
            }
        }
    } else {        
    }

    for (let object of activeBats) {
        if (object.strike === true) {
            document.getElementById("active-bat-1").innerHTML = object.name;
            document.getElementById("bat-1-score").innerHTML = object.score;
            document.getElementById("bat-1-no").innerHTML = object.number;
        } else if (object.strike === false) {
            document.getElementById("active-bat-2").innerHTML = object.name;
            document.getElementById("bat-2-score").innerHTML = object.score;
            document.getElementById("bat-2-no").innerHTML = object.number;
        }
    }

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
            paragraph.textContent += `<br>` + `${object.name} scored ${object.score} - ${dismissalMethod} by bowler: X `; 
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
        document.getElementById("bat-1-no").innerHTML = object.number;
    } else if (object.strike === false) {
        document.getElementById("active-bat-2").innerHTML = object.name;
        document.getElementById("bat-2-score").innerHTML = object.score;
        document.getElementById("bat-2-no").innerHTML = object.number;
    }
}

let wicketsTotal = parseInt(document.getElementById("total-wickets").innerText);
document.getElementById("total-wickets").innerText = ++wicketsTotal;

console.log(team1);
console.log(activeBats);
}