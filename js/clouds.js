/* =============================================== */
/*                                                */
/*             CLOUDS MODULE                       */
/*   Dynamic cloud resizing & animation logic     */
/*                                                */
/* =============================================== */

export const Clouds = (() => {
  const clouds = [
    {
      element: document.querySelector(".layout__cloud--1"),
      min: 100,
      max: 400,
    },
    {
      element: document.querySelector(".layout__cloud--2"),
      min: 100,
      max: 400,
    },
    {
      element: document.querySelector(".layout__cloud--3"),
      min: 100,
      max: 400,
    },
  ];

  // Génère un nombre aléatoire entre min et max inclus
  function randomSize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Change la largeur d’un nuage avec une taille aléatoire
  function changeCloudSize(cloud, minWidth, maxWidth) {
    const newWidth = randomSize(minWidth, maxWidth) + "px";
    cloud.style.width = newWidth;
  }

  // Initialise les nuages et leurs animations
  function init() {
    clouds.forEach(({ element, min, max }) => {
      if (!element) return;
      changeCloudSize(element, min, max);
      element.addEventListener("animationiteration", () => {
        changeCloudSize(element, min, max);
      });
    });
  }

  return { init };
})();
