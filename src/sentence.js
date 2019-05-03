var word;
var sentenceNumber;
var sentence;

const noun = ["cat", "dog", "life", "love", "world", "you", "fish", "man", "king", "ice", "tree", "month", "death", "time", "bee", "air", "ant", "star", "mouth", "soul", "age", "duck", "foot", "dream", "rain", "cake", "fruit", "rat", "worm", "loaf", "clock", "spring", "north", "bear", "snail", "kitty", "puppy", "actor", "artist", "blindness", "darkness", "mistake", "nonsense", "subway", "arrow", "apple", "cabbage", "elbow", "helmet", "lobster", "monster", "napkin", "office", "dragon", "forest", "motor", "photo", "thunder", "bagel", "climate", "cocoa", "decay", "flavor", "hero", "odor", "razor", "target", "regret", "turkey", "curtain", "ticket", "goodbye", "orange", "umbrella", "candlestick", "family", "banana", "happiness", "animal", "adventure", "energy", "history", "holiday", "memory", "media", "pollution", "radio", "melody", "mercury", "library", "oxygen", "mystery", "halloween", "skeleton", "computer", "gravity", "solution", "government", "anything", "accident", "beginning", "boulevard", "punishment", "hydrogen", "confusion", "amusement", "afterthought"];
const verb = ["is", "does", "eats", "hits", "hates", "fears", "faces", "plants", "bans", "puts", "moves", "gifts", "frees", "knows", "cooks", "forms", "gains", "guards", "calls", "stings", "beats", "bursts", "thrusts", "paints", "builds", "takes", "chokes", "joins", "licks", "slays", "drinks", "forgets", "collects", "elects", "prevents", "survives", "explains", "maintains", "remains", "perfects", "donates", "changes", "bullies", "values", "balances", "measures", "promises", "repays", "completes", "channels", "copies", "limits", "presents", "regards", "explores", "omits", "misleads", "forces", "obeys", "reports", "worships", "repairs", "captures", "attacks", "observes", "favors", "celebrates", "remembers", "avenges", "exchanges", "understands", "recycles", "discovers", "compliments", "suffocates", "educates", "abandons", "encounters", "duplicates", "witnesses", "dominates", "continues", "empowers", "benefits", "aggravates", "terrifies", "compliments", "induces", "imagines", "prohibits", "increases", "retires"];
const action = ["jumps", "dances", "sleeps", "leaves", "codes", "listens", "screams", "whips", "settles", "explodes", "attends", "meddles", "exists", "disagrees", "breathes", "sparkles", "shops", "skis", "increases", "communicates", "sighs", "sails", "cheers", "offends", "hums", "lies", "apologizes", "applauds", "expands", "runs", "walks", "stays", "agrees"];
const adjective = ["green", "big", "small", "ill", "long", "mad", "bored", "wise", "huge", "quick", "red", "odd", "rich", "shy", "brave", "calm", "kind", "cold", "warm", "rough", "loud", "swift", "light", "weak", "cheap", "young", "short", "cute", "quaint", "smart", "bad", "cruel", "smooth", "foolish", "peaceful", "rainy", "common", "secret", "broken", "evil", "joyful", "simple", "better", "nuclear", "hungry", "solid", "thirsty", "awkward", "worthless", "heavy", "liquid", "fancy", "nervous", "honest", "eager", "pretend", "solo", "purple", "thoughtful", "lucky", "spiky", "grouchy", "icky", "naive", "sassy", "steady", "disturbed", "faithful", "slimy", "legal", "dapper", "empty", "moldy", "important", "dangerous", "musical", "innocent", "serious", "curious", "difficult", "radical", "excited", "generous", "powerful", "colorful", "infinite", "glorious", "edible", "ultimate", "attractive", "effortless", "aggressive", "athletic", "determined", "united", "qualified", "radical", "average"];

function generateSentence(){
    word = document.getElementById("wordInput").value;
    sentenceNumber = document.getElementById("sentenceNumberInput").value;

    for(let i = 0; i < sentenceNumber; i++){
        randomNumber = Math.floor((Math.random() * 5) + 1);

        if(randomNumber == 1){
            sentence = "The " + getAdjective() + " " + word + " " + getVerb() + " the " + getNoun() + " because it " + getAction() + ".";
        }
        else if(randomNumber == 2){
            sentence = "Have you noticed that the " + word + " " + getVerb() + " the " + getAdjective() + " " + getNoun() + " every day?";
        }
        else if(randomNumber == 3){
            sentence = "One " + getAdjective() + " " + getNoun() + " " + getVerb() + " a " + getNoun() + " while the " + word + " " + getAction() + ".";
        }
        else if(randomNumber == 4){
            sentence = "Consider the following: My " + getAdjective() + " " + word + " " + getAction() + ", but your " + getAdjective() + " " + getNoun() + " " + getAction() + ".";
        }
        else if(randomNumber == 5){
            sentence = "At school, the " + word + " always " + getAction() + ", especially when the " + getAdjective() + " " + getNoun() + " is here.";
        }
        else if(randomNumber == 6){
            sentence = "The " + word + ", a " + getAdjective() + " " + getNoun() + ", " + getAction() + " at every school dance.";
        }

        document.getElementsByClassName("sentence")[i].innerHTML = sentence;
    }
}

function getNoun(){
    randomNumber = Math.floor(Math.random() * noun.length);

    return noun[randomNumber];
}

function getVerb(){
    randomNumber = Math.floor(Math.random() * verb.length);

    return verb[randomNumber];
}

function getAction(){
    randomNumber = Math.floor(Math.random() * action.length);

    return action[randomNumber];
}

function getAdjective(){
    randomNumber = Math.floor(Math.random() * adjective.length);

    return adjective[randomNumber];
}