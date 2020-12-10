function printHighscores() {
    // Get scores from localstorage or set to empty array
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    // Shows highscores by score property in descending order
    highscores.sort(function (a, b) {
        return b.score - a.score;
    });

    highscores.forEach(function (score) {
        // Creates list tag for each high score
        var liTag = document.createElement("li");
        liTag.textContent = score.initials + " - " + score.score;

        // Displays scores on page
        var olEl = document.getElementById("highscores");
        olEl.appendChild(liTag);
    });
}

// run function when page loads
printHighscores()