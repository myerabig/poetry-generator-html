var letter;
var subject;
var word;
var randomNumber;

const a = ["Aardvark", "Antelope"];
const b = [];
const c = [];

function generateAcrostic(){
    subject = document.getElementById("subjectInput").value;

    for(i = 0; i < subject.length; i++){
        letter = subject.slice(i, i + 1).toLowerCase();

        if(letter == 'a'){
            word = getA();
        }
        document.getElementsByClassName("line")[i].innerHTML = word;
    }
}

function getA(){
    randomNumber = Math.floor(Math.random() * a.length);

    return a[randomNumber];
}