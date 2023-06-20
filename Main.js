var availablePostions = new Array(9).fill(-1);
function resetFunc(clicked) {
    console.log("clicked "+clicked);
    if(clicked===1)
    {score("reset");}
    availablePostions.fill(-1);
    count = 0;
    const x = document.getElementsByClassName("inputButton");
    for (var i = 0; i < x.length; i++) {
        x[i].innerText = "";
    }
}
var count = 0;
function buttonPressed(number) {
    const x = document.getElementsByClassName("inputButton")[number];
    if (availablePostions[number] !== 1) {
        if (count % 2 === 0) {
            x.innerHTML = "X";
            availablePostions[number] = 1;
        } else {
            x.innerHTML = "O";
            availablePostions[number] = 0;
        }
        count++;
    }
    console.log(availablePostions + " " + x.innerHTML);
    if (winningConditions()) {
        var winner;
        winner = count % 2 == 0 ? "Player2" : "Player1";
        alert(winner + " winner");
        score(winner);
        resetFunc(0);
    }
    if (resetChecker()) {
        resetFunc(0);
    }
}
function winningConditions() {
    if (availablePostions[0] === availablePostions[1] && availablePostions[1] === availablePostions[2] && availablePostions[0] != -1 ||
        availablePostions[3] === availablePostions[4] && availablePostions[4] === availablePostions[5] && availablePostions[3] != -1 ||
        availablePostions[6] === availablePostions[7] && availablePostions[7] === availablePostions[8] && availablePostions[6] != -1 ||

        availablePostions[0] === availablePostions[3] && availablePostions[3] === availablePostions[6] && availablePostions[0] != -1 ||
        availablePostions[1] === availablePostions[4] && availablePostions[4] === availablePostions[7] && availablePostions[1] != -1 ||
        availablePostions[2] === availablePostions[5] && availablePostions[5] === availablePostions[8] && availablePostions[2] != -1 ||

        availablePostions[0] === availablePostions[4] && availablePostions[4] === availablePostions[8] && availablePostions[0] != -1 ||
        availablePostions[2] === availablePostions[4] && availablePostions[4] === availablePostions[6] && availablePostions[2] != -1) {
        console.log("winner");
        return true;
    }
    return false;
}
function resetChecker() {
    for (var i = 0; i < availablePostions.length; i++) {
        if (availablePostions[i] === -1)
            return false;
    }
    return true;
}

function score(winnerPlayer) {
    const player1 = document.getElementsByClassName("score1")[0];
    const player2 = document.getElementsByClassName("score2")[0];
    if (winnerPlayer === "Player2") {
        player2.innerHTML = "" + (parseInt(player2.innerHTML) + 1);
    } else if(winnerPlayer === "Player1") {
        player1.innerHTML = "" + (parseInt(player1.innerHTML) + 1);
    }
    else {
        player1.innerHTML="0";
        player2.innerHTML="0";
    }
}