let userpoint= 0;
let pcpoint= 0;
let n_matches= 0;
let limit= 0;
const user_0= document.getElementById("user-0");
const pc_0= document.getElementById("pc-0");
const board_n= document.querySelector(".board");
const result_= document.querySelector(".result > p");
const rock= document.getElementById("r");
const paper= document.getElementById("p");
const scissors= document.getElementById("s");
const lizard= document.getElementById("l");
const spock= document.getElementById("e");
const three_= document.getElementById("three")
const five_= document.getElementById("five")
const infinity_= document.getElementById("infinity")

function get_pcchoice(){
    const choices= ["r","p","s","l","e"];
    const random_n= (Math.floor(Math.random()*4));
    return choices[random_n];
}

function transform(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    if(letter==="s") return "Scissors";
    if(letter==="l") return "Lizard";
    if(letter==="e") return "Spock";
}

function win(userchoice, pcchoice){
    userpoint++;
    user_0.innerHTML= userpoint;
    pc_0.innerHTML= pcpoint;
    result_.innerHTML= "Your "+transform(userchoice)+" beats the PC "+transform(pcchoice)+". You WIN!";
}

function lose(userchoice, pcchoice){
    pcpoint++;
    user_0.innerHTML= userpoint;
    pc_0.innerHTML= pcpoint;
    result_.innerHTML= "The PC "+transform(pcchoice)+" beats your "+transform(userchoice)+". You LOST!";
}

function draw(userchoice, pcchoice){
    user_0.innerHTML= userpoint;
    pc_0.innerHTML= pcpoint;
    result_.innerHTML= "The PC "+transform(pcchoice)+" equals your "+transform(userchoice)+". It's a DRAW!";
}

function play(userchoice){
    let mylimit = sessionStorage.getItem('mylimit');
    console.log(mylimit);
    if (n_matches < mylimit) {
    const pcchoice= get_pcchoice();
    switch (userchoice + pcchoice){
        case "rs":
        case "rl":
        case "pr":
        case "pe":
        case "sp":
        case "sl":
        case "lp":
        case "le":
        case "es":
        case "er":
            win(userchoice, pcchoice);
            n_matches++;
            break;
        case "rp":
        case "re":
        case "ps":
        case "pl":
        case "se":
        case "sr":
        case "lr":
        case "ls":
        case "ep":
        case "el":
            lose(userchoice, pcchoice);
            n_matches++;
            break;
        case "rr":
        case "pp":
        case "ss":
        case "ll":
        case "ee":
            draw(userchoice, pcchoice);
            break;
    }
    }
}

function main(){
    rock.addEventListener('click', function(){play("r");})
    paper.addEventListener('click', function(){play("p");})
    scissors.addEventListener('click', function(){play("s");})
    lizard.addEventListener('click', function(){play("l");})
    spock.addEventListener('click', function(){play("e");})
}
try {choose_matches();}
catch(err) {main();}

function choose_matches(){
    three_.addEventListener('click', function(){limit=3; sessionStorage.setItem('mylimit', limit); console.log('eh ', limit)})
    five_.addEventListener('click', function(){limit=5; sessionStorage.setItem('mylimit', limit); console.log('eh ', limit)})
    infinity_.addEventListener('click', function(){limit=9999; sessionStorage.setItem('mylimit', limit); console.log('eh infinito!', limit)})
}









