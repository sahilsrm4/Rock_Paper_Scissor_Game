let scorewin = 0;
let scoreloose = 0;
let scoretie = 0;
function computerch() {
    let computerchoice = Math.random();// Math.random() will give a random 0 <= no.< 1
    let computerturn;
    if (computerchoice >= 0 && computerchoice < 1 / 3) {
        computerturn = "rock";
    }
    else if (computerchoice >= 1 / 3 && computerchoice < 2 / 3) {
        computerturn = 'paper';
    }
    else {
        computerturn = "sessior";
    }
    return computerturn;
}
// now we make a function which take input value and compare that with computer turn and give result
function playgame(playerturn) {
    let computerturn = computerch();

    if (playerturn === 'paper' && computerturn === "rock") {
        document.querySelector('.resultimage1').innerHTML = "<div class=\"resultcont  crock\"> </div>"
        document.querySelector('.resultimage2').innerHTML = "<div class=\"resultcont  ppaper\"> </div>"
        document.querySelector('.resulttext').innerHTML = "You WON !"
        scorewin += 1;
    }
    else if (playerturn === 'sessior' && computerturn === "rock") {
        document.querySelector('.resultimage1').innerHTML = "<div class=\"resultcont  crock\"> </div>"
        document.querySelector('.resultimage2').innerHTML = "<div class=\"resultcont  psessior\"> </div>"
        document.querySelector('.resulttext').innerHTML = "You LOOSE !"

        scoreloose += 1;
    }
    else if (playerturn === 'rock' && computerturn === "sessior") {
        document.querySelector('.resultimage1').innerHTML = "<div class=\"resultcont  csessior\"> </div>"
        document.querySelector('.resultimage2').innerHTML = "<div class=\"resultcont  prock\"> </div>"
        document.querySelector('.resulttext').innerHTML = "You WON !"

        scorewin += 1;
    }
    else if (playerturn === 'paper' && computerturn === "sessior") {
        document.querySelector('.resultimage1').innerHTML = "<div class=\"resultcont  csessior\"> </div>"
        document.querySelector('.resultimage2').innerHTML = "<div class=\"resultcont  ppaper\"> </div>"
        document.querySelector('.resulttext').innerHTML = "You LOOSE!"

        scoreloose += 1;
    }

    else if (playerturn === 'rock' && computerturn === "paper") {
        document.querySelector('.resultimage1').innerHTML = "<div class=\"resultcont  cpaper\"> </div>"
        document.querySelector('.resultimage2').innerHTML = "<div class=\"resultcont  prock\"> </div>"
        document.querySelector('.resulttext').innerHTML = "You LOOSE !"

        scoreloose += 1;
    }
    else if (playerturn === 'sessior' && computerturn === "paper") {
        document.querySelector('.resultimage1').innerHTML = "<div class=\"resultcont  cpaper\"> </div>"
        document.querySelector('.resultimage2').innerHTML = "<div class=\"resultcont  psessior\"> </div>"
        document.querySelector('.resulttext').innerHTML = "You WON !"

        scorewin += 1;
    }
    else {
        document.querySelector('.resultimage1').innerHTML = `<div class=\"resultcont  c${computerturn}\"> </div>`
        document.querySelector('.resultimage2').innerHTML = `<div class=\"resultcont  p${playerturn}\"> </div>`
        document.querySelector('.resulttext').innerHTML = "The Match is Tie"

        scoretie += 1;
    }
    document.querySelector('.winscore').innerHTML = "Win Score:" + scorewin;
    document.querySelector('.lossscore').innerHTML = "Loose Score:" + scoreloose;
    document.querySelector('.tiescore').innerHTML = "Tie Score:" + scoretie;
}