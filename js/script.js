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

                $('#serie-title').text(`Série ${serieNumber}`);
                $('#hidden-serie').val(serieNumber);
                displayCalcul(currentCalculIndex);
            }

            function displayCalcul(index) {
                $('#calcul-container').html(`<p>${serieCalculs[index].split('=')[0].trim()}</p>`);
            }
        });