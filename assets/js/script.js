/**
 * python3 -m http.server
 */

const dataEntry = document.getElementById("data-entry");
dataEntry.addEventListener("click", dataInput);

const startButton = document.getElementById("start-innings");
startButton.addEventListener("click", startInnings);
startButton.disabled = true;

const dotButton = document.getElementById("dot");
dotButton.addEventListener("click", dot);
dotButton.disabled = true;

const runsButton = document.getElementById("runs");
runsButton.addEventListener("click", runs);
runsButton.disabled = true;

const byesButton = document.getElementById("byes");
byesButton.addEventListener("click", byes);
byesButton.disabled = true;

const widesButton = document.getElementById("wides");
widesButton.addEventListener("click", wides);
widesButton.disabled = true;

const noBallByesButton = document.getElementById("no-balls-byes");
noBallByesButton.addEventListener("click", noBallByes);
noBallByesButton.disabled = true;

const noBallRunsButton = document.getElementById("no-balls-runs");
noBallRunsButton.addEventListener("click", noBallRuns);
noBallRunsButton.disabled = true;

const wicketsButton = document.getElementById("wicket-button");
wicketsButton.addEventListener("click", wicket);
wicketsButton.disabled = true;

let team1 = [];
let team2 = [];

/**
 * function to request the team names from the user
 */

function dataInput () {
    let hTeam = prompt("Please enter the name of the team batting first: ", "");
    let aTeam = prompt("Please enter the name of the team fielding first: ", "");
    startButton.disabled = false;
    document.getElementById("data-entry").style.backgroundColor = "#D3D3D3";
    document.getElementById("data-entry").style.color = "#000000";
    document.getElementById("data-entry").style.borderColor = "#000000";
    document.getElementById("data-entry").disabled = true;

    if (hTeam != null) {
        let hTeamC = hTeam.charAt(0).toUpperCase() + hTeam.slice(1);
        document.getElementById("home-team").innerHTML = hTeamC;
    }
    if (hTeam != null) {
        let hTeamC = hTeam.charAt(0).toUpperCase() + hTeam.slice(1);
        document.getElementById("home-team-team").innerHTML = hTeamC;
    }
    if (aTeam != null) {
        let aTeamC = aTeam.charAt(0).toUpperCase() + aTeam.slice(1);
        document.getElementById("away-team").innerHTML = aTeamC;
    }
    if (aTeam != null) {
        let aTeamC = aTeam.charAt(0).toUpperCase() + aTeam.slice(1);
        document.getElementById("away-team-team").innerHTML = aTeamC;
    }

    for (let ii = 0; ii < 6; ii++) {
        let playerL = prompt(`Please enter the name of No. ${ii + 1} batter:`, "batter");
        let player = playerL.charAt(0).toUpperCase() + playerL.slice(1);
        team1[ii] = {name: player, number: ii + 1, score: 0, strike: false};
    }
        for (let ii = 0; ii < 6; ii++) {
        let playerL = prompt(`Please enter the name of fielder no. ${ii + 1}:`, "fielder");
        let player = playerL.charAt(0).toUpperCase() + playerL.slice(1);
        team2[ii] = {name: player, number: ii + 1, balls: 0, runs: 0, wickets: 0, active: false};
    }

    console.log(hTeam);
    console.log(aTeam);


console.log(team1);
console.log(team2);
};

let activeBats = [];
let activeBowl = [];

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

    for (let i = 0; i < 6; i++) {
        document.getElementById(`bowl-${i+1}-no`).innerHTML = team2[i].number;
        document.getElementById(`bowl-${i+1}-name`).innerHTML = team2[i].name;
    }

    let activeBowler = prompt(`Please choose the number corresponding to the opening bowler: \n${team2[0].number}   ${team2[0].name} \n ${team2[1].number}   ${team2[1].name} \n ${team2[2].number}   ${team2[2].name} \n ${team2[3].number}   ${team2[3].name} \n ${team2[4].number}   ${team2[4].name} \n ${team2[5].number}   ${team2[5].name}`, "number");
    for (let object of team2) {
        if (object.number == activeBowler) {
            object.active = true;
        }
    }

    for (let object of team2) {
        if (object.active === true) {
            document.getElementById("active-bowl").innerHTML = object.name;
        }
    }

    for(var a = 0; a < team2.length; a++) {
        for(var b in team2[a]) {
            if(team2[a][b] === true) {
                activeBowl[0] = team2[a];
                team2.splice(a, 1);
                a--;
                break;
            }
        }
    }

    document.getElementById("start-innings").style.backgroundColor = "#D3D3D3";
    document.getElementById("start-innings").style.color = "#000000";
    document.getElementById("start-innings").style.borderColor = "#000000";
    document.getElementById("start-innings").disabled = true;

    
