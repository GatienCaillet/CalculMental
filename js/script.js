$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const serieNumber = urlParams.get('serie');
    genererSeries6EMES(serieNumber);

    function genererSeries6EMES(serieNumber) {
        let serieCalculs;

        switch (parseInt(serieNumber)) {
            case 1:
                serieCalculs = genererSerieMultiplication([10, 100, 1000]);
                break;
            case 2:
                serieCalculs = genererSerieMultiplication([0.1, 0.01]);
                break;
            case 3:
                serieCalculs = genererSerieDivision([10, 100, 1000]);
                break;
            case 4:
                serieCalculs = genererSerieDivision([0.1, 0.01]);
                break;
            case 5:
                serieCalculs = genererSerieMultiplication([10, 100, 1000, 0.1, 0.01]);
                break;
            case 6:
                serieCalculs = genererSerieDivision([10, 100, 1000, 0.1, 0.01]);
                break;
            case 7:
                serieCalculs = genererSerieMixte([10, 100, 1000, 0.1, 0.01]);
                break;
            default:
                serieCalculs = [];
        }

        const contentHtml = serieCalculs.map(calcul => `<p>${calcul}</p>`).join('');
        $('#serie-content').html(`<h3>Série ${serieNumber}</h3>${contentHtml}`);
    }
});