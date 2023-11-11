<template>
    <div id="app-sidebar">
        <v-layout>
            <AppToolbar/>

            <v-navigation-drawer
                v-if="appSidebarStore.isSidebarOpened"
                disable-resize-watcher
                theme="light">
                <v-list density="compact">
                    <v-list-item v-for="(item, index) in appSidebarStore.getFrames"
                                 :title="item.title"
                                 :prepend-icon="item.icon"
                                 :active="isCurrentFrame(item)"
                                 @click="appSidebarStore.setFrame(item)"/>
                </v-list>
            </v-navigation-drawer>

            <v-main class="app-content" :class="{'sidebar-closed':!appSidebarStore.isSidebarOpened}">
                <slot name="content"/>
            </v-main>
        </v-layout>
    </div>
</template>

<script>
    import {useAppSidebarStore} from "../stores/appSidebar";
    import AppToolbar from "./AppToolbar.vue";

    export default {
        components: {AppToolbar},
        setup() {
            const appSidebarStore = useAppSidebarStore();
            function isCurrentFrame(frame) {
                const currentFrame = appSidebarStore.getCurrentFrame
                return frame.path === currentFrame.path
            }
            return {appSidebarStore, isCurrentFrame}
        }
    }
</script>

<style lang="scss">
    #app-sidebar {
        .v-main.app-content {
            width: 100%;
            position: fixed;
            overflow-y: auto;
            top: 0;
            bottom: 0;
            color: var(--color-text-black);
        }
        .v-navigation-drawer {
            width: var(--app-sidebar-width) !important;
            &__content {}
        }
    }
</style>