dotButton.disabled = false;
runsButton.disabled = false;
byesButton.disabled = false;
noBallByesButton.disabled = false;
noBallRunsButton.disabled = false;
widesButton.disabled = false;
wicketsButton.disabled = false;

document.getElementById("dot").style.backgroundColor = "#FFFFFF";
document.getElementById("dot").style.color = "#000000";
document.getElementById("dot").style.borderColor = "#0000FF";
document.getElementById("byes").style.backgroundColor = "#FFFFFF";
document.getElementById("byes").style.color = "#000000";
document.getElementById("byes").style.borderColor = "#0000FF";
document.getElementById("runs").style.backgroundColor = "#FFFFFF";
document.getElementById("runs").style.color = "#000000";
document.getElementById("runs").style.borderColor = "#0000FF";
document.getElementById("wides").style.backgroundColor = "#FFFFFF";
document.getElementById("wides").style.color = "#000000";
document.getElementById("wides").style.borderColor = "#0000FF";
document.getElementById("no-balls-runs").style.backgroundColor = "#FFFFFF";
document.getElementById("no-balls-runs").style.color = "#000000";
document.getElementById("no-balls-runs").style.borderColor = "#0000FF";
document.getElementById("no-balls-byes").style.backgroundColor = "#FFFFFF";
document.getElementById("no-balls-byes").style.color = "#000000";
document.getElementById("no-balls-byes").style.borderColor = "#0000FF";
document.getElementById("wicket-button").style.backgroundColor = "#FFFFFF";
document.getElementById("wicket-button").style.color = "#000000";
document.getElementById("wicket-button").style.borderColor = "#FF0000";

console.log(activeBats);
console.log(activeBowl);
console.log(team1);
console.log(team2);
}

let ballCount = 0;
let overCount = 0;
let wicketCount = 0;

/**
 * function to choose new bowler at end of over
 */
function newBowler () {
    activeBowl[0].active = false;
    activeBowl[0].balls = document.getElementById("active-balls").innerHTML;
    activeBowl[0].runs = document.getElementById("active-runs").innerHTML;
    activeBowl[0].wickets = document.getElementById("active-wkt").innerHTML;

    let activeBowler = prompt(`Bowler No.: \n${team2[0].number}   ${team2[0].name} \n ${team2[1].number}   ${team2[1].name} \n ${team2[2].number}   ${team2[2].name} \n ${team2[3].number}   ${team2[3].name} \n ${team2[4].number}   ${team2[4].name}`, "number");
    for (let object of team2) {
        if (object.number == activeBowler) {
            object.active = true;
        }
    }

    team2[5] = activeBowl[0];
    console.log(team2);

    for(var a = 0; a < team2.length; a++) {
        for(var b in team2[a]) {
            if(team2[a][b] === true) {
                activeBowl[1] = team2[a];
                team2.splice(a, 1);
                a--;
                break;
            }
        }
    }

    activeBowl.shift();
    console.log(team2);
    console.log(activeBowl);

    for (let object of activeBowl) {
        if (object.active === true) {
            document.getElementById("active-bowl").innerHTML = object.name;
            document.getElementById("active-balls").innerHTML = object.balls;
            document.getElementById("active-runs").innerHTML = object.runs;
            document.getElementById("active-wkt").innerHTML = object.wickets;
        }
    }

    for (let b = 1; b < team2.length + 1; b++) {
        for (let object of team2) {
            if (object.number == b) {
                document.getElementById(`bowl-${b}-balls`).innerHTML = object.balls;
                document.getElementById(`bowl-${b}-runs`).innerHTML = object.runs;
                document.getElementById(`bowl-${b}-wickets`).innerHTML = object.wickets;
            }
    }}

}

/**
 * updates scoresheet for a dot ball
 */
