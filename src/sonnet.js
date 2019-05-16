var type;
var title;
var randomNumber;
var author;
var lines;
var line;
var letter;
var syllables;
var rhyme;
var firstWord;
var currentRhyme;

var A, B, C, D, E, F, G;

var rhyme1 = [];
var rhyme2 = [];
var rhyme3 = [];
var rhyme4 = [];
var rhyme5 = [];
var rhyme6 = [];
var rhyme7 = [];

var rhyme8 = [];
var rhyme9 = [];
var rhyme10 = [];
var rhyme11 = [];
var rhyme12 = [];
var rhyme13 = [];
var rhyme14 = [];

var oneSyllableRhymeSets = [];
var twoSyllableRhymeSets = [];

const noun = ["cat", "dog", "life", "love", "world", "you", "fish", "man", "king", "ice", "tree", "month", "death", "time", "bee", "air", "ant", "star", "mouth", "soul", "age", "duck", "foot", "dream", "rain", "cake", "fruit", "rat", "worm", "loaf", "clock", "spring", "north", "bear", "snail", "kitty", "puppy", "actor", "artist", "blindness", "darkness", "mistake", "nonsense", "subway", "arrow", "apple", "cabbage", "elbow", "helmet", "lobster", "monster", "napkin", "office", "dragon", "forest", "motor", "photo", "thunder", "bagel", "climate", "cocoa", "decay", "flavor", "hero", "odor", "razor", "target", "regret", "turkey", "curtain", "ticket", "goodbye", "orange", "umbrella", "candlestick", "family", "banana", "happiness", "animal", "adventure", "energy", "history", "holiday", "memory", "media", "pollution", "radio", "melody", "mercury", "library", "oxygen", "mystery", "halloween", "skeleton", "computer", "gravity", "solution", "government", "anything", "accident", "beginning", "boulevard", "punishment", "hydrogen", "confusion", "amusement", "afterthought"];
const adjective = ["green", "big", "small", "ill", "long", "mad", "bored", "wise", "huge", "quick", "red", "odd", "rich", "shy", "brave", "calm", "kind", "cold", "warm", "rough", "loud", "swift", "light", "weak", "cheap", "young", "short", "cute", "quaint", "smart", "bad", "cruel", "smooth", "foolish", "peaceful", "rainy", "common", "secret", "broken", "evil", "joyful", "simple", "better", "nuclear", "hungry", "solid", "thirsty", "awkward", "worthless", "heavy", "liquid", "fancy", "nervous", "honest", "eager", "pretend", "solo", "purple", "thoughtful", "lucky", "spiky", "grouchy", "icky", "naive", "sassy", "steady", "disturbed", "faithful", "slimy", "legal", "dapper", "empty", "moldy", "important", "dangerous", "musical", "innocent", "serious", "curious", "difficult", "radical", "excited", "generous", "powerful", "colorful", "infinite", "glorious", "edible", "ultimate", "attractive", "effortless", "aggressive", "athletic", "determined", "united", "qualified", "radical", "average"];

const firstName = ["Jacob", "William", "Michael", "Alexander", "James", "Daniel", "John", "Robert", "Joseph", "George", "Charles", "Edward", "Frank", "Walter", "Isabella", "Emily", "Charlotte", "Mary", "Helen", "Dorothy", "Margaret", "Ruth", "Mildred", "Elizabeth", "Marie"];
const lastName = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Anderson", "Jackson", "Harris", "Martin", "Thompson", "Robinson"];

