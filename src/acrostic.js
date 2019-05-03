var letter;
var subject;
var word;
var randomNumber;
var line;

const a = ["Aardvark", "Antelope", "Abandoned", "Abyss", "Abbreviated", "Abdomen", "Abducted", "Accident", "Accountability", "Accuracy", "Acids", "Acorn", "Accent", "Amazon", "Amplified", "Amateur", "Amazing", "Ancient", "Angel", "Annoyed", "Apology"];
const b = ["Bee", "Bumbling", "Building", "Ball", "Big", "Bamboo", "Bald", "Banjo", "Baguette", "Bribery", "Bricks", "Bold", "Ballet", "Ballad", "Beeswax", "Bed", "Books", "Bouquet", "Boxcar"];
const c = ["Cat", "Car", "Caffeinated", "Camels", "Canal", "Cannon", "Cargo", "Cobweb", "Clown", "Crew", "Crypt", "Cupid", "Cursed", "Calmed", "Canopy", "Charm", "Climber", "Clear", "Cliff", "Closet"];
const d = ["Darkness", "Daily", "Debts", "Decay", "Disc", "Doughnut", "Doubt", "Duet", "Dying", "Dandelion", "Dancer", "Denim", "Deserted", "Dessert", "Devoured", "Ducks", "Dog", "Duffel", "Dream"];
const e = ["Early", "Eaten", "Egg", "Elder", "Eagle", "Erased", "Every", "Expired", "Earbuds", "Edible", "Emerging", "Energetic", "Existential", "Eyeball", "Eastern", "Economy", "Ectoplasm", "Embassy"];
const f = ["Favor", "Fairy", "Fearful", "Fences", "Fancy", "Flame", "Fudge", "Fake", "Feasible", "Fisherman", "Firm", "Floating", "Flowers", "Flute", "Flying", "Footprint", "Fussy"];
const g = ["Gallon", "Gravity", "Graduate", "Glare", "Growing", "Governor", "Great", "Glove", "Glue", "Godly", "Ghost", "Gesture", "Garbage", "Guitar", "Genuine", "Guard", "Gloomy", "Galaxy", "Garlic"];
const h = ["Honorary", "Heavy", "Habitat", "Health", "Hierarchy", "Haircut", "Horoscope", "Hero", "Helicopter", "Hypnotized", "Hurtful", "Hardware", "Helmet", "Hallway", "Huge", "Humorous", "Hope", "Hotdog"];
const i = ["Important", "Innovation", "Ideology", "Infinite", "Incredible", "Inspiration", "Instinct", "Improvement", "Imagery", "Instrument", "Industrial", "Icy", "Investigation", "Irony", "Island"];
const j = ["Jail", "Jester", "Jaw", "Job", "Journal", "Jumping", "Judgment", "Jealous", "Jungle", "Justice", "Junior", "Joystick", "Jacket", "Jewel", "Joke"];
const k = ["Kicking", "Knowledge", "Key", "Knee", "Kitchen", "Knitting", "King", "Kneeling"];
const l = ["Landowner", "Loose", "Lamb", "Location", "Lifestyle", "Leader", "Lawyer", "License", "Laundry", "Literature", "Leftovers", "Lemon", "Loud", "Lengthy", "Ladder", "Lodge", "Lunch", "Loyal", "Land"];
const m = ["Monopoly", "Motorcycle", "Mixture", "Mythical", "Mysterious", "Mathematics", "Miserable", "Midnight", "Master", "Meaningful", "Muscle", "Metallic", "Medieval", "Mountain", "Museum", "Monster", "Memory"];
const n = ["Normal", "Notebook", "Nervous", "Number", "Neutral", "Northern", "Necklace", "Nuclear", "Needle", "Novel", "Noble", "Network", "Nomination", "Neighbor", "Nightmare", "Natural", "Noise", "Negative"];
const o = ["Overall", "Outline", "Opera", "Orbit", "Operation", "Obstacle", "Occupied", "Organized", "Overwhelming", "Opponent", "Owl", "Opposite", "Office", "Orange", "Observation", "Original", "Old"];
const p = ["Profound", "Precedent", "Presidential", "Punishment", "Personality", "Paper", "Professor", "Polite", "Perception", "Partnership", "Planet", "Publisher", "Paid", "Program", "Panicked"];
const q = ["Question", "Quality", "Quiet", "Quarter", "Queue", "Quaint", "Qualification", "Quotation", "Quarrel", "Queen"];
const r = ["Representative", "Replaced", "Runner", "Railroad", "Report", "Redeemed", "Rough", "Requirement", "Romantic", "Research", "Recycled", "Ruined", "Reinforcement", "Resource", "Radiation", "Rescued", "Reality"];
const s = ["Steam", "Size", "Suspected", "Sketch", "Sunday", "Sickness", "Silence", "Serious", "Sensation", "Smooth", "Situation", "Separate", "Snake", "Sequence", "Suppressed", "Specimen", "Scream", "Speaker"];
const t = ["Thinking", "Tragedy", "Thoughtful", "Tower", "Tourist", "Threatening", "Tradition", "Trait", "Taxi", "Talking", "Tired", "Temperature", "Turkey", "Tactic", "Torch", "Texture", "Truthful"];
const u = ["Unfair", "Unlawful", "Uniform", "Unity", "Unanimous", "Unique", "Urgency", "Unfortunate", "Umbrella", "Update", "User", "Understanding", "Unpleasant", "Uncertain"];
const v = ["Vision", "Vain", "Visual", "Vacuum", "Virus", "Vegetarian", "Vague", "Valid", "Violation", "Velvet", "Vehicle", "Visible", "Vegetation", "Volume", "Verdict", "Voice", "Villain", "Voyage"];
const w = ["Worn", "Wilderness", "Wage", "Waist", "Willpower", "Woman", "Whisper", "Welcoming", "Wardrobe", "Weakness", "Wolf", "Worry", "Winter", "Wrestler", "Walking", "Waiter", "Withdrawal", "Witness", "Water"];
const x = ["X-ray", "Xylophone"];
const y = ["Year", "Youth", "Young", "Yard", "Yearning", "Yam", "Yak", "Yesterday", "Yardstick", "Yacht", "Yolk", "Yearbook", "Yummy", "Yourself", "Yielding", "Yogurt", "Yellow"];
const z = ["Zero", "Zone", "Zebra", "Zipper", "Zombie", "Zeugma"];

