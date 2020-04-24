let n1 = Math.floor(Math.random() * 10 + 1);
let n2 = Math.floor(Math.random() * 10 + 1);


var ans = ""

document.getElementById('v1').value = n1;
document.getElementById('v2').value = n2;
ans = n1 * n2;

const jsGame = () => {
    var usera = document.getElementById('answ').value;

    if (usera == ans) {
        alert("Well done.Your answer is correct");
    }
    else if (usera == '') {
        alert("Please Insert Some Numeric Value");
    }
    else {
        alert("Correct answer is " + ans + ".Try again.");
    }

    document.getElementById('answ').value = '';

    n1 = Math.floor(Math.random() * 10 + 1);
    n2 = Math.floor(Math.random() * 10 + 1);

    document.getElementById('v1').value = n1;
    document.getElementById('v2').value = n2;
    ans = n1 * n2;
}