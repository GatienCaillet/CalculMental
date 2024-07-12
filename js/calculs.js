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

// Fonction pour générer une série de calculs de multiplication avec réponse
// Série 1 : genererSerieMultiplication([10, 100, 1000]);
// Série 2 : genererSerieMultiplication([0.1, 0.01]);
// Série 5 : genererSerieMultiplication([10, 100, 1000, 0.1, 0.01]);
function genererSerieMultiplication(multiplicateurs) {
    const resultats = new Set();

    while (resultats.size < 10) {
        const chiffresAvantVirgule = nombreAleatoireEntierEntre(0, 3);
        const chiffresApresVirgule = nombreAleatoireEntierEntre(0, 3);
        const nombre = nombreAleatoireVirgule(chiffresAvantVirgule, chiffresApresVirgule);
        const multiplicateur = multiplicateurs[Math.floor(Math.random() * multiplicateurs.length)];
        const resultat = parseFloat((multiplication(nombre, multiplicateur)).toFixed(6));

        const calcul = `${nombre} x ${multiplicateur} = ${resultat}`;
        if (!resultats.has(calcul)) {
            resultats.add(calcul);
        }
    }

    return Array.from(resultats);
}

// Fonction pour générer une série de calculs de division avec réponse
// Série 3 : genererSerieDivision([10, 100, 1000]);
// Série 4 : genererSerieDivision([0.1, 0.01]);
// Série 6 : genererSerieDivision([10, 100, 1000, 0.1, 0.01]);
function genererSerieDivision(diviseurs) {
    const resultats = new Set();

    while (resultats.size < 10) {
        const chiffresAvantVirgule = nombreAleatoireEntierEntre(0, 3);
        const chiffresApresVirgule = nombreAleatoireEntierEntre(0, 3);
        const nombre = nombreAleatoireVirgule(chiffresAvantVirgule, chiffresApresVirgule);
        const diviseur = diviseurs[Math.floor(Math.random() * diviseurs.length)];
        const resultat = parseFloat((division(nombre, diviseur)).toFixed(6));

        const calcul = `${nombre} ÷ ${diviseur} = ${resultat}`;
        if (!resultats.has(calcul)) {
            resultats.add(calcul);
        }
    }

    return Array.from(resultats);
}

// Fonction pour générer la série mixte (multiplication et division)
function genererSerieMixte(multiplicateursEtDiviseurs) {
    const resultats = new Set();

    while (resultats.size < 10) {
        const chiffresAvantVirgule = nombreAleatoireEntierEntre(0, 3);
        const chiffresApresVirgule = nombreAleatoireEntierEntre(0, 3);
        const nombre = nombreAleatoireVirgule(chiffresAvantVirgule, chiffresApresVirgule);
        const multiplicateurOuDiviseur = multiplicateursEtDiviseurs[Math.floor(Math.random() * multiplicateursEtDiviseurs.length)];

        const multiplicationOuDivision = Math.random();

        if (multiplicationOuDivision < 0.5) {
            const resultat = parseFloat((multiplication(nombre, multiplicateurOuDiviseur)).toFixed(6));
            const calcul = `${nombre} x ${multiplicateurOuDiviseur} = ${resultat}`;
            if (!resultats.has(calcul)) {
                resultats.add(calcul);
            }
        } else {
            const resultat = parseFloat((division(nombre, multiplicateurOuDiviseur)).toFixed(6));
            const calcul = `${nombre} ÷ ${multiplicateurOuDiviseur} = ${resultat}`;
            if (!resultats.has(calcul)) {
                resultats.add(calcul);
            }
        }
    }
    return Array.from(resultats);
}

