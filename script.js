// Liste des ressources avec les explications
const resources = [
  {
    code: "R1.01",
    name: "Initiation au développement",
    semester: 1,
    competence: [1, 2],
    subject: "Développement",
    description: "L’objectif de cette ressource est l’initiation au développement. Cette ressource est nécessaire pour la réalisation d’un développement d’application et l’optimisation des applications informatiques."
  },
  {
    code: "R1.02",
    name: "Développement d'interfaces web",
    semester: 1,
    competence: [1, 5, 6],
    subject: "Développement",
    description: "L’objectif de cette ressource est d’apprendre les techniques de création de documents numériques sur le web en réponse à des besoins client. Cette ressource est une base pour réaliser un développement d’application tout en appréhendant les besoins du client et de l’utilisateur."
  },
  {
    code: "R1.03",
    name: "Introduction à l'architecture des ordinateurs",
    semester: 1,
    competence: [2, 3],
    subject: "Systèmes",
    description: "L’objectif de cette ressource est de découvrir la structure et les composants d’un ordinateur. Cette ressource permet de découvrir les différents composants matériels et logiciels internes qui constituent un ordinateur, de manière à appréhender le fonctionnement, mais aussi les limites de leur utilisation."
  },
  {
    code: "R1.04",
    name: "Introduction aux systèmes d'exploitation et à leur fonctionnement",
    semester: 1,
    competence: [3],
    subject: "Systèmes",
    description: "L’objectif de cette ressource est de comprendre le rôle, les composants et le fonctionnement d’un système d’exploitation. Cette ressource permet de découvrir les principes d’un système d’exploitation, leur mode de fonctionnement et les différents types existants. Elle contribue à comprendre comment installer un système sur une machine et à le personnaliser en développant des fonctions simples facilitant la configuration et le paramétrage."
  },
  {
    code: "R1.05",
    name: "Introduction aux bases de données et SQL",
    semester: 1,
    competence: [4],
    subject: "Base de données",
    description: "L’objectif de cette ressource est l’initiation aux bases de données. Cette ressource permet une première sensibilisation sur l’importance d’une base de données dans le système d’information de l’entreprise et montre la complexité de la création d’une base répondant aux besoins et qui soit de bonne qualité."
  },
  {
    code: "R1.06",
    name: "Mathématiques discrètes",
    semester: 1,
    competence: [2, 4],
    subject: "Mathématiques",
    description: "L’objectif de cette ressource est de mettre en place les outils mathématiques nécessaires aux bases de l’informatique. Elle aide à formaliser et mettre en oeuvre des outils mathématiques pour l’informatique. Elle accompagne la mise en place des bases de données en explicitant les structures fondamentales de ces dernières."
  },
  {
    code: "R1.07",
    name: "Outils mathématiques fondamentaux",
    semester: 1,
    competence: [2],
    subject: "Mathématiques",
    description: "L’objectif de cette ressource est la remise à niveau des notions mathématiques de base. Cette ressource donne les outils mathématiques fondamentaux nécessaires à la programmation informatique."
  },
  {
    code: "R1.08",
    name: "Gestion de projet & des organisations",
    semester: 1,
    competence: [5, 6],
    subject: ["Projet", " Gestion"],
    description: "L’objectif de cette ressource est de découvrir l’organisation et la transformation numérique. D’une part, la découverte de l’organisation permet une compréhension des enjeux et les besoins sous-jacents des projets internes et externes animant les acteurs qui la composent. Les défis organisationnels du XXI siècle, comme la transformation numérique des organisations, amènent également à se questionner sur les évolutions informatiques et managériales dans le but de mieux appréhender l’écosystème numérique et le futur contexte professionnel."
  },
  {
    code: "R1.09",
    name: "Économie durable et numérique",
    semester: 1,
    competence: [4, 6],
    subject: "Gestion",
    description: "L’objectif de cette ressource est de découvrir l’économie durable et responsable. L’essor des données de l’information dans la société actuelle amène des nouveaux défis économiques. L’étude de la donnée dans son contexte permet une meilleure visualisation des données de l’information manipulées au quotidien par l’informaticien. Les fondements de l’économie représentent un incontournable pour appréhender l’écosystème numérique."
  },
  {
    code: "R1.10",
    name: "Anglais technique",
    semester: 1,
    competence: [1, 3, 6],
    subject: "Communication",
    description: "L’objectif de la ressource est d’introduire l’anglais de spécialité informatique et de développer sa culture générale et scientifique. Cette ressource permet l’acquisition du vocabulaire de base de l’informatique."
  },
  {
    code: "R1.11",
    name: "Bases de la communication",
    semester: 1,
    competence: [3, 5, 6],
    subject: "Communication",
    description: "L’objectif de cette ressource est d’aborder les fondamentaux de la communication. Cette ressource permet une approche sur l’importance de bien communiquer face à un client, de formuler ses questions de manière claire et pertinente pour recueillir les besoins du client. Elle permet de développer l’esprit critique et la capacité d’analyse nécessaires à la collecte d’informations. Enfin, la ressource permet la mise en place et l’appropriation d’outils de communication pour restituer les informations (sous formes diverses du papier au web) à destination d’un client ou d’une équipe."
  },
  {
    code: "R1.12",
    name: "Projet professionnel",
    semester: 1,
    competence: [, 2, 3, 4, 5, 6],
    subject: "Projet",
    description: "L’objectif de cette ressource est d’identifier le savoir-être et le savoir-faire. Cette ressource permet de se familiariser avec les éléments constitutifs du B.U.T.informatique(AC), de mieux cerner sa connaissance de soi et d’apprendre à définir ses compétences au travers de ses expériences."
  },
  {
    code: "R2.01",
    name: "Développement orienté objet",
    semester: 2,
    competence: [1, 2],
    subject: "Développement",
    description: "L’objectif de cette ressource est d’initier au développement orienté objets. La réalisation d’un développement d’application et l’optimisation des applications informatiques passent par la compréhension des paradigmes objets."
  },
  {
    code: "R2.02",
    name: "Développement d'applications avec IHM",
    semester: 2,
    competence: [1, 5, 6],
    subject: "Développement",
    description: "L’objectif de cette ressource est d’initier au développement d’une application avec une IHM. La réalisation d’un développement d’application passe par la capacité à produire des applications avec des interfaces utilisateurs."
  },
  {
    code: "R2.03",
    name: "Qualité de développement",
    semester: 2,
    competence: [1, 5],
    subject: "Développement",
    description: "L’objectif de cette ressource est d’initier à la qualité de développement. Cette ressource permet de se familiariser avec la mécanique de tests, qui est fondamentale à la réalisation d’un développement d’application. Enfin, l’initiation à l’utilisation d’un outil de gestion de version apporte une première mise en pratique des outils de gestion de projet."
  },
  {
    code: "R2.04",
    name: "Réseau et bas niveau",
    semester: 2,
    competence: [3, 2],
    subject: "Réseaux",
    description: "L’objectif de cette ressource est de comprendre le fonctionnement des couches systèmes et réseaux bas niveau. Cette ressource permet de découvrir les multiples technologies et fonctions mises en œuvre dans un réseau informatique et de comprendre les rôles et structures des mécanismes bas niveau mis en oeuvre pour leur fonctionnement."
  },
  {
    code: "R2.05",
    name: "Introduction aux services réseaux",
    semester: 2,
    competence: [3],
    subject: "Réseaux",
    description: "L’objectif de cette ressource est de comprendre les notions de service et d’architecture client-serveur et savoir installer un service simple dans un réseau informatique. Cette ressource permet de comprendre les principes d’une application dans un réseau informatique (client-serveur), de découvrir et de s’initier à l’installation d’applications communicantes normalisées (les services)."
  },
  {
    code: "R2.06",
    name: "Exploitation d'une base de données",
    semester: 2,
    competence: [4],
    subject: "Base de données",
    description: "L’objectif de cette ressource est l’initiation aux bases de données avec une première approche de la notion d’administration de la base ainsi que de la restitution des données. Cette ressource montre l’intérêt de la base de données pour une entreprise, elle permet de comprendre la sécurité avec la notion de droits et également d’exploiter des données avec des outils simples de visualisation."
  },
  {
    code: "R2.07",
    name: "Graphes",
    semester: 2,
    competence: [2, 5],
    subject: "Mathématiques",
    description: "L’objectif de cette ressource est de faire découvrir les graphes et l’utilisation de ces derniers à travers des algorithmes simples et des situations courantes de programmation. Elle permet d’appréhender le concept de graphe d’un point de vue mathématique et algorithmique. Elle présente les problèmes classiques qui font intervenir cette notion et compare les méthodes de résolution usuelles."
  },
  {
    code: "R2.08",
    name: "Outils numériques pour les statistiques descriptives",
    semester: 2,
    competence: [4],
    subject: "Mathématiques",
    description: "L’objectif de cette ressource est de mettre en place les notions et outils mathématiques pour l’étude et l’analyse des données. Elle donne les outils nécessaires à la visualisation et à l’analyse chiffrée de données en permettant le développement d’un regard critique sur les données. Elle est un support à une meilleure compréhension et présentation des besoins du client."
  },
  {
    code: "R2.09",
    name: "Méthodes numériques",
    semester: 2,
    competence: [2],
    subject: "Mathématiques",
    description: "L’objectif de cette ressource est d’appréhender les notions de suites en vue d’une meilleure compréhension de la programmation et de la récursivité. Elle vient présenter différentes méthodes de résolution algorithmique, pour des problèmes mathématiques courants. Elle permet au travers de la notion de suite, de donner une première approche des principes de la récursivité."
  },
  {
    code: "R2.10",
    name: "Gestion de projet & des organisations",
    semester: 2,
    competence: [4, 5],
    subject: ["Projet", " Gestion"],
    description: "L’objectif de cette ressource est de découvrir la gestion comptable et financière ainsi que son intégration dans la gestion de projet des organisations. Les informations comptables et financières générées par les organisations représentent un enjeu majeur de leur stratégie. La visualisation des données comptables et financières d’une organisation permet une gestion optimale au quotidien de leur activité. La découverte des bases en gestion de projet, notamment des besoins clients et utilisateurs, la mise en place d’outils de gestion, ainsi que l’identification des acteurs et des phases du cycle de développement assurent à l’organisation une gestion efficiente et efficace des projets informatiques. L’articulation de ces deux champs de la gestion permet d’appréhender l’importance de l’estimation des coûts dans la réalisation d’un projet informatique."
  },
  {
    code: "R2.11",
    name: "Introduction au droit",
    semester: 2,
    competence: [6],
    subject: "Droit",
    description: "L’objectif de cette ressource consiste à découvrir le monde professionnel sous l’angle juridique, à travers une introduction générale au droit du numérique et des contrats. Cette ressource permet l’initiation aux bases du droit pour acquérir une première réflexion sur l’importance du droit dans le monde professionnel."
  },
  {
    code: "R2.12",
    name: "Anglais d'entreprise",
    semester: 2,
    competence: [3, 4, 5, 6],
    subject: "Communication",
    description: "L’objectif de cette ressource est de se familiariser avec le monde de l’entreprise et les métiers de l’informatique dans un contexte international."
  },
  {
    code: "R2.13",
    name: "Communication avec le milieu professionnel",
    semester: 2,
    competence: [1, 3, 5, 6],
    subject: "Communication",
    description: "L’objectif de cette ressource est d’approfondir les techniques et outils de la communication en milieu professionnel. Cette ressource souligne l’importance de la communication dans le cadre du développement d’une application informatique en insistant sur l’ergonomie et les interfaces. Elle montre la nécessité de créer des supports de communication adaptés au contexte professionnel, ainsi que le rôle essentiel de l’argumentation pour défendre le produit ou l’application développée et convaincre le client ou l’utilisateur."
  },
  {
    code: "R2.14",
    name: "Projet professionnel et personnel",
    semester: 2,
    competence: [1, 2, 3, 4, 5, 6],
    subject: "Projet",
    description: "L’objectif de cette ressource est d’aborder la connaissance des métiers et des entreprises du territoire."
  }
];

