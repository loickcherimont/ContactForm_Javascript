import { contactForm } from "./components.js";
import { preProcessing, copyrightProject } from "./functions.js";

/** Control fields before send to server */
contactForm.addEventListener('submit', preProcessing);

/** Sign the app */
copyrightProject();

