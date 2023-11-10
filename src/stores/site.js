import {defineStore} from "pinia";

export const useSiteStore = defineStore('site', {
    state: () => ({
        busy: false
    }),
    getters: {
        isBusy(state) {
            return state.busy
        }
    },
    actions: {
        setBusy(value) {
            this.busy = value
        }
    }
})
