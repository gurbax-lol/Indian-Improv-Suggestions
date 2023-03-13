// const ALL_LOCATIONS = ["shaadi mandap", "rickshaw stand", "passport office", "cricket stadium",
// "saarvajanik wedding", "inter-state train", "meditation retreat"]

// const ALL_ACTIVITIES = ["doodhwala - customer",]

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

const ALL_LINES = ["yeh baburao ka style hai!", "mujhe geeli pappi do", "tu jaanta hai mera baap kaun hai?",
    "toh main kya karun, naachun?", "main tumhaare bachche ki maa bann ne waali hun!",
    "zindagi jhandwa fir bhi ghamandwa", "aaj mere paas bungla, gaadi, bank balance hai. tumhare paas kya hai?",
    "utha le re baba", "ek chutki sindoor ki keemat, tum kya jaano!", "bade bade deshon mein, aisi choti choti baaten hoti rehti hain",
    "yeh shaadi nahin ho sakti!", "yaa dosti geheri hai, yaa yeh photo 3D hai", "aaj pooja, kal koi dooja",
    "Life is a race", "Jahapana tussi great ho, tofa kabool karo", "millimeter ab centimeter ban gaya hai",
    "tere chumme me chyavanprash hai", "main hoon ha", "naach na jaane aangan teda", "woh bole toh, apun tumse love karta hai",
    "main apni favorite hoon", "thappad se darr nahin lagta, pyaar se lagta hai", "main toh dil se bhi hun sarfira",
    "beta, tumse na ho payega", "dosti aur ladki mein hamesha ladki jeetti hai", "How's the josh?",
    "Apna time aayega", "Zindagi badi honi chahiye, lambi nahin", "tere naam ka kutta paalun", "Bade achche lagte hain",
    "Aankhen nikal ke gotiyan khelta hun main", "Haar kar jeetne waale ko baazigar kehte hain", "picture abhi baaki hai mere dost",
    "ek baar jo maine commitment kar di, toh main apne aap ki bhi nahin sunta", "Tension kaiko lene ka?",
    "aap purush hi nahin, mahapurush hain", "ghantaa", "Mogambo khush hua", "Ladka aur ladki kabhi dost nahin ho sakte",
    "Hum nahin sudhrenge", "Pachis din mein paisa double", "Imaandari se zyada zaroori hai dukaandari",
    "galat waqt par, galat wajeh se, galat jagah pe haath utha diya",
    "mere saamne waali khidki mein ek chaand ka tukda rehta hai", "Mere pitaji bahut bade shikaari the"]

// const ALL_OCCASIONS = ["shaadi", "graduation", "Canadian PR", "arranged marriage meeting",]

const ALL_LOCATIONS = ALL_ACTIVITIES = ALL_OCCASIONS = ["Hello, this is still under development. Please select either a profession, object, or line."]

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
    window.scrollTo({ top: 140, behavior: 'smooth' })
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