const oneSyllableNoun = ["cat", "dog", "life", "love", "world", "fish", "man", "king", "ice", "tree", "month", "death", "time", "bee", "air", "ant", "star", "mouth", "soul", "age", "duck", "foot", "dream", "rain", "cake", "fruit", "rat", "worm", "loaf", "clock", "spring", "north", "bear", "snail"];
const oneSyllableVerb = ["is", "does", "eats", "hits", "hates", "fears", "faces", "plants", "bans", "puts", "moves", "gifts", "frees", "knows", "cooks", "forms", "gains", "guards", "calls", "stings", "beats", "bursts", "thrusts", "paints", "builds", "takes", "chokes", "joins", "licks", "slays", "drinks"];
const oneSyllableAdjective = ["green", "big", "small", "ill", "long", "mad", "bored", "wise", "huge", "quick", "red", "odd", "rich", "shy", "brave", "calm", "kind", "cold", "warm", "rough", "loud", "swift", "light", "weak", "cheap", "young", "short", "cute", "quaint", "smart", "bad", "cruel", "smooth"];
const twoSyllableNoun = ["kitty", "puppy", "actor", "artist", "blindness", "darkness", "mistake", "nonsense", "subway", "arrow", "apple", "cabbage", "elbow", "helmet", "lobster", "monster", "napkin", "office", "dragon", "forest", "motor", "photo", "thunder", "bagel", "climate", "cocoa", "decay", "flavor", "hero", "odor", "razor", "target", "regret", "turkey", "curtain", "ticket", "goodbye", "orange"];
const twoSyllableVerb = ["forgets", "collects", "elects", "prevents", "survives", "explains", "maintains", "remains", "perfects", "donates", "changes", "bullies", "values", "measures", "promises", "repays", "completes", "channels", "copies", "limits", "presents", "regards", "explores", "omits", "misleads", "forces", "obeys", "reports", "worships", "repairs", "captures", "attacks", "observes", "favors"];
const twoSyllableAdjective = ["foolish", "peaceful", "rainy", "common", "secret", "broken", "evil", "joyful", "simple", "better", "nuclear", "hungry", "solid", "thirsty", "awkward", "worthless", "heavy", "liquid", "fancy", "nervous", "honest", "eager", "pretend", "solo", "purple", "thoughtful", "lucky", "spiky", "grouchy", "icky", "naive", "sassy", "steady", "disturbed", "faithful", "slimy", "legal", "dapper", "empty", "moldy"];
const threeSyllableNoun = ["umbrella", "candlestick", "family", "banana", "happiness", "animal", "adventure", "energy", "history", "holiday", "memory", "media", "pollution", "radio", "melody", "mercury", "library", "oxygen", "mystery", "halloween", "skeleton", "computer", "gravity", "solution", "government", "anything", "accident", "beginning", "boulevard", "punishment", "hydrogen", "confusion", "amusement", "afterthought"];
const threeSyllableVerb = ["celebrates", "remembers", "avenges", "exchanges", "understands", "recycles", "discovers", "compliments", "suffocates", "educates", "abandons", "encounters", "duplicates", "witnesses", "dominates", "continues", "empowers", "benefits", "aggravates", "terrifies", "compliments", "induces", "imagines", "prohibits", "increases", "retires"];
const threeSyllableAdjective = ["important", "dangerous", "musical", "innocent", "serious", "curious", "difficult", "radical", "excited", "generous", "powerful", "colorful", "infinite", "glorious", "edible", "ultimate", "attractive", "effortless", "aggressive", "athletic", "determined", "united", "qualified", "radical", "average"];

function generateSonnet(){
    type = document.getElementById("sonnetType").value;

    generateTitle();
    generateAuthor();

    if(type == "Shakespearean"){
        generateShakespearean();
    }
    else if(type == "Petrarchan"){
        generatePetrarchan();
    }
}