const COLOR_GREEN = "green";
const COLOR_RED = "red";
const COLOR_ORANGE = "orange";

// Réponse à deviner
const correctAnswer = resources[Math.floor(Math.random() * resources.length)];
//const correctAnswer = resources[5];

console.log(correctAnswer);
/*
const correctAnswer = {
  semester: 2,
  resource: 3,
  competence: [1],
  subject: "Développement d'application"
};
*/

// Historique des propositions
let guessHistory = [];


// États de comparaison
let compareSemester = true;
let compareResource = true;
let compareCompetence = true;
let compareSubject = true;


// Fonction d'auto-complétion
function showSuggestions(value) {
  const input = value.toUpperCase();
  const list = document.getElementById("autocomplete-list");
  list.innerHTML = '';

  if (!input) return;

  const suggestions = resources
    .filter(resource => resource.code.startsWith(input))
    .map(resource => {
      const suggestionItem = document.createElement("div");
      suggestionItem.textContent = `${resource.code} : ${resource.name}`;
      suggestionItem.onclick = () => {
        document.getElementById("guess").value = resource.code;
        list.innerHTML = '';
      };
      return suggestionItem;
    });

  suggestions.forEach(item => list.appendChild(item));
}

function checkAnswer() {
  const userGuess = document.getElementById("guess").value.toUpperCase();
  const semester = parseInt(userGuess[1]);
  const resource = parseInt(userGuess.substring(3));

  const guessedResource = resources.find(r => r.code === userGuess);

  if (guessedResource) {
    document.getElementById("resource-name").textContent = `${guessedResource.code} : ${guessedResource.name}`;
  } else {
    document.getElementById("resource-name").textContent = "Ressource inconnue";
    return;
  }

  let allCorrect = true;

  // Vérifier si tous les contrôles sont désactivés
  if (!compareSemester && !compareResource && !compareCompetence && !compareSubject) {
    allCorrect = false;
  }

  const semesterBox = document.getElementById("semestre-hint");
  if (compareSemester) {
    if (guessedResource.semester === correctAnswer.semester) {
      semesterBox.textContent = "Semestre " + guessedResource.semester;
      semesterBox.className = `box ${COLOR_GREEN}`;
    } else {
      semesterBox.textContent = "Semestre " + guessedResource.semester;
      semesterBox.className = `box ${COLOR_RED}`;
      allCorrect = false;
    }
  } else {
    semesterBox.textContent = "Semestre";
    semesterBox.className = "box";
  }

  const resourceBox = document.getElementById("resource-hint");
  if (compareResource) {
    if (userGuess === correctAnswer.code) {
      resourceBox.textContent = "Ressource " + resource;
      resourceBox.className = `box ${COLOR_GREEN}`;
    } else if (resource < parseInt(correctAnswer.code.substring(3))) {
      resourceBox.textContent = "Ressource " + resource + " ↑";
      resourceBox.className = `box ${COLOR_RED}`;
      allCorrect = false;
    } else if (resource > parseInt(correctAnswer.code.substring(3))) {
      resourceBox.textContent = "Ressource " + resource + " ↓";
      resourceBox.className = `box ${COLOR_RED}`;
      allCorrect = false;
    } else {
      resourceBox.textContent = "Ressource " + resource;
      resourceBox.className = `box ${COLOR_GREEN}`;
      allCorrect = false; // Même si les numéros sont égaux, les codes sont différents donc ce n'est pas complètement correct
    }
  } else {
    resourceBox.textContent = "N° Ressource";
    resourceBox.className = "box";
  }

  const competenceBox = document.getElementById("competence-hint");
  if (compareCompetence) {
    if (haveSameElements(guessedResource.competence, correctAnswer.competence)) {
      competenceBox.textContent = "Compétence " + guessedResource.competence.join(", ");
      competenceBox.className = `box ${COLOR_GREEN}`;
    } else if (hasCommonElement(guessedResource.competence, correctAnswer.competence)) {
      competenceBox.textContent = "Compétence " + guessedResource.competence.join(", ");
      competenceBox.className = `box ${COLOR_ORANGE}`;
      allCorrect = false;
    } else {
      competenceBox.textContent = "Compétence " + guessedResource.competence.join(", ");
      competenceBox.className = `box ${COLOR_RED}`;
      allCorrect = false;
    }
  } else {
    competenceBox.textContent = "Compétence";
    competenceBox.className = "box";
  }

  const subjectBox = document.getElementById("subject-hint");
  if (compareSubject) {
    const guessedSubject = Array.isArray(guessedResource.subject) ? guessedResource.subject.join(", ") : guessedResource.subject;
    const correctSubject = Array.isArray(correctAnswer.subject) ? correctAnswer.subject.join(", ") : correctAnswer.subject;

    if (guessedSubject === correctSubject) {
      subjectBox.textContent = guessedSubject;
      subjectBox.className = `box ${COLOR_GREEN}`;
    } else if (correctSubject.includes(guessedSubject) || guessedSubject.includes(correctSubject)) {
      subjectBox.textContent = guessedSubject;
      subjectBox.className = `box ${COLOR_ORANGE}`;
      allCorrect = false;
    } else {
      subjectBox.textContent = guessedSubject;
      subjectBox.className = `box ${COLOR_RED}`;
      allCorrect = false;
    }
  } else {
    subjectBox.textContent = "Matière";
    subjectBox.className = "box";
  }

  addToHistory(userGuess, guessedResource);
  // VICTOIRE
  if (allCorrect) {
    showExplanation(guessedResource);
    confetti();
  }
}


