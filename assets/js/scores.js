// Get scores from local storage
function printHighscores() {
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    // create li tags for high scores
    highscores.forEach(function(score) {
      var liTag = document.createElement("li");
      liTag.textContent = score.initials + " - " + score.score;

      var olEl = document.getElementById("highscores");
      olEl.appendChild(liTag);
    });
  }
  
  // clear highscores
  function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }
  
document.getElementById("clear").onclick = clearHighscores;

// Run when page is loads  
printHighscores();
  