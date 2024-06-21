import { createI18n } from 'vue-i18n';
import ar from './locales/ar.js';
import en from './locales/en.js';
import th from './locales/th.js';
import vi from './locales/vi.js';
// 定义翻译消息
const messages = {
  ar,
  en,
  th,
  vi
};

// 创建 i18n 实例
const i18n = createI18n({
  locale: 'en', // 设置默认语言
  fallbackLocale: 'en', // 设置回退语言
  messages
});

export default i18n;