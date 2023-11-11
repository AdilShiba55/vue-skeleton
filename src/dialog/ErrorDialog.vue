<template>
    <BaseDialog v-if="errorStore.isErrorPresent"
               id="error-dialog"
               title="Ошибка"
               @click-outside="errorStore.hideError">
        <template v-slot:content>
            <div v-for="(item, index) in errorStore.getErrors"
                 class="error text-h6">
                {{item}}
            </div>
        </template>
        <template v-slot:footer>
            <v-card-actions class="justify-end">
                <v-btn
                    text="Закрыть"
                    variant="tonal"
                    @click="errorStore.hideError"/>
            </v-card-actions>
        </template>
    </BaseDialog>
</template>

<script>
import {useErrorStore} from "../stores/error";
import BaseDialog from "./BaseDialog.vue";
export default {
    components: {BaseDialog},
    setup() {
        const errorStore = useErrorStore()

        return {errorStore}
    }
}
</script>

<style lang="scss">
#error-dialog {
    .v-overlay__content {

        .header {
            .v-toolbar {
                color: var(--vt-c-white);
                background-color: var(--primary2);
            }
        }
    }
}
</style>