function dot () {
    let currentBalls = parseInt(document.getElementById("active-balls").innerText);
    let currentBallsTotal = parseInt(document.getElementById("active-balls-total").innerText);

    document.getElementById("active-balls").innerText = ++currentBalls;
    document.getElementById("active-balls-total").innerText = ++currentBallsTotal;

    if (overCount == 10) {
        endOfInnings();
    } else {
        if (ballCount == 5) {
            ballCount = 0;
            overCount = overCount + 1;
            newBowler();
        } else {
            ballCount = ballCount + 1;
        }
    }
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

    if (overCount == 10) {
        endOfInnings();
    } else {
        if (ballCount == 5) {
            ballCount = 0;
            overCount = overCount + 1;
            newBowler();
        } else {
            ballCount = ballCount + 1;
        }
    }

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

    if (overCount == 10) {
        endOfInnings();
    } else {
        if (ballCount == 5) {
            ballCount = 0;
            overCount = overCount + 1;
            newBowler();
        } else {
            ballCount = ballCount + 1;
        }
    }

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
 * function runs if last wicket falls before 10 overs and ends the innings
 */
function wicket () {
    if (wicketCount == 4) {
        let dismissalMethod = document.getElementById("wicket").value;

        let wicketsTotal = parseInt(document.getElementById("total-wickets").innerText);
        document.getElementById("total-wickets").innerText = ++wicketsTotal;
        let activeWicketsTotal = parseInt(document.getElementById("active-wkt").innerText);
        document.getElementById("active-wkt").innerText = ++activeWicketsTotal;

        for (let object of activeBats) {
            if (object.strike === true) {
                var paragraph = document.getElementById(`batting-team-${wicketsTotal}`);
                paragraph.textContent += `${object.name} scored ${object.score} - ${dismissalMethod} by bowler: ${activeBowl[0].name} `; 
            }}

        let currentBalls = parseInt(document.getElementById("active-balls").innerText);
        let currentBallsTotal = parseInt(document.getElementById("active-balls-total").innerText);
        document.getElementById("active-balls").innerText = ++currentBalls;
        document.getElementById("active-balls-total").innerText = ++currentBallsTotal;
        
        activeBowl[0].balls = document.getElementById("active-balls").innerHTML;
        activeBowl[0].runs = document.getElementById("active-runs").innerHTML;
        activeBowl[0].wickets = document.getElementById("active-wkt").innerHTML;

        team2[5] = activeBowl[0];
        team1[4] = activeBats[0];
        team1[5] = activeBats[1];

        for (let b = 1; b < team2.length + 1; b++) {
            for (let object of team2) {
                if (object.number == b) {
                    document.getElementById(`bowl-${b}-balls`).innerHTML = object.balls;
                    document.getElementById(`bowl-${b}-runs`).innerHTML = object.runs;
                    document.getElementById(`bowl-${b}-wickets`).innerHTML = object.wickets;
                }
        }}

    console.log(team1);
    console.log(team2);

        endOfInnings();
            } else {
        wicketDecider();
    } 
    
}

/**
 * provides function for updating scorecard with dismissed batsman info and
 * brings in next batsman into active bats array
 */
function wicketDecider () {
    let dismissalMethod = document.getElementById("wicket").value;

    let wicketsTotal = parseInt(document.getElementById("total-wickets").innerText);
    document.getElementById("total-wickets").innerText = ++wicketsTotal;
    let activeWicketsTotal = parseInt(document.getElementById("active-wkt").innerText);
    document.getElementById("active-wkt").innerText = ++activeWicketsTotal;

    for (let object of activeBats) {
        if (object.strike === true) {
            var paragraph = document.getElementById(`batting-team-${wicketsTotal}`);
            paragraph.textContent += `${object.name} scored ${object.score} - ${dismissalMethod} by bowler: ${activeBowl[0].name} `; 
        }}

    for(var a = 0; a < activeBats.length; a++) {
        for(var b in activeBats[a]) {
            if(activeBats[a][b] === true) {
                team1[4] = activeBats[a];
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

let currentBalls = parseInt(document.getElementById("active-balls").innerText);
let currentBallsTotal = parseInt(document.getElementById("active-balls-total").innerText);
document.getElementById("active-balls").innerText = ++currentBalls;
document.getElementById("active-balls-total").innerText = ++currentBallsTotal;

if (overCount == 10) {
    endOfInnings();
} else {
    if (ballCount == 5) {
        ballCount = 0;
        overCount = overCount + 1;
        wicketCount = wicketCount + 1;
        newBowler();
    } else {
        ballCount = ballCount + 1;
        wicketCount = wicketCount + 1;
    }
}

console.log(team1);
console.log(activeBats);
}

/**
 * function to reverse teams and begin 2nd innings
 */
function endOfInnings() {

let team3 = Array.from(team1);
let team4 = Array.from(team2);

for (let i = 0; i < 6; i++) {
    team1[i].name = team4[i].name;
    team2[i].name = team3[i].name;
}

console.log(team1);
console.log(team2);
console.log(team3);
console.log(team4);

document.getElementById("start-innings").style.backgroundColor = "#FF0000";
document.getElementById("start-innings").style.color = "#FFFFFF";
document.getElementById("start-innings").style.borderColor = "#FF0000";
document.getElementById("start-innings").disabled = false;

}