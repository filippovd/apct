import Vue from "vue";
import VueI18n from "vue-i18n";
import i18n_en from "@/localization/en";
import i18n_ru from "@/localization/ru-ru";
import deepmerge from "deepmerge";

Vue.use(VueI18n);

const i18n = new VueI18n({
	locale: "en",
	fallbackLocale: "en",
	messages: {
		en: i18n_en
	},
	silentTranslationWarn: process.env.NODE_ENV !== "production"
});

function detectLanguage() {
	try {
		const lang =
			(window.navigator.languages && window.navigator.languages[0]) ||
			window.navigator.language ||
			window.navigator.userLanguage;
		return [lang, lang.toLowerCase(), lang.substr(0, 2)].map(lang =>
			lang.replace("-", "_")
		);
	} catch (e) {
		return undefined;
	}
}

//console.log("detectLanguage", detectLanguage());
async function autoInstallLocale(lang) {
	try {
		let data = null;
		//
		if (lang.includes("en")) {
			data = i18n_en;
		} else if (lang.includes("ru")) {
			data = i18n_ru;
		} else throw new Error("Not supoorted");

		if (data != null) {
			console.log(`[UI] Setting a data for your locale ${lang}.`);
			mergeLocale(lang, data);
			return true;
		}
	} catch (e) {
		console.error(e);
		return false;
	}
	return false;
}

async function autoDetect() {
	const codes = detectLanguage();
	if (codes && codes[0].indexOf("en") === -1) {
		let ok = false;
		let previousCode;
		for (const code of codes) {
			if (code === previousCode) continue;
			previousCode = code;
			ok = await tryAutoLang(code);
			if (ok) break;
		}

		if (!ok) {
			console.log(
				`[UI] No locale data was found for your locale ${codes[0]}.`
			);
		}
	}
}

async function tryAutoLang(lang) {
	console.log(`[UI] Trying to load ${lang} locale...`);
	const result = await autoInstallLocale(lang);
	if (result) {
		i18n.locale = lang;
		// eslint-disable-next-line no-console
		console.log(`[UI] Automatically loaded ${lang} locale `);
	}
	return result;
}

autoDetect();

export function mergeLocale(lang, messages) {
	const newData = deepmerge(i18n.getLocaleMessage(lang), messages);
	i18n.setLocaleMessage(lang, newData);
}

export default i18n;
