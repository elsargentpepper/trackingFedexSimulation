import css from "mobile.css";
import cssTablet from "tablet.css";
import cssDesktop from "desktop.css";

import router from '../src/routes/index';

window.addEventListener('load', router);
window.addEventListener('load', css);
window.addEventListener('load', cssTablet);
window.addEventListener('load', cssDesktop);