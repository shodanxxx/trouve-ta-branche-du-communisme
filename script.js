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
// QUESTIONS (35 UNIQUES)
// =======================

const questions = [

{
q:"La révolution doit-elle être mondiale ?",
a:[
{text:"Oui, permanente", e:{trotskyism:2}},
{text:"Elle peut commencer dans un seul pays", e:{stalinism:2,leninism:1}},
{text:"Chaque pays suit sa propre voie", e:{titoism:2}}
]
},
{
q:"Le parti révolutionnaire doit être :",
a:[
{text:"Très centralisé", e:{stalinism:2,leninism:2}},
{text:"Démocratique mais organisé", e:{marxism:2,trotskyism:1}},
{text:"Inutile", e:{anarchocommunism:3}}
]
},
{
q:"Qui doit diriger la révolution ?",
a:[
{text:"Le parti d'avant-garde", e:{leninism:3}},
{text:"Les travailleurs directement", e:{anarchocommunism:3}},
{text:"Une coalition révolutionnaire large", e:{marxism:2}}
]
},
{
q:"Le rôle des paysans dans la révolution :",
a:[
{text:"Central", e:{maoism:3}},
{text:"Important mais secondaire", e:{castrism:2,guevarism:1}},
{text:"Faible", e:{marxism:2}}
]
},
{
q:"La guérilla armée est :",
a:[
{text:"Un moteur révolutionnaire", e:{guevarism:3,castrism:2}},
{text:"Une stratégie possible", e:{maoism:2}},
{text:"Peu efficace", e:{marxism:2}}
]
},
{
q:"L'économie socialiste doit être :",
a:[
{text:"Fortement planifiée", e:{stalinism:3}},
{text:"Autogérée", e:{anarchocommunism:3,titoism:2}},
{text:"Planifiée mais flexible", e:{marxism:2}}
]
},
{
q:"Les syndicats doivent :",
a:[
{text:"Suivre le parti", e:{leninism:2}},
{text:"Être indépendants", e:{trotskyism:2}},
{text:"Être autogérés", e:{anarchocommunism:3}}
]
},
{
q:"La révolution dans les pays industrialisés :",
a:[
{text:"Prioritaire", e:{marxism:3}},
{text:"Pas nécessaire", e:{maoism:2,guevarism:1}},
{text:"Variable", e:{castrism:2}}
]
},
{
q:"Le socialisme peut exister dans un seul pays :",
a:[
{text:"Oui", e:{stalinism:3}},
{text:"Non", e:{trotskyism:3}},
{text:"Selon circonstances", e:{marxism:2}}
]
},
{
q:"Le rôle de l'État après la révolution :",
a:[
{text:"État fort", e:{stalinism:3}},
{text:"Transition temporaire", e:{leninism:2,marxism:1}},
{text:"Disparition rapide", e:{anarchocommunism:3}}
]
},
{
q:"La démocratie ouvrière doit être :",
a:[
{text:"Directe", e:{anarchocommunism:3}},
{text:"Encadrée par le parti", e:{leninism:2}},
{text:"Pluraliste", e:{trotskyism:2}}
]
},
{
q:"La révolution doit être exportée :",
a:[
{text:"Activement", e:{trotskyism:2,guevarism:2}},
{text:"Seulement si nécessaire", e:{leninism:2}},
{text:"Non", e:{stalinism:2}}
]
},
{
q:"L'autogestion économique :",
a:[
{text:"Essentielle", e:{titoism:3,anarchocommunism:2}},
{text:"Secondaire", e:{leninism:2}},
{text:"Dangereuse", e:{stalinism:2}}
]
},
{
q:"La discipline du parti doit être :",
a:[
{text:"Très stricte", e:{stalinism:3}},
{text:"Centralisme démocratique", e:{leninism:3}},
{text:"Souple", e:{trotskyism:2}}
]
},
{
q:"Les mouvements intellectuels sont :",
a:[
{text:"Importants", e:{marxism:2,trotskyism:1}},
{text:"Secondaires", e:{stalinism:2}},
{text:"Peu pertinents", e:{maoism:1}}
]
},
{
q:"La lutte armée rurale :",
a:[
{text:"Stratégie principale", e:{maoism:3}},
{text:"Possible", e:{castrism:2}},
{text:"Rarement utile", e:{marxism:2}}
]
},
{
q:"Le nationalisme révolutionnaire peut être :",
a:[
{text:"Compatible", e:{castrism:2,titoism:2}},
{text:"Secondaire", e:{leninism:2}},
{text:"Incompatible", e:{trotskyism:2}}
]
},
{
q:"La révolution doit être :",
a:[
{text:"Rapide", e:{guevarism:2}},
{text:"Organisée progressivement", e:{leninism:2}},
{text:"Spontanée", e:{anarchocommunism:2}}
]
},
{
q:"Le multipartisme socialiste :",
a:[
{text:"Acceptable", e:{trotskyism:2}},
{text:"Dangereux", e:{stalinism:2}},
{text:"Inutile", e:{anarchocommunism:2}}
]
},
{
q:"Les conseils ouvriers doivent :",
a:[
{text:"Gouverner directement", e:{anarchocommunism:3}},
{text:"Compléter le parti", e:{leninism:2}},
{text:"Être secondaires", e:{stalinism:2}}
]
},
{
q:"La révolution en Amérique latine :",
a:[
{text:"Guérilla populaire", e:{guevarism:3}},
{text:"Processus national", e:{castrism:2}},
{text:"Modèle universel", e:{marxism:2}}
]
},
{
q:"L'économie locale autonome :",
a:[
{text:"Très importante", e:{titoism:3}},
{text:"Peu souhaitable", e:{stalinism:2}},
{text:"Possible", e:{marxism:1}}
]
},
{
q:"La spontanéité révolutionnaire :",
a:[
{text:"Essentielle", e:{anarchocommunism:3}},
{text:"Doit être guidée", e:{leninism:2}},
{text:"Secondaire", e:{stalinism:2}}
]
},
{
q:"La révolution culturelle permanente :",
a:[
{text:"Nécessaire", e:{maoism:3}},
{text:"Risque d'instabilité", e:{stalinism:1}},
{text:"Peu utile", e:{marxism:1}}
]
},
{
q:"L'internationalisme :",
a:[
{text:"Priorité absolue", e:{trotskyism:3}},
{text:"Important", e:{marxism:2}},
{text:"Secondaire", e:{stalinism:2}}
]
},
{
q:"Le rôle du leader révolutionnaire :",
a:[
{text:"Central", e:{stalinism:2,maoism:2}},
{text:"Important mais limité", e:{leninism:2}},
{text:"Doit être évité", e:{anarchocommunism:2}}
]
},
{
q:"Les réformes avant révolution :",
a:[
{text:"Utiles", e:{marxism:2}},
{text:"Tactiques seulement", e:{leninism:2}},
{text:"Inutiles", e:{guevarism:2}}
]
},
{
q:"La révolution urbaine :",
a:[
{text:"Essentielle", e:{marxism:2}},
{text:"Complémentaire", e:{maoism:2}},
{text:"Secondaire", e:{guevarism:1}}
]
},
{
q:"La propriété collective doit être :",
a:[
{text:"Étatique", e:{stalinism:2}},
{text:"Autogérée", e:{titoism:3}},
{text:"Communale directe", e:{anarchocommunism:3}}
]
},
{
q:"Les alliances socialistes internationales :",
a:[
{text:"Indispensables", e:{trotskyism:2}},
{text:"Utilitaires", e:{leninism:2}},
{text:"Secondaires", e:{stalinism:1}}
]
},
{
q:"Une minorité organisée peut lancer la révolution :",
a:[
{text:"Oui", e:{leninism:2,guevarism:2}},
{text:"Non", e:{marxism:2}},
{text:"Seulement la masse populaire", e:{anarchocommunism:2}}
]
},
{
q:"Le modèle soviétique historique :",
a:[
{text:"Positif", e:{stalinism:2}},
{text:"Partiellement", e:{leninism:2}},
{text:"Critiquable", e:{trotskyism:2}}
]
},
{
q:"La révolution doit transformer la culture :",
a:[
{text:"Oui profondément", e:{maoism:2}},
{text:"Secondaire", e:{marxism:1}},
{text:"Non imposée", e:{anarchocommunism:2}}
]
},
{
q:"La stratégie révolutionnaire idéale :",
a:[
{text:"Organisation du parti", e:{leninism:2}},
{text:"Insurrection populaire", e:{anarchocommunism:2}},
{text:"Guérilla prolongée", e:{maoism:2,guevarism:1}}
]
}
];


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
        audio.play();
        answersDiv.appendChild(btn);
    });

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
// RESULTAT
// =======================

function showResult(){

    document.getElementById("quizScreen").classList.add("hidden");
    document.getElementById("resultScreen").classList.remove("hidden");

    let result = Object.keys(ideologies)
        .reduce((a,b)=> ideologies[a]>ideologies[b]?a:b);

    const names = {
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

    document.getElementById("resultTitle").innerText = names[result];
    document.getElementById("resultDescription").innerText =
        "Ce courant correspond le plus aux positions exprimées durant le test.";
}

function restart(){
    location.reload();
}
