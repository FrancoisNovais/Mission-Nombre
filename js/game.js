/* =============================================== */
/*                                                */
/*              GAME MODULE                        */
/*      Number guessing game logic                 */
/*                                                */
/* =============================================== */

export const Game = (() => {
  let randomNumber;
  const input = document.getElementById("guess");
  const btn = document.querySelector(".game__button");
  const message = document.getElementById("message");

  // Réinitialise le jeu
  function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    message.textContent = "";
    message.style.color = "";
    input.disabled = false;
    input.value = "";
    input.focus();
    btn.textContent = "Valider";
  }

  // Vérifie la proposition de l'utilisateur
  function checkGuess() {
    const guess = parseInt(input.value, 10);

<<<<<<< HEAD
=======
    // Vide et focus sur input pour la prochaine saisie
    input.value = "";
    input.focus();

>>>>>>> a1c497e (Vide et focus sur input pour la prochaine saisie et novalidate sur form)
    if (isNaN(guess) || guess < 1 || guess > 100) {
      message.textContent = "Entrez un nombre valide entre 1 et 100.";
      message.style.color = "orange";
    } else if (guess < randomNumber) {
      message.textContent = "C'est plus !";
      message.style.color = "blue";
    } else if (guess > randomNumber) {
      message.textContent = "C'est moins !";
      message.style.color = "blue";
    } else {
      message.textContent = "Bravo ! Tu as trouvé le nombre 🎉";
      message.style.color = "green";
      input.disabled = true;
      btn.textContent = "Rejouer";
      btn.focus();
    }

    // Animation bump pour chaque mise à jour
    message.classList.remove("bump");
    void message.offsetWidth;
    message.classList.add("bump");
  }

  // Ajoute les écouteurs d’événements
  function attachEvents() {
    btn.addEventListener("click", () => {
      btn.textContent === "Rejouer" ? resetGame() : checkGuess();
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        btn.click();
      }
    });
  }

  // Initialise le jeu
  function init() {
    resetGame();
    attachEvents();
  }

  return { init };
})();
