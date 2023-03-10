const ALL_PHYSICAL_TRAITS = {
    "movement speed": ["fast", "slow"],
    "actions": ["fidgety", "calm, controlled"],
    "movement": ["legato", "staccato"],
    "posture": ["upright", "slouching"],
    "walk": ["uncontrolled", "disciplined", "limp", "stroll", "swagger"],
    "heavy": ["right", "left"],  // weight distribution
    "flexibility": ["rubbery", "rigid"],
    "led movement": ["head", "chest", "belly"],
    "arms / hands": ["open", "closed"],
    "shoulders": ["raised", "relaxed"],
    "fingers": ["spread", "joined", "intertwined"],
    "body": ["open", "closed"]
}

const ALL_VOCAL_TRAITS = {
    "accent": ["british", "french", "malayali", "punjabi", "italian", "tapori"],
    "pitch": ["low", "high"],
    "talker": ["fast", "slow"],
    "volume": ["loud", "whispery"],
    "articulation": ["excellent", "poor"],
    "jaw": ["tight", "loose"],
    "tongue": ["active", "lazy"],
}

const ALL_OBJECTS = ["belan", "laddoo", "chappal", "chidiya ghar", "diya", "pani puri",
    "local train", "chaddi", "taaveez", "auto ricksaw", "masala dabba", "dhoti", "saari",
    "kite", "chai", "samosa", "sitar", "agarbatti", "sindoor", "UPI sticker",
    "old ₹1000 note", "jhadoo", "payal", "kajal", "thali", "jalebi", "pallu", "truck art",
    "garland", "filter coffee", "lunch dabba", "haath gaadi", "5000 ki ladi", "wedding invitation",
    "hair oil", "wifi router", "potted plants", "matka", "flute", "OTP", "chatai",
    "bangles", "bus pass", "tadka pan", "topi", "tazos", "cricket gear", "bindi",
    "talwaar", "pagdi", "chyavanprash"]


const ALL_PROFESSIONS = ["software engineer", "doctor", "mechanical engineer", "bank officer",
    "LIC agent", "rickshaw driver", "tantrik", "gundaa / bhai", "ticket checker", "broker", "helper",
    "typist", "dabbawala", "ear cleaner", "call center rep", "coaching class teacher", "sherpa",
    "paanwala", "bandwala", "spot boy", "astrologer", "coolie", "shaadi matchmaker", "chaiwala",
    "street food vendor", "IAS officer", "traffic police", "MLA", "mazdoor", "snake charmer", "dancer",
    "dhaarwala", "salesman", "cricketer", "bollywood extra", "ISRO scientist", "Swiggy delivery guy",
    "influencer", "AYUSH doctor", "yoga teacher", "film projectionist", "doodhwala", "spiritual guru"]


function randomTrait(obj) {
    let keys = Object.keys(obj);  // All keys in obj
    randomKey = keys[Math.floor(Math.random() * keys.length)]
    randomValue = obj[randomKey][Math.floor(Math.random() * obj[randomKey].length)]
    return `${randomValue} ${randomKey}`;
};

function setTraits() {
    document.getElementById("physical").innerHTML = randomTrait(ALL_PHYSICAL_TRAITS);
    document.getElementById("vocal").innerHTML = randomTrait(ALL_VOCAL_TRAITS);
}

setTraits()