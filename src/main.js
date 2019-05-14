var type;
var adj;
var aString;

const noun = ["cat", "dog", "life", "love", "world", "you", "fish", "man", "king", "ice", "tree", "month", "death", "time", "bee", "air", "ant", "star", "mouth", "soul", "age", "duck", "foot", "dream", "rain", "cake", "fruit", "rat", "worm", "loaf", "clock", "spring", "north", "bear", "snail", "kitty", "puppy", "actor", "artist", "blindness", "darkness", "mistake", "nonsense", "subway", "arrow", "apple", "cabbage", "elbow", "helmet", "lobster", "monster", "napkin", "office", "dragon", "forest", "motor", "photo", "thunder", "bagel", "climate", "cocoa", "decay", "flavor", "hero", "odor", "razor", "target", "regret", "turkey", "curtain", "ticket", "goodbye", "orange", "umbrella", "candlestick", "family", "banana", "happiness", "animal", "adventure", "energy", "history", "holiday", "memory", "media", "pollution", "radio", "melody", "mercury", "library", "oxygen", "mystery", "halloween", "skeleton", "computer", "gravity", "solution", "government", "anything", "accident", "beginning", "boulevard", "punishment", "hydrogen", "confusion", "amusement", "afterthought"];
const adjective = ["green", "big", "small", "ill", "long", "mad", "bored", "wise", "huge", "quick", "red", "odd", "rich", "shy", "brave", "calm", "kind", "cold", "warm", "rough", "loud", "swift", "light", "weak", "cheap", "young", "short", "cute", "quaint", "smart", "bad", "cruel", "smooth", "foolish", "peaceful", "rainy", "common", "secret", "broken", "evil", "joyful", "simple", "better", "nuclear", "hungry", "solid", "thirsty", "awkward", "worthless", "heavy", "liquid", "fancy", "nervous", "honest", "eager", "pretend", "solo", "purple", "thoughtful", "lucky", "spiky", "grouchy", "icky", "naive", "sassy", "steady", "disturbed", "faithful", "slimy", "legal", "dapper", "empty", "moldy", "important", "dangerous", "musical", "innocent", "serious", "curious", "difficult", "radical", "excited", "generous", "powerful", "colorful", "infinite", "glorious", "edible", "ultimate", "attractive", "effortless", "aggressive", "athletic", "determined", "united", "qualified", "radical", "average"];

function test(){
    document.getElementById("poetryIs").innerHTML = aTest(1) + " " + getNoun() + ".\"";
}

function getNoun(){
    randomNumber = Math.floor(Math.random() * noun.length);

    return noun[randomNumber];
}

function getAdjective(){
    randomNumber = Math.floor(Math.random() * adjective.length);

    return adjective[randomNumber];
}

function aTest(type){
    if(type == 1){
        adj = getAdjective();

        if(adj.charAt(0) == 'a' || adj.charAt(0) == 'e' || adj.charAt(0) == 'i' || adj.charAt(0) == 'o' || adj.charAt(0) == 'u' || adj == "honest"){
            aString = "an " + adj;
        }
        else{
            aString = "a " + adj;
        }
        return aString;
    }
}