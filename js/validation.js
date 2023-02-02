import { processing } from "./functions.js";

/** Control fields before send to server */
document
    .forms['contact']
    .addEventListener('submit', processing)

