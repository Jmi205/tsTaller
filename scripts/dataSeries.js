// Tu arreglo de series ya está definido
import { Serie } from "./Serie.js";
export var series = [
    new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "https://i.imgur.com/GGje0vc.jpg"),
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman...", "https://www.netflix.com/co/title/70242311", "https://i.imgur.com/EvKe48G.jpg"),
    new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "https://i.imgur.com/TDCEV1S.jpg"),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists...", "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg"),
    new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes...", "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg"),
    new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based...", "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg")
];
export function generateSeriesTable() {
    var tableBody = document.getElementById("series-table-body");
    if (tableBody) {
        // Insertar las filas de cada serie
        series.forEach(function (serie) {
            var row = document.createElement("tr");
            row.innerHTML = "\n                <td>".concat(serie.id, "</td>\n                <td>").concat(serie.name, "</td>\n                <td>").concat(serie.channel, "</td>\n                <td>").concat(serie.seasons, "</td>\n            ");
            tableBody.appendChild(row);
        });
    }
    // Calcular el promedio de temporadas
    var totalSeasons = series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
    var averageSeasons = (totalSeasons / series.length).toFixed(1); // Redondeado a 1 decimal
    // Crear una fila para mostrar el promedio de temporadas
    var averageRow = document.createElement("tr");
    averageRow.innerHTML = "\n        <td colspan=\"4\" style=\"text-align: left; font-weight: bold;\">\n            Seasons average: ".concat(averageSeasons, "\n        </td>\n    ");
    if (tableBody) {
        tableBody.appendChild(averageRow);
    }
}
document.addEventListener("DOMContentLoaded", generateSeriesTable);
