document.querySelector('#rock').addEventListener("click", () => {
    var x = Math.ceil(Math.random() * 3);
    if(x == 2){
        let txt = document.querySelector('.computer h4').textContent;
        let num = parseInt(txt);
        document.querySelector('.computer h4').innerHTML = num + 1;
        document.querySelector('.msgs').innerHTML = 'You lost... Paper beats Rock';
        document.querySelector('.msgs').style.backgroundColor = "red";
    }
    if(x == 3){
        let txt = document.querySelector('.user h4').textContent;
        let num = parseInt(txt);
        document.querySelector('.user h4').innerHTML = num + 1;
        document.querySelector('.msgs').innerHTML = 'You won... Rock beats Sciccors';
        document.querySelector('.msgs').style.backgroundColor = "green";
    }
    if(x == 1){
        document.querySelector('.msgs').innerHTML = 'Its a tie...';
        document.querySelector('.msgs').style.backgroundColor = "transparent";
    }
});
document.querySelector('#paper').addEventListener("click", () => {
    var x = Math.ceil(Math.random() * 3);
    if(x == 3){
        let txt = document.querySelector('.computer h4').textContent;
        let num = parseInt(txt);
        document.querySelector('.computer h4').innerHTML = num + 1;
        document.querySelector('.msgs').innerHTML = 'You lost... Scissors beats Paper';
        document.querySelector('.msgs').style.backgroundColor = "red";
    }
    if(x == 1){
        let txt = document.querySelector('.user h4').textContent;
        let num = parseInt(txt);
        document.querySelector('.user h4').innerHTML = num + 1;
        document.querySelector('.msgs').innerHTML = 'You won... Paper beats Rock';
        document.querySelector('.msgs').style.backgroundColor = "green";
    }
    if(x == 2){
        document.querySelector('.msgs').innerHTML = 'Its a tie...';
        document.querySelector('.msgs').style.backgroundColor = "transparent";
    }
});
document.querySelector('#scissor').addEventListener("click", () => {
    var x = Math.ceil(Math.random() * 3);
    if(x == 1){
        let txt = document.querySelector('.computer h4').textContent;
        let num = parseInt(txt);
        document.querySelector('.computer h4').innerHTML = num + 1;
        document.querySelector('.msgs').innerHTML = 'You lost... Rock beats Scissors';
        document.querySelector('.msgs').style.backgroundColor = "red";
    }
    if(x == 2){
        let txt = document.querySelector('.user h4').textContent;
        let num = parseInt(txt);
        document.querySelector('.user h4').innerHTML = num + 1;
        document.querySelector('.msgs').innerHTML = 'You won... Scissors beats Paper';
        document.querySelector('.msgs').style.backgroundColor = "green";
    }
    if(x == 3){
        document.querySelector('.msgs').innerHTML = 'Its a tie...';
        document.querySelector('.msgs').style.backgroundColor = "transparent";
    }
});
