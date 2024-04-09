
//oppg 1
function convertTemperature(scale) {
    var temp = document.getElementById('temperature').value;
    if (scale === "C to F") {
        alert(temp * 9/5 + 32);
    } else if (scale === "F to C") {
        alert((temp - 32) * 5/9);
    } else {
        alert("Ugyldig skala");
    }
}

//oppg 2
function compareRandomNumbers() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    if (num1 < num2) {
        alert(num1 + " er mindre enn " + num2);
    } else if (num1 > num2) {
        alert(num1 + " er større enn " + num2);
    } else {
        alert(num1 + " er lik " + num2);
    }
}

//oppg 3
function isPalindrome() {
    var text = document.getElementById('text').value;
    var reversedText = text.split('').reverse().join('');
    if (text === reversedText) {
        alert("Teksten er palindrome.");
    } else {
        alert("Teksten er ikke palindrome.");
    }
}

//oppg 4
window.onload = function() {
    var redButton = document.getElementById('red');
    var blueButton = document.getElementById('blue');
    var randomButton = document.getElementById('random');

    redButton.onclick = function() {
        document.getElementById('div1').style.backgroundColor = 'red';
    };

    blueButton.onclick = function() {
        document.getElementById('div2').style.backgroundColor = 'blue';
    };

    randomButton.onclick = function() {
        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        document.getElementById('div1').style.backgroundColor = randomColor;
        document.getElementById('div2').style.backgroundColor = randomColor;
    };
};