// Fonction pour afficher l'explication de la ressource
function showExplanation(resource) {
  const explanationBlock = document.getElementById("explanation-block");
  explanationBlock.style.display = "block";
  explanationBlock.innerHTML = `<h3>${resource.code} : ${resource.name}</h3><p>${resource.description}</p>`;
}

// Fonction pour ajouter une proposition à l'historique
function addToHistory(guess, resource) {
  guessHistory.push({ guess, resource });
  updateHistoryDisplay();
}

function haveSameElements(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let arr2Copy = [...arr2]; // Crée une copie pour ne pas modifier l'original
  for (let i = 0; i < arr1.length; i++) {
    let found = false;
    for (let j = 0; j < arr2Copy.length; j++) {
      if (arr1[i] === arr2Copy[j]) {
        arr2Copy.splice(j, 1); // Retire l'élément trouvé
        found = true;
        break;
      }
    }
    if (!found) return false;
  }
  return true;
}

// Fonction pour vérifier si deux tableaux ont au moins un élément en commun
function hasCommonElement(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) return true;
  }
  return false;
}



// Mise à jour de l'affichage de l'historique
function updateHistoryDisplay() {
  const historyList = document.getElementById("history-list");
  historyList.innerHTML = '';

  guessHistory.forEach(item => {
    const historyItem = document.createElement("div");
    historyItem.className = 'history-item';
    historyItem.style.display = "flex";
    historyItem.style.gap = "10px";

    const semesterBox = document.createElement("div");
    semesterBox.className = 'box';
    if (compareSemester) {
      if (item.resource.semester === correctAnswer.semester) {
        semesterBox.className += ` ${COLOR_GREEN}`;
      } else {
        semesterBox.className += ` ${COLOR_RED}`;
      }
      semesterBox.textContent = "Semestre " + item.resource.semester;
    } else {
      semesterBox.textContent = "Semestre";
    }
    historyItem.appendChild(semesterBox);

    const resourceBox = document.createElement("div");
    resourceBox.className = 'box';
    if (compareResource) {
      const guessedResourceNumber = parseInt(item.resource.code.substring(3));
      const correctResourceNumber = parseInt(correctAnswer.code.substring(3));

      if (guessedResourceNumber === correctResourceNumber) {
        resourceBox.className += ` ${COLOR_GREEN}`;
        resourceBox.textContent = item.resource.code;
      } else if (guessedResourceNumber < correctResourceNumber) {
        resourceBox.className += ` ${COLOR_RED}`;
        resourceBox.textContent = item.resource.code + " ↑";
      } else {
        resourceBox.className += ` ${COLOR_RED}`;
        resourceBox.textContent = item.resource.code + " ↓";
      }
    } else {
      resourceBox.textContent = "N° Ressource";
    }
    historyItem.appendChild(resourceBox);

    const competenceBox = document.createElement("div");
    competenceBox.className = 'box';
    if (compareCompetence) {
      if (haveSameElements(item.resource.competence, correctAnswer.competence)) {
        competenceBox.className += ` ${COLOR_GREEN}`;
      } else if (hasCommonElement(item.resource.competence, correctAnswer.competence)) {
        competenceBox.className += ` ${COLOR_ORANGE}`;
      } else {
        competenceBox.className += ` ${COLOR_RED}`;
      }
      competenceBox.textContent = "Compétence " + item.resource.competence.join(", ");
    } else {
      competenceBox.textContent = "Compétence";
    }
    historyItem.appendChild(competenceBox);

    const subjectBox = document.createElement("div");
    subjectBox.className = 'box';
    if (compareSubject) {
      const guessedSubject = Array.isArray(item.resource.subject) ? item.resource.subject.join(", ") : item.resource.subject;
      const correctSubject = Array.isArray(correctAnswer.subject) ? correctAnswer.subject.join(", ") : correctAnswer.subject;

      if (guessedSubject === correctSubject) {
        subjectBox.className += ` ${COLOR_GREEN}`;
      } else if (correctSubject.includes(guessedSubject) || guessedSubject.includes(correctSubject)) {
        subjectBox.className += ` ${COLOR_ORANGE}`;
      } else {
        subjectBox.className += ` ${COLOR_RED}`;
      }
      subjectBox.textContent = guessedSubject;
    } else {
      subjectBox.textContent = "Matière";
    }
    historyItem.appendChild(subjectBox);

    historyList.insertBefore(historyItem, historyList.firstChild);
  });
}

