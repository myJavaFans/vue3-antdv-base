import { createI18n } from "vue-i18n";

// 本地语言包
import enLocale from "./package/en";
import zhCnLocale from "./package/zh-cn";
import type { App } from "vue";

const messages = {
  "zh-cn": {
    ...zhCnLocale,
  },
  en: {
    ...enLocale,
  },
};
// 创建 i18n 实例
const i18n = createI18n({
  legacy: false,
  locale: "zh-cn",
  messages: messages,
});
export function setupI18n(app: App<Element>) {
  app.use(i18n);
}
// 导出 i18n 实例
export default { i18n };
