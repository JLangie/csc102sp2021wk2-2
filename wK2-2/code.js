//This is a more efficient countDown timer using loops.
function countDownV2() {
    var count = 10;

    for (var i = 1; i <= 10; i++) {
        setTimeout(function () {
            document.getElementById("countDownTimer").innerHTML = count;
            count--;
        }, 1000 * i);
    }

    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blast Off!";
        count = count--;
    }, 11000);
}

// countDown timer from 10 to 1, then print Blast Off!!
function countDown() {
    var count = 10;
    // countDown starts at 10
    document.getElementById("countDownTimer").innerHTML = count;
    count = count - 1
    // 9
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 1000);
    //8
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 2000);
    //7
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 3000);
    //6
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 4000);
    //5
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 5000);
    //4
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 6000);
    //3
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 7000);
    //2
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 8000);
    //1
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 9000);
    //Blast Off!!!
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blast Off!!!";
        count = count - 1;
    }, 10000);
}
//Craps funtion with die1 and die2.
function playCraps() {
    //Creates die1
    var die1;
    //Creates die2
    var die2;
    //Creates sum for results of craps round.
    var sum;
    //Random number generator for 1 - 6 rounded to whole number.
    die1 = Math.ceil(Math.random() * 6);
    die2 = Math.ceil(Math.random() * 6);
    //Defines sum as the addition of die1 + die2.
    sum = die1 + die2;
    //Displays die1.
    document.getElementById("die1Res").innerHTML = die1;
    //Displays die2.
    document.getElementById("die2Res").innerHTML = die2;
    //Displays sum of die1 and die2.
    document.getElementById("sumRes").innerHTML = sum;
    //"If/else" statments determining results of craps round. Lose, win, push.
    if (sum == 7 || sum == 11) {
        document.getElementById("crapsReults").innerHTML = "Craps! You Lose!!";
    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsReults").innerHTML = "Doubles, You WIN!!";
    } else {
        document.getElementById("crapsReults").innerHTML = "Push, Please roll again.";
    }

}
//Function to runSanbox test countdown timer using a "for loop" with Blast Off at timeout.
function runSandbox() {
    var count = 10;
    // "For loop" countdown timer.
    for (var i = 1; i <= 10; i++) {
        setTimeout(function () {
            document.getElementById("countDownTimer").innerHTML = count;
            count--;
        }, 1000 * i);
    }
    //Display "Blast Off!" when timer reaches 0.
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blast Off!";
        count = count--;
    }, 11000);

}