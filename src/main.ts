import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import { scrollTo } from "./globalsFunctions";

const app = createApp(App);
app.use(router);
app.config.globalProperties.$scrollTo = scrollTo;

app.mount("#app");