// Gestion de l'affichage des dropdowns
document.querySelectorAll('.dropdown-button').forEach(button => {
  button.addEventListener('click', function() {
    const dropdown = this.parentElement;
    dropdown.classList.toggle('active');
  });
});

// Fonction pour comparer deux tableaux (corrigé)
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) return false;
  }
  return true;
}

// Fonction pour vérifier si deux tableaux ont au moins un élément en commun
function hasCommonElement(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) return true;
  }
  return false;
}


// Gestion des boutons de contrôle
document.getElementById("toggle-semester").addEventListener("click", function() {
  compareSemester = !compareSemester;
  this.classList.toggle("active");
  checkAnswer();
  updateHistoryDisplay();
});

document.getElementById("toggle-resource").addEventListener("click", function() {
  compareResource = !compareResource;
  this.classList.toggle("active");
  checkAnswer();
  updateHistoryDisplay();
});

document.getElementById("toggle-competence").addEventListener("click", function() {
  compareCompetence = !compareCompetence;
  this.classList.toggle("active");
  checkAnswer();
  updateHistoryDisplay();
});

document.getElementById("toggle-subject").addEventListener("click", function() {
  compareSubject = !compareSubject;
  this.classList.toggle("active");
  checkAnswer();
  updateHistoryDisplay();
});