function generateAcrostic(){
    subject = document.getElementById("subjectInput").value;
    lines = document.getElementsByClassName("line");

    for(let i = 0; i < lines.length; i++){
        lines[i].innerHTML = "";
    }

    for(let i = 0; i < subject.length; i++){
        letter = subject.slice(i, i + 1).toLowerCase();
        checkLetter();
        lines[i].innerHTML = word;
    }
}

function checkLetter(){
    if(letter == 'a'){
        word = getA();
    }
    if(letter == 'b'){
        word = getB();
    }
    if(letter == 'c'){
        word = getC();
    }
    if(letter == 'd'){
        word = getD();
    }
    if(letter == 'e'){
        word = getE();
    }
    if(letter == 'f'){
        word = getF();
    }
    if(letter == 'g'){
        word = getG();
    }
    if(letter == 'h'){
        word = getH();
    }
    if(letter == 'i'){
        word = getI();
    }
    if(letter == 'j'){
        word = getJ();
    }
    if(letter == 'k'){
        word = getK();
    }
    if(letter == 'l'){
        word = getL();
    }
    if(letter == 'm'){
        word = getM();
    }
    if(letter == 'n'){
        word = getN();
    }
    if(letter == 'o'){
        word = getO();
    }
    if(letter == 'p'){
        word = getP();
    }
    if(letter == 'q'){
        word = getQ();
    }
    if(letter == 'r'){
        word = getR();
    }
    if(letter == 's'){
        word = getS();
    }
    if(letter == 't'){
        word = getT();
    }
    if(letter == 'u'){
        word = getU();
    }
    if(letter == 'v'){
        word = getV();
    }
    if(letter == 'w'){
        word = getW();
    }
    if(letter == 'x'){
        word = getX();
    }
    if(letter == 'y'){
        word = getY();
    }
    if(letter == 'z'){
        word = getZ();
    }
    if(letter == ' '){
        word = "<br/>"
    }
}

function getA(){
    randomNumber = Math.floor(Math.random() * a.length);

    return a[randomNumber];
}
function getB(){
    randomNumber = Math.floor(Math.random() * b.length);

    return b[randomNumber];
}
function getC(){
    randomNumber = Math.floor(Math.random() * c.length);

    return c[randomNumber];
}
function getD(){
    randomNumber = Math.floor(Math.random() * d.length);

    return d[randomNumber];
}
function getE(){
    randomNumber = Math.floor(Math.random() * e.length);

    return e[randomNumber];
}
function getF(){
    randomNumber = Math.floor(Math.random() * f.length);

    return f[randomNumber];
}
function getG(){
    randomNumber = Math.floor(Math.random() * g.length);

    return g[randomNumber];
}
function getH(){
    randomNumber = Math.floor(Math.random() * h.length);

    return h[randomNumber];
}
function getI(){
    randomNumber = Math.floor(Math.random() * i.length);

    return i[randomNumber];
}
function getJ(){
    randomNumber = Math.floor(Math.random() * j.length);

    return j[randomNumber];
}
function getK(){
    randomNumber = Math.floor(Math.random() * k.length);

    return k[randomNumber];
}
function getL(){
    randomNumber = Math.floor(Math.random() * l.length);

    return l[randomNumber];
}
function getM(){
    randomNumber = Math.floor(Math.random() * m.length);

    return m[randomNumber];
}
function getN(){
    randomNumber = Math.floor(Math.random() * n.length);

    return n[randomNumber];
}
function getO(){
    randomNumber = Math.floor(Math.random() * o.length);

    return o[randomNumber];
}
function getP(){
    randomNumber = Math.floor(Math.random() * p.length);

    return p[randomNumber];
}
function getQ(){
    randomNumber = Math.floor(Math.random() * q.length);

    return q[randomNumber];
}
function getR(){
    randomNumber = Math.floor(Math.random() * r.length);

    return r[randomNumber];
}
function getS(){
    randomNumber = Math.floor(Math.random() * s.length);

    return s[randomNumber];
}
function getT(){
    randomNumber = Math.floor(Math.random() * t.length);

    return t[randomNumber];
}
function getU(){
    randomNumber = Math.floor(Math.random() * u.length);

    return u[randomNumber];
}
function getV(){
    randomNumber = Math.floor(Math.random() * v.length);

    return v[randomNumber];
}
function getW(){
    randomNumber = Math.floor(Math.random() * w.length);

    return w[randomNumber];
}
function getX(){
    randomNumber = Math.floor(Math.random() * x.length);

    return x[randomNumber];
}
function getY(){
    randomNumber = Math.floor(Math.random() * y.length);

    return y[randomNumber];
}
function getZ(){
    randomNumber = Math.floor(Math.random() * z.length);

    return z[randomNumber];
}