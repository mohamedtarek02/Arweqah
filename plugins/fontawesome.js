import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fal } from "@fortawesome/free-light-svg-icons"; 
import { far } from "@fortawesome/free-regular-svg-icons";

config.autoAddCss = false;

library.add(fal);
library.add(far);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});
