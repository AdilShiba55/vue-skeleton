<template>
    <v-menu
        transition="slide-y-transition">
        <template v-slot:activator="{ props }">
            <v-btn
                v-bind="props"
                :text="languageStore.currentLanguage.title"
                append-icon="mdi-triangle-small-down"/>
        </template>
        <v-list>
            <v-list-item
                v-for="(item, i) in languageStore.languages"
                @click="languageStore.setLanguage(item)"
                :active="languageStore.currentLanguage.id === item.id"
                :key="i">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
    import {useLanguageStore} from "../stores/language";

    export default {
        setup() {
            const languageStore = useLanguageStore()
            return {languageStore}
        }
    }
</script>