function generateShakespearean(){
    setDefaults();

    lines = document.getElementsByClassName("lines");

    for(let i = 0; i < 14; i++){
        if(i == 0 || i == 2){
            currentRhyme = 'A';
        }
        else if(i == 1 || i == 3){
            currentRhyme = 'B';
        }
        else if(i == 4 || i == 6){
            currentRhyme = 'C';
        }
        else if(i == 5 || i == 7){
            currentRhyme = 'D';
        }
        else if(i == 8 || i == 10){
            currentRhyme = 'E';
        }
        else if(i == 9 || i == 11){
            currentRhyme = 'F';
        }
        else{
            currentRhyme = 'G';
        }

        if(i % 4 == 0){
            syllables = Math.floor(Math.random() * 2) + 1;
        }

        randomNumber = Math.floor(Math.random() * 4) + 1;

        if(syllables == 1){
            if(randomNumber == 1){
                line = "What if " + getOneSyllable(1) + " " + getTwoSyllable(2) + " the " + getThreeSyllable(3) + " " + getRhyme(currentRhyme, 1) + "?";
            }
            else if(randomNumber == 2){
                firstWord = getOneSyllable(1);
                firstWord.charAt(0).toUpperCase();
                line = firstWord + " " + getOneSyllable(2) + " my " + getOneSyllable(3) + " " + getOneSyllable(1) + ", " + getTwoSyllable(2) + " my " + getOneSyllable(3) + " " + getRhyme(currentRhyme, 1);
            }
            else if(randomNumber == 3){
                line = "I wish the " + getTwoSyllable(3) + " " + getTwoSyllable(1) + " was my " + getRhyme(currentRhyme, 1);
            }
            else if(randomNumber == 4){
                firstWord = getTwoSyllable(1);
                firstWord.charAt(0).toUpperCase();
                line = firstWord + " " + getThreeSyllable(2) + ", " + getThreeSyllable(1) + " " + getOneSyllable(2) + " the " + getRhyme(currentRhyme, 1);
            }
        }

        if(syllables == 2){
            if(randomNumber == 1){
                line = "The " + getTwoSyllable(3) + " " + getThreeSyllable(1) + " " + getTwoSyllable(2) + " " + getRhyme(currentRhyme, 2);
            }
            else if(randomNumber == 2){
                firstWord = getThreeSyllable(3);
                firstWord.charAt(0).toUpperCase();
                line = firstWord + " " + getOneSyllable(1) + " is like " + getTwoSyllable(3) + " " + getRhyme(currentRhyme, 2);
            }
            else if(randomNumber == 3){
                line = "Watch as the " + getOneSyllable(3) + " " + getOneSyllable(1) + " " + getTwoSyllable(2) + " the " + getRhyme(currentRhyme, 2);
            }
            else if(randomNumber == 4){
                line = "Why must " + getThreeSyllable(1) + " exist: for " + getRhyme(currentRhyme, 2) + "?";
            }
        }

        lines[i].innerHTML = line;
    }
    setDefaults();
}

function generatePetrarchan(){
    
}

