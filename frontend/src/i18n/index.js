import { createI18n } from "vue-i18n";

const messages = {
    ru: import("./locales/ru.json"),
    kz: import("./locales/kz.json")
};

const i18n = createI18n({
    locale: "ru",
    fallbackLocale: "ru",
    messages
});

export default i18n;
