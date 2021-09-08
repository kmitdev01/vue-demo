import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import FontAwesomeIcon from "./fontawesome-icons";
// import axios from "axios";
// import VueAxios from 'vue-axios'

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(router)
    // .use(VueAxios, axios)
    .mount("#app");
