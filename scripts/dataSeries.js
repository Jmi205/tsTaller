import { Serie } from "./Serie.js";
export var series = [
    new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "https://i.imgur.com/GGje0vc.jpg"),
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "https://i.imgur.com/EvKe48G.jpg"),
    new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "https://i.imgur.com/TDCEV1S.jpg"),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg"),
    new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg"),
    new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg"),
];
export function generateSeriesTable() {
    var tableBody = document.getElementById("series-table-body");
    var seriesDetail = document.getElementById("series-detail");
    var seriesImage = document.getElementById("series-image");
    var seriesName = document.getElementById("series-name");
    var seriesDescription = document.getElementById("series-description");
    var seriesLink = document.getElementById("series-link");
    if (!tableBody)
        return;
    // Insertar las filas de cada serie
    series.forEach(function (serie) {
        var row = document.createElement("tr");
        row.innerHTML = "\n            <td>".concat(serie.id, "</td>\n            <td><a href=\"#\" class=\"series-link\">").concat(serie.name, "</a></td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>\n        ");
        var seriesLinkElement = row.querySelector('.series-link');
        if (seriesLinkElement) {
            seriesLinkElement.addEventListener('click', function (e) {
                e.preventDefault();
                // Mostrar detalle de la serie
                if (seriesImage && seriesName && seriesDescription && seriesLink) {
                    seriesImage.src = serie.image;
                    seriesName.textContent = serie.name;
                    seriesDescription.textContent = serie.description;
                    seriesLink.href = serie.link;
                }
            });
        }
        if (seriesDetail) {
            seriesDetail.style.display = 'block'; // Mostrar la tarjeta
        }
        tableBody.appendChild(row);
    });
    // Calcular el promedio de temporadas
    var totalSeasons = series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
    var averageSeasons = (totalSeasons / series.length).toFixed(1);
    var averageRow = document.createElement("tr");
    averageRow.innerHTML = "\n            <td colspan=\"4\" style=\"text-align: left; font-weight: bold;\">\n                Seasons average: ".concat(averageSeasons, "\n            </td>\n        ");
    tableBody.appendChild(averageRow);
}
document.addEventListener("DOMContentLoaded", generateSeriesTable);
