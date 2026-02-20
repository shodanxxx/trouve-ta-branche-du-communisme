// =======================
// SCORES IDEOLOGIQUES
// =======================

var audio = new Audio('clickaudio.mp3');

const ideologies = {
    marxism: 0,
    leninism: 0,
    stalinism: 0,
    maoism: 0,
    trotskyism: 0,
    castrism: 0,
    titoism: 0,
    guevarism: 0,
    anarchocommunism: 0
};

let currentQuestion = 0;


// =======================
// IMAGES DES IDEOLOGIES
// =======================

const ideologyImages = {
    marxism: "images/marx.jpg",
    leninism: "images/lenin.jpg",
    stalinism: "images/stalin.jpg",
    maoism: "images/mao.jpg",
    trotskyism: "images/trotsky.jpg",
    castrism: "images/castro.jpg",
    titoism: "images/tito.jpg",
    guevarism: "images/guevara.jpg",
    anarchocommunism: "images/anarcho.jpg"
};


// =======================
// SCORE MAXIMUM PAR IDEOLOGIE
// =======================

const maxScores = {
    marxism: 0,
    leninism: 0,
    stalinism: 0,
    maoism: 0,
    trotskyism: 0,
    castrism: 0,
    titoism: 0,
    guevarism: 0,
    anarchocommunism: 0
};


// =======================
// NOMS DES IDEOLOGIES
// =======================

const ideologyNames = {
    marxism:"Marxisme",
    leninism:"Marxisme-Léninisme",
    stalinism:"Stalinisme",
    maoism:"Maoïsme",
    trotskyism:"Trotskisme",
    castrism:"Castrisme",
    titoism:"Titisme",
    guevarism:"Guevarisme",
    anarchocommunism:"Anarcho-communisme"
};


// =======================
// QUESTIONS
// =======================

const questions = [
/* --- TES QUESTIONS RESTENT STRICTEMENT IDENTIQUES ICI --- */
];
// (elles sont volontairement omises ici pour lisibilité,
// garde exactement celles que tu as déjà)


// =======================
// CALCUL DES SCORES MAXIMUM
// =======================

function computeMaxScores() {
    questions.forEach(q => {
        q.a.forEach(ans => {
            for (let key in ans.e) {
                maxScores[key] += Math.abs(ans.e[key]);
            }
        });
    });
}

computeMaxScores();


// =======================
// LOGIQUE DU TEST
// =======================

function startTest(){
    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("quizScreen").classList.remove("hidden");
    showQuestion();
}

function showQuestion(){

    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.q;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.a.forEach(ans=>{
        const btn = document.createElement("button");
        btn.className="answer";
        btn.innerText = ans.text;
        btn.onclick=()=>selectAnswer(ans.e);
        answersDiv.appendChild(btn);
    });

    audio.currentTime = 0;
    audio.play();

    document.getElementById("progress").innerText =
        `Question ${currentQuestion+1} / ${questions.length}`;
}

function selectAnswer(effect){
    for (let key in effect){
        ideologies[key] += effect[key];
    }

    currentQuestion++;

    if(currentQuestion < questions.length){
        showQuestion();
    } else {
        showResult();
    }
}


// =======================
// AFFICHAGE DES RESULTATS
// =======================

function showResult(){

    document.getElementById("quizScreen").classList.add("hidden");
    document.getElementById("resultScreen").classList.remove("hidden");

    const results = [];

    for (let ideology in ideologies){

        if(maxScores[ideology] === 0) continue;

        const normalizedScore =
            ideologies[ideology] / maxScores[ideology];

        results.push({
            name: ideology,
            percent: Math.round(normalizedScore * 100)
        });
    }

    // Trier par score décroissant
    results.sort((a,b)=> b.percent - a.percent);

    // =======================
    // RESULTAT PRINCIPAL
    // =======================

    if(results.length > 0){

        const winner = results[0];

        document.getElementById("resultTitle").innerText =
            `Résultat principal : ${ideologyNames[winner.name]}`;

        // IMAGE PRINCIPALE
        const resultImage = document.getElementById("resultImage");

        if(ideologyImages[winner.name]){
            resultImage.src = ideologyImages[winner.name];
            resultImage.style.display = "block";
        } else {
            resultImage.style.display = "none";
        }
    }

    document.getElementById("resultDescription").innerText =
        "Classement complet des idéologies selon vos réponses :";


    // =======================
    // CLASSEMENT COMPLET
    // =======================

    const resultList = document.getElementById("resultList");
    resultList.innerHTML = "";

    results.forEach(r => {

        const li = document.createElement("li");

        li.innerText =
            `${ideologyNames[r.name]} : ${r.percent}%`;

        // barre visuelle proportionnelle
        li.style.background =
            `linear-gradient(to right,
            #3498db ${r.percent}%,
            #ecf0f1 ${r.percent}%)`;

        li.style.width = "100%";
        li.style.position = "relative";
        li.style.overflow = "hidden";

        resultList.appendChild(li);
    });
}


// =======================
// RESTART
// =======================

function restart(){
    location.reload();
}
