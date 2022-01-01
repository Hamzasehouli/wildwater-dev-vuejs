import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import TheHeader from "./components/TheHeader.vue";
import PagesCmp from "./components/PagesCmp.vue";
import ContentCmp from "./components/ContentCmp.vue";
import HeaderlinkCmp from "./components/header/HeaderlinkCmp.vue";
import SocialLinks from "./components/header/SocialLinks.vue";

const app = createApp(App);
app.component("the-header", TheHeader);
app.component("content-cmp", ContentCmp);
app.component("pages-cmp", PagesCmp);
app.component("social-links", SocialLinks);
app.component("headerlink-cmp", HeaderlinkCmp);
app.use(store);
app.use(router);

router.isReady().then(() => app.mount("#app"));
