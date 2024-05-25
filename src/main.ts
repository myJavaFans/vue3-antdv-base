import { createApp } from "vue";
import App from "./App.vue";
// svg图标
import "virtual:svg-icons-register";
import "uno.css";
import { setupStore } from "@/store";
import { setupI18n } from "@/lang";

const app = createApp(App);
// 安装pinia仓库
setupStore(app);
// 安装国际化
setupI18n(app);
app.mount("#app");