// Fonction pour générer la série de multiplications par 2, 4, 8, 0.5 ou 0.25
function genererSerieMultiplicationsParMultipleDe2(multiplicateurs) {
    const resultats = new Set();

    while (resultats.size < 10) {
        const nombreDeChiffres = nombreAleatoireEntierEntre(0, 3);
        const multiplicateur = multiplicateurs[Math.floor(Math.random() * multiplicateurs.length)];
        const nombre = division(nombreAleatoireEntier(nombreDeChiffres), multiplicateur);
        const resultat = parseFloat((multiplication(nombre, multiplicateur)).toFixed(6));

        const calcul = `${nombre} x ${multiplicateur} = ${resultat}`;
        if (!resultats.has(calcul)) {
            resultats.add(calcul);
        }
    }

    return Array.from(resultats);
}

// Fonction pour générer la série de divisions par 2, 4, 8, 0.5 ou 0.25
function genererSerieDivisionsParMultipleDe2(diviseurs) {
    const resultats = new Set();

    while (resultats.size < 10) {
        const nombreDeChiffres = nombreAleatoireEntierEntre(0, 3);
        const diviseur = diviseurs[Math.floor(Math.random() * diviseurs.length)];
        const nombre = multiplication(nombreAleatoireEntier(nombreDeChiffres), diviseur);
        const resultat = parseFloat((division(nombre, diviseur)).toFixed(6));

        const calcul = `${nombre} ÷ ${diviseur} = ${resultat}`;
        if (!resultats.has(calcul)) {
            resultats.add(calcul);
        }
    }

    return Array.from(resultats);
}

// Fonction pour générer la série mixte (multiplication et division)
function genererSerieMixteMultipleDe2(multiplicateursEtDiviseurs) {
    const resultats = new Set();

    while (resultats.size < 10) {
        const nombreDeChiffres = nombreAleatoireEntierEntre(0, 3);
        const multiplicateurOuDiviseur = multiplicateursEtDiviseurs[Math.floor(Math.random() * multiplicateursEtDiviseurs.length)];

        const multiplicationOuDivision = Math.random();

        if (multiplicationOuDivision < 0.5) {
            const nombre = division(nombreAleatoireEntier(nombreDeChiffres), multiplicateurOuDiviseur);
            const resultat = parseFloat((multiplication(nombre, multiplicateurOuDiviseur)).toFixed(6));
            const calcul = `${nombre} x ${multiplicateurOuDiviseur} = ${resultat}`;
            if (!resultats.has(calcul)) {
                resultats.add(calcul);
            }
        } else {
            const nombre = multiplication(nombreAleatoireEntier(nombreDeChiffres), multiplicateurOuDiviseur);
            const resultat = parseFloat((division(nombre, multiplicateurOuDiviseur)).toFixed(6));
            const calcul = `${nombre} ÷ ${multiplicateurOuDiviseur} = ${resultat}`;
            if (!resultats.has(calcul)) {
                resultats.add(calcul);
            }
        }
    }
    return Array.from(resultats);
}

// Fonction pour générer les séries pour les 6èmes
function genererSeries6EMES() {
    const series = [
        genererSerieMultiplication([10, 100, 1000]),
        genererSerieMultiplication([0.1, 0.01]),
        genererSerieDivision([10, 100, 1000]),
        genererSerieDivision([0.1, 0.01]),
        genererSerieMultiplication([10, 100, 1000, 0.1, 0.01]),
        genererSerieDivision([10, 100, 1000, 0.1, 0.01]),
        genererSerieMixte([10, 100, 1000, 0.1, 0.01]),
        genererSerieMultiplicationsParMultipleDe2([2, 4, 8]),
        genererSerieMultiplicationsParMultipleDe2([0.5, 0.25]),
        genererSerieDivisionsParMultipleDe2([2, 4, 8]),
        genererSerieDivisionsParMultipleDe2([0.5, 0.25]),
        genererSerieMultiplicationsParMultipleDe2([2, 4, 8, 0.5, 0.25]),
        genererSerieDivisionsParMultipleDe2([2, 4, 8, 0.5, 0.25]),
        genererSerieMixteMultipleDe2([2, 4, 8, 0.5, 0.25])
    ];

    series.forEach((serie, index) => {
        console.log(`Série numéro ${index + 1} :`);
        serie.forEach(calcul => console.log(calcul));
        console.log("---------------"); // Ligne vide pour séparer les séries
    });
}
