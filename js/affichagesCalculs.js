$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const serieNumber = urlParams.get('serie');
    let currentCalculIndex = 0;
    let serieCalculs = [];

    genererSeries6EMES(serieNumber);

    $('#next-calcul').click(function() {
        currentCalculIndex++;
        if (currentCalculIndex < serieCalculs.length) {
            displayCalcul(currentCalculIndex);
        } else {
            $(this).addClass('d-none');
            $('#submit-form').removeClass('d-none');
        }
    });

    function genererSeries6EMES(serieNumber) {

        // Tableau de fonctions pour chaque série
        const seriesFunctions = [
            () => genererSerieMultiplication([10, 100, 1000]),
            () => genererSerieMultiplication([0.1, 0.01]),
            () => genererSerieDivision([10, 100, 1000]),
            () => genererSerieDivision([0.1, 0.01]),
            () => genererSerieMultiplication([10, 100, 1000, 0.1, 0.01]),
            () => genererSerieDivision([10, 100, 1000, 0.1, 0.01]),
            () => genererSerieMixte([10, 100, 1000, 0.1, 0.01]),
            () => genererSerieMultiplicationsParMultipleDe2([2, 4, 8]),
            () => genererSerieMultiplicationsParMultipleDe2([0.5, 0.25]),
            () => genererSerieDivisionsParMultipleDe2([2, 4, 8]),
            () => genererSerieDivisionsParMultipleDe2([0.5, 0.25]),
            () => genererSerieMultiplicationsParMultipleDe2([2, 4, 8, 0.5, 0.25]),
            () => genererSerieDivisionsParMultipleDe2([2, 4, 8, 0.5, 0.25]),
            () => genererSerieMixteMultipleDe2([2, 4, 8, 0.5, 0.25]),
            () => genererSerieSommeEntiere()
        ];

        serieNumber = parseInt(serieNumber) - 1; // Convertir en index (0 basé)
        if (serieNumber >= 0 && serieNumber < seriesFunctions.length) {
            serieCalculs = seriesFunctions[serieNumber]();
        } else {
            serieCalculs = [];
        }

        $('#serie-title').text(`Série ${serieNumber}`);
        $('#hidden-serie').val(serieNumber);
        displayCalcul(currentCalculIndex);
    }

    function displayCalcul(index) {
        $('#calcul-container').html(`<p>${serieCalculs[index].split('=')[0].trim()}</p>`);
    }
});