var randomNumber;
var type;
var subject;
var repeat;

const connectingWords = ["the"];
const oneSyllableNoun = ["cat", "dog", "life", "love", "world", "you", "fish", "man", "king", "ice", "tree", "month", "death", "time", "bee", "air", "ant", "star", "mouth", "soul", "age", "duck", "foot", "dream", "rain", "cake", "fruit", "rat", "worm", "loaf", "clock", "spring", "north", "bear", "snail"];
const oneSyllableVerb = ["is", "does", "eats", "hits", "hates", "fears", "faces", "plants", "bans", "puts", "moves", "gifts", "frees", "knows", "cooks", "forms", "gains", "guards", "calls", "stings", "beats", "bursts", "thrusts", "paints", "builds", "takes", "chokes", "joins", "licks", "slays", "drinks"];
const oneSyllableAdjective = ["five", "green", "big", "small", "ill", "long", "mad", "bored", "wise", "huge", "quick", "red", "odd", "rich", "shy", "brave", "calm", "kind", "cold", "warm", "rough", "loud", "swift", "light", "weak", "cheap", "young", "short", "ten", "cute", "quaint", "smart", "bad", "cruel", "smooth"];
const twoSyllableNoun = ["kitty", "puppy", "actor", "artist", "blindness", "darkness", "mistake", "nonsense", "subway", "arrow", "apple", "cabbage", "elbow", "helmet", "lobster", "monster", "napkin", "office", "dragon", "forest", "motor", "photo", "thunder", "bagel", "climate", "cocoa", "decay", "flavor", "hero", "odor", "razor", "target", "regret", "turkey", "curtain", "ticket", "goodbye", "orange"];
const twoSyllableVerb = ["forgets", "collects", "elects", "prevents", "survives", "explains", "maintains", "remains", "perfects", "donates", "changes", "bullies", "values", "balances", "measures", "promises", "repays", "completes", "channels", "copies", "limits", "presents", "regards", "explores", "omits", "misleads", "forces", "obeys", "reports", "worships", "repairs", "captures", "attacks", "observes", "favors"];
const twoSyllableAdjective = ["foolish", "peaceful", "rainy", "common", "secret", "broken", "evil", "joyful", "simple", "better", "nuclear", "hungry", "solid", "thirsty", "awkward", "worthless", "heavy", "liquid", "fancy", "nervous", "honest", "eager", "pretend", "solo", "purple", "thoughtful", "lucky", "spiky", "grouchy", "icky", "naive", "sassy", "steady", "disturbed", "faithful", "slimy", "legal", "dapper", "empty", "moldy"];
const threeSyllableNoun = ["umbrella", "candlestick", "family", "banana", "happiness", "animal", "adventure", "energy", "history", "holiday", "memory", "media", "pollution", "radio", "melody", "mercury", "library", "oxygen", "mystery", "halloween", "skeleton", "computer", "gravity", "solution", "government", "anything", "accident", "beginning", "boulevard", "punishment", "hydrogen", "confusion", "amusement", "afterthought"];
const threeSyllableVerb = ["celebrates", "remembers", "avenges", "exchanges", "understands", "recycles", "discovers", "compliments", "suffocates", "educates", "abandons", "encounters", "duplicates", "witnesses", "dominates", "continues", "empowers", "benefits", "aggravates", "terrifies", "compliments", "induces", "imagines", "prohibits", "increases", "retires"];
const threeSyllableAdjective = ["important", "dangerous", "musical", "innocent", "serious", "curious", "difficult", "radical", "excited", "generous", "powerful", "colorful", "infinite", "glorious", "edible", "ultimate", "attractive", "effortless", "aggressive", "athletic", "determined", "united", "qualified", "radical", "average"];

