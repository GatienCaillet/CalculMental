// Fonction de calcul de base

function addition(a, b) {
    return a + b;
}

function soustraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return "Erreur : Division par zéro";
    } else {
        return a / b;
    }
}

// Fonction pour arrondir un nombre
function arrondir(nombre) {
    return Math.round(nombre);
}

// Fonction pour générer un nombre entier aléatoire avec un nombre de chiffres spécifié
function nombreAleatoireEntier(chiffres) {
    const min = Math.pow(10, chiffres - 1);
    const max = Math.pow(10, chiffres) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction pour générer un nombre entier aléatoire entre min et max (compris)
function nombreAleatoireEntierEntre(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction pour générer un nombre à virgule aléatoire avec un nombre de chiffres avant et après la virgule spécifié
function nombreAleatoireVirgule(chiffresAvantVirgule, chiffresApresVirgule) {
    const entier = nombreAleatoireEntier(chiffresAvantVirgule);
    const decimal = Math.random().toFixed(chiffresApresVirgule).split('.')[1];
    return parseFloat(`${entier}.${decimal}`);
}