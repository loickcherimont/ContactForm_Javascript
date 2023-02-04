import { contactForm } from "./components.js";
import { preProcessing } from "./functions.js";

/** Control fields before send to server */
contactForm.addEventListener('submit', preProcessing);