function generateHaiku(){
    subject = document.getElementById("subjectInput").value;
    repeat = document.getElementById("repeatInput").value;

    for(let i = 0; i < repeat; i++){
        document.getElementsByClassName("line1")[i].innerHTML = fiveSyllables();
        document.getElementsByClassName("line2")[i].innerHTML = sevenSyllables();
        document.getElementsByClassName("line3")[i].innerHTML = fiveSyllables();

        document.getElementsByClassName("line1")[i].style = "display: block";
        document.getElementsByClassName("line2")[i].style = "display: block";
        document.getElementsByClassName("line3")[i].style = "display: block";
    }
}

function getConnectingWord(){
    return connectingWords[0];
}

function getOneSyllable(type){
    if (type === 1){
        randomNumber = Math.floor(Math.random() * oneSyllableNoun.length);
        return oneSyllableNoun[randomNumber];
    }
    else if(type === 2){
        randomNumber = Math.floor(Math.random() * oneSyllableVerb.length);
        return oneSyllableVerb[randomNumber];
    }
    else{
        randomNumber = Math.floor(Math.random() * oneSyllableAdjective.length);
        return oneSyllableAdjective[randomNumber];
    }
}

function getTwoSyllable(type){
    if (type === 1){
        randomNumber = Math.floor(Math.random() * twoSyllableNoun.length);
        return twoSyllableNoun[randomNumber];
    }
    else if(type === 2){
        randomNumber = Math.floor(Math.random() * twoSyllableVerb.length);
        return twoSyllableVerb[randomNumber];
    }
    else{
        randomNumber = Math.floor(Math.random() * twoSyllableAdjective.length);
        return twoSyllableAdjective[randomNumber];
    }
}

function getThreeSyllable(type){
    if (type === 1){
        randomNumber = Math.floor(Math.random() * threeSyllableNoun.length);
        return threeSyllableNoun[randomNumber];
    }
    else if(type === 2){
        randomNumber = Math.floor(Math.random() * threeSyllableVerb.length);
        return threeSyllableVerb[randomNumber];
    }
    else{
        randomNumber = Math.floor(Math.random() * threeSyllableAdjective.length);
        return threeSyllableAdjective[randomNumber];
    }
}

function fiveSyllables(){
    randomNumber = Math.floor((Math.random() * 5) + 1);

    if(randomNumber === 1){
        return subject + " " + getOneSyllable(2) + " " + getConnectingWord() + " " + getOneSyllable(3) + " " + getOneSyllable(1);
    } 
    else if(randomNumber === 2){
        return subject + " " + getOneSyllable(2) + " " + getTwoSyllable(3) + " " + getOneSyllable(1);
    }
    else if(randomNumber === 3){
        return getConnectingWord() + " " + getTwoSyllable(3) + " " + subject + " " + getOneSyllable(2);
    }
    else if(randomNumber === 4){
        return subject + " " + getConnectingWord() + " " + getThreeSyllable(3);
    }
    else{
        return subject + " " + getTwoSyllable(2) + ", " + getTwoSyllable(3);
    }
}

function sevenSyllables(){
    randomNumber = Math.floor((Math.random() * 5) + 1);

    if(randomNumber == 1){
        return getConnectingWord() + " " + getOneSyllable(3) + " " + getOneSyllable(1) + " " + getThreeSyllable(2) + " " + getOneSyllable(1);
    }
    else if(randomNumber == 2){
        return getOneSyllable(3) + " " + getTwoSyllable(1) + " " + getOneSyllable(2) + " " + getThreeSyllable(1);
    }
    else if(randomNumber == 3){
        return getTwoSyllable(1) + " " + getOneSyllable(2) + " " + getConnectingWord() + " " + getTwoSyllable(3) + " " + getOneSyllable(1);
    }
    else if(randomNumber == 4){
        return getThreeSyllable(1) + " " + getOneSyllable(2) + " " + getThreeSyllable(1);
    }
    else{
        return getThreeSyllable(3) + " " + getOneSyllable(1) + " " + getTwoSyllable(2) + " " + getOneSyllable(1);
    }
}