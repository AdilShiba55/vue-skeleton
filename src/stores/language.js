import {defineStore} from "pinia";
import {UtLanguage} from "../util/UtLanguage";

export const useLanguageStore = defineStore('language', {
    state: () => ({
        currentLanguage: UtLanguage.RUSSIAN,
        languages: [UtLanguage.RUSSIAN, UtLanguage.KAZAKH, UtLanguage.ENGLISH]
    }),
    getters: {
        getCurrentLanguage(state) {
            return state.currentLanguage
        },
        getLanguages(state) {
            return state.languages
        }
    },
    actions: {
        setLanguage(language) {
            console.log('setLanguage', language)
            this.currentLanguage = language
        }
    }
})
