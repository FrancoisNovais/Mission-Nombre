/* =============================================== */
/*                                                */
/*               APP MODULE                        */
/*    Initialization and orchestration             */
/*                                                */
/* =============================================== */

import { Clouds } from "./clouds.js";
import { Game } from "./game.js";

document.addEventListener("DOMContentLoaded", () => {
  Clouds.init();
  Game.init();
});
