<template>
    <div id="test-frame1">
        <v-btn text="Show Error Dialog" @click="showErrorDialog"/>
    </div>
</template>

<script>
    import {ref} from "vue";
    import ErrorDialog from "../dialog/ErrorDialog.vue";
    import BaseDialog from "../dialog/BaseDialog.vue";
    import {useErrorStore} from "../stores/error";

    export default {
        components: {BaseDialog, ErrorDialog},
        setup() {
            const opened = ref(true)
            const errorStore = useErrorStore()
            function showErrorDialog() {
                errorStore.setError(new Error('Тест Ошибка'))
            }
            return {opened, errorStore, showErrorDialog}
        }
    }
</script>

<style lang="scss">
    #test-frame1 {
        padding: 20px;
    }
</style>
