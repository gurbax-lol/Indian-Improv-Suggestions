const ALL_LOCATIONS = ["shaadi mandap", "rickshaw stand", "passport office", "cricket stadium",
    "saarvajanik wedding", "inter-state train", "meditation retreat"]

const ALL_ACTIVITIES = ["doodhwala - customer",]

const ALL_PROFESSIONS = ["software engineer", "doctor", "mechanical engineer", "bank officer",
    "LIC agent", "rickshaw driver", "tantrik", "gundaa / bhai", "ticket checker", "broker", "helper",
    "typist", "dabbawala", "ear cleaner", "call center rep", "coaching class teacher", "sherpa",
    "paanwala", "bandwala", "spot boy", "astrologer", "coolie", "shaadi matchmaker", "chaiwala",
    "street food vendor", "IAS officer", "traffic police", "MLA", "mazdoor", "snake charmer", "dancer",
    "dhaarwala", "salesman", "cricketer", "bollywood extra", "ISRO scientist", "Swiggy delivery guy",
    "influencer", "AYUSH doctor", "yoga teacher", "film projectionist", "doodhwala", "spiritual guru"]


const ALL_OBJECTS = ["belan", "laddoo", "chappal", "chidiya ghar", "diya", "pani puri",
    "local train", "chaddi", "taaveez", "auto ricksaw", "masala dabba", "dhoti", "saari",
    "kite", "chai", "samosa", "sitar", "agarbatti", "sindoor", "UPI sticker",
    "old ₹1000 note", "jhadoo", "payal", "kajal", "thali", "jalebi", "pallu", "truck art",
    "garland", "filter coffee", "lunch dabba", "haath gaadi", "5000 ki ladi", "wedding invitation",
    "hair oil", "wifi router", "potted plants", "matka", "flute", "OTP", "chatai",
    "bangles", "bus pass", "tadka pan", "topi", "tazos", "cricket gear", "bindi",
    "talwaar", "pagdi", "chyavanprash"]

const ALL_LINES = ["doodhwala - customer",]

const ALL_OCCASIONS = ["shaadi", "graduation", "Canadian PR", "arranged marriage meeting",]

let intent = "object"

function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}


function setLocation() {
    document.querySelectorAll("span.category")[0].innerHTML = "location"
    document.querySelectorAll("span.category")[1].innerHTML = "Location"
    document.getElementById("suggestion").innerHTML = randomItem(ALL_LOCATIONS)
}

function setActivity() {
    document.querySelectorAll("span.category")[0].innerHTML = "activity"
    document.querySelectorAll("span.category")[1].innerHTML = "Activity"
    document.getElementById("suggestion").innerHTML = randomItem(ALL_ACTIVITIES)
}

function setProfession() {
    document.querySelectorAll("span.category")[0].innerHTML = "profession"
    document.querySelectorAll("span.category")[1].innerHTML = "Profession"
    document.getElementById("suggestion").innerHTML = randomItem(ALL_PROFESSIONS)
}
function setObject() {
    document.querySelectorAll("span.category")[0].innerHTML = "object"
    document.querySelectorAll("span.category")[1].innerHTML = "Object"
    document.getElementById("suggestion").innerHTML = randomItem(ALL_OBJECTS)
}

function setLine() {
    document.querySelectorAll("span.category")[0].innerHTML = "line"
    document.querySelectorAll("span.category")[1].innerHTML = "Line"
    document.getElementById("suggestion").innerHTML = randomItem(ALL_LINES)
}

function setOccasion() {
    document.querySelectorAll("span.category")[0].innerHTML = "occasion"
    document.querySelectorAll("span.category")[1].innerHTML = "Occasion"
    document.getElementById("suggestion").innerHTML = randomItem(ALL_OCCASIONS)
}

function changeIntent(str) {
    intent = str
    executeIntent()
}

function executeIntent() {
    if (intent == "location") {
        setLocation()
    } else if (intent == "activity") {
        setActivity()
    } else if (intent == "profession") {
        setProfession()
    } else if (intent == "object") {
        setObject()
    } else if (intent == "line") {
        setLine()
    } else if (intent == "occasion") {
        setOccasion()
    }
}

executeIntent()