function getRhyme(lett){
    letter = lett;

    if(syllables == 1){
        randomNumber = Math.floor(Math.random() * oneSyllableRhymeSets.length);

        if(letter == 'A'){
            if(A.length == 0){
                A = oneSyllableRhymeSets[randomNumber];
                oneSyllableRhymeSets.splice(randomNumber, 1);

                randomNumber = Math.floor(Math.random() * A.length);
                rhyme = A[randomNumber];
                A.splice(randomNumber, 1);
                return rhyme;
            }
            else{
                randomNumber = Math.floor(Math.random() * A.length);
                rhyme = A[randomNumber];
                A.splice(randomNumber, 1);
                return rhyme;
            }
        }
        if(letter == 'B'){
            if(B.length == 0){
                B = oneSyllableRhymeSets[randomNumber];
                oneSyllableRhymeSets.splice(randomNumber, 1);

                randomNumber = Math.floor(Math.random() * B.length);
                rhyme = B[randomNumber];
                B.splice(randomNumber, 1);
                return rhyme;
            }
            else{
                randomNumber = Math.floor(Math.random() * B.length);
                rhyme = B[randomNumber];
                B.splice(randomNumber, 1);
                return rhyme;
            }
        }
        if(letter == 'C'){
            if(C.length == 0){
                C = oneSyllableRhymeSets[randomNumber];
                oneSyllableRhymeSets.splice(randomNumber, 1);

                randomNumber = Math.floor(Math.random() * C.length);
                rhyme = C[randomNumber];
                C.splice(randomNumber, 1);
                return rhyme;
            }
            else{
                randomNumber = Math.floor(Math.random() * C.length);
                rhyme = C[randomNumber];
                C.splice(randomNumber, 1);
                return rhyme;
            }
        }
        if(letter == 'D'){
            if(D.length == 0){
                D = oneSyllableRhymeSets[randomNumber];
                oneSyllableRhymeSets.splice(randomNumber, 1);

                randomNumber = Math.floor(Math.random() * D.length);
                rhyme = D[randomNumber];
                D.splice(randomNumber, 1);
                return rhyme;
            }
            else{
                randomNumber = Math.floor(Math.random() * D.length);
                rhyme = D[randomNumber];
                D.splice(randomNumber, 1);
                return rhyme;
            }
        }
        if(letter == 'E'){
            if(E.length == 0){
                E = oneSyllableRhymeSets[randomNumber];
                oneSyllableRhymeSets.splice(randomNumber, 1);

                randomNumber = Math.floor(Math.random() * E.length);
                rhyme = E[randomNumber];
                E.splice(randomNumber, 1);
                return rhyme;
            }
            else{
                randomNumber = Math.floor(Math.random() * E.length);
                rhyme = E[randomNumber];
                E.splice(randomNumber, 1);
                return rhyme;
            }
        }
        if(letter == 'F'){
            if(F.length == 0){
                F = oneSyllableRhymeSets[randomNumber];
                oneSyllableRhymeSets.splice(randomNumber, 1);

                randomNumber = Math.floor(Math.random() * F.length);
                rhyme = F[randomNumber];
                F.splice(randomNumber, 1);
                return rhyme;
            }
            else{
                randomNumber = Math.floor(Math.random() * F.length);
                rhyme = F[randomNumber];
                F.splice(randomNumber, 1);
                return rhyme;
            }
        }
        if(letter == 'G'){
            if(G.length == 0){
                G = oneSyllableRhymeSets[randomNumber];
                oneSyllableRhymeSets.splice(randomNumber, 1);

                randomNumber = Math.floor(Math.random() * G.length);
                rhyme = G[randomNumber];
                G.splice(randomNumber, 1);
                return rhyme;
            }
            else{
                randomNumber = Math.floor(Math.random() * G.length);
                rhyme = G[randomNumber];
                G.splice(randomNumber, 1);
                return rhyme;
            }
        }
    }
    else if(syllables == 2){
        randomNumber = Math.floor(Math.random() * twoSyllableRhymeSets.length);

        if(letter == 'A'){
            if(A.length == 0){
                A = twoSyllableRhymeSets[randomNumber];
                twoSyllableRhymeSets.splice(randomNumber, 1);

                randomNumber = Math.floor(Math.random() * A.length);
                rhyme = A[randomNumber];
                A.splice(randomNumber, 1);
                return rhyme;
            }
            else{
                randomNumber = Math.floor(Math.random() * A.length);
                rhyme = A[randomNumber];
                A.splice(randomNumber, 1);
                return rhyme;
            }
        }
        if(letter == 'B'){
            if(B.length == 0){
                B = twoSyllableRhymeSets[randomNumber];
                twoSyllableRhymeSets.splice(randomNumber, 1);

                randomNumber = Math.floor(Math.random() * B.length);
                rhyme = B[randomNumber];
                B.splice(randomNumber, 1);
                return rhyme;
            }
            else{
                randomNumber = Math.floor(Math.random() * B.length);
                rhyme = B[randomNumber];
                B.splice(randomNumber, 1);
                return rhyme;
            }
        }
        if(letter == 'C'){
            if(C.length == 0){
                C = twoSyllableRhymeSets[randomNumber];
                twoSyllableRhymeSets.splice(randomNumber, 1);

                randomNumber = Math.floor(Math.random() * C.length);
                rhyme = C[randomNumber];
                C.splice(randomNumber, 1);
                return rhyme;
            }
            else{
                randomNumber = Math.floor(Math.random() * C.length);
                rhyme = C[randomNumber];
                C.splice(randomNumber, 1);
                return rhyme;
            }
        }
        if(letter == 'D'){
            if(D.length == 0){
                D = twoSyllableRhymeSets[randomNumber];
                twoSyllableRhymeSets.splice(randomNumber, 1);

                randomNumber = Math.floor(Math.random() * D.length);
                rhyme = D[randomNumber];
                D.splice(randomNumber, 1);
                return rhyme;
            }
            else{
                randomNumber = Math.floor(Math.random() * D.length);
                rhyme = D[randomNumber];
                D.splice(randomNumber, 1);
                return rhyme;
            }
        }
        if(letter == 'E'){
            if(E.length == 0){
                E = twoSyllableRhymeSets[randomNumber];
                twoSyllableRhymeSets.splice(randomNumber, 1);

                randomNumber = Math.floor(Math.random() * E.length);
                rhyme = E[randomNumber];
                E.splice(randomNumber, 1);
                return rhyme;
            }
            else{
                randomNumber = Math.floor(Math.random() * E.length);
                rhyme = E[randomNumber];
                E.splice(randomNumber, 1);
                return rhyme;
            }
        }
        if(letter == 'F'){
            if(F.length == 0){
                F = twoSyllableRhymeSets[randomNumber];
                twoSyllableRhymeSets.splice(randomNumber, 1);

                randomNumber = Math.floor(Math.random() * F.length);
                rhyme = F[randomNumber];
                F.splice(randomNumber, 1);
                return rhyme;
            }
            else{
                randomNumber = Math.floor(Math.random() * F.length);
                rhyme = F[randomNumber];
                F.splice(randomNumber, 1);
                return rhyme;
            }
        }
        if(letter == 'G'){
            if(G.length == 0){
                G = twoSyllableRhymeSets[randomNumber];
                twoSyllableRhymeSets.splice(randomNumber, 1);

                randomNumber = Math.floor(Math.random() * G.length);
                rhyme = G[randomNumber];
                G.splice(randomNumber, 1);
                return rhyme;
            }
            else{
                randomNumber = Math.floor(Math.random() * G.length);
                rhyme = G[randomNumber];
                G.splice(randomNumber, 1);
                return rhyme;
            }
        }
    }
}

