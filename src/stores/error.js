import {defineStore} from "pinia";
import {UtLanguage} from "../util/UtLanguage";
import {UtError} from "../util/UtError";

export const useErrorStore = defineStore('error', {
    state: () => ({
        errors: []
    }),
    getters: {
        getErrors(state) {
            return state.errors
        },
        isErrorPresent(state) {
            return state.errors.length > 0
        }
    },
    actions: {
        setError(error) {
            console.log('error', error)
            let {request, response, message} = error;
            this.errors = response ? response.data.errors : [message]
        },
        hideError() {
            console.log('hideError')
            this.errors = []
        }
    }
})