function generateTitle(){
    title = "The " + getAdjective() + " " + getNoun();
    
    document.getElementById("title").innerHTML = title;
}

function getNoun(){
    randomNumber = Math.floor(Math.random() * noun.length);

    return noun[randomNumber];
}

function getAdjective(){
    randomNumber = Math.floor(Math.random() * adjective.length);

    return adjective[randomNumber];
}

function generateAuthor(){
    author = "By " + getFirstName() + " " + getLastName();

    document.getElementById("author").innerHTML = author;
}

function getFirstName(){
    randomNumber = Math.floor(Math.random() * firstName.length);

    return firstName[randomNumber];
}

function getLastName(){
    randomNumber = Math.floor(Math.random() * lastName.length);

    return lastName[randomNumber];
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

function setDefaults(){
    A = [];
    B = [];
    C = [];
    D = [];
    E = [];
    F = [];
    G = [];

    rhyme1 = ["bat", "cat", "chat", "gnat", "mat", "pat", "rat"];
    rhyme2 = ["bee", "knee", "fee", "flea", "pea", "sea", "spree"];
    rhyme3 = ["neigh", "play", "sleigh", "spray", "tray", "day"];
    rhyme4 = ["chime", "climb", "dime", "lime", "rhyme", "mime", "slime"];
    rhyme5 = ["blend", "end", "friend", "trend"];
    rhyme6 = ["dawn", "fawn", "lawn", "prawn", "pawn", "swan", "yawn"];
    rhyme7 = ["bait", "crate", "fate", "gate", "plate", "skate", "state", "weight"];

    rhyme8 = ["banshee", "birch tree", "degree", "goatee", "iced tea", "snow pea"];
    rhyme9 = ["airway", "ballet", "birthday", "blue jay", "bouquet", "buffet", "cafe", "display", "doorway", "monday", "sorbet"];
    rhyme10 = ["airplane", "birdbrain", "champagne", "domain", "fast lane", "migraine", "refrain", "terrain"];
    rhyme11 = ["accent", "ascent", "cement", "descent", "event", "indent", "percent", "segment"];
    rhyme12 = ["boyfriend", "dead end", "godsend", "weekend"];
    rhyme13 = ["cheapskate", "classmate", "debate", "estate", "floodgate", "heart rate", "home plate", "update"];
    rhyme14 = ["bloodline", "canine", "decline", "design", "feline", "goldmine"];

    oneSyllableRhymeSets = [rhyme1, rhyme2, rhyme3, rhyme4, rhyme5, rhyme6, rhyme7];
    twoSyllableRhymeSets = [rhyme8, rhyme9, rhyme10, rhyme11, rhyme12, rhyme13, rhyme14];
}