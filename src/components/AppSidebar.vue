<template>
    <div id="app-sidebar">
        <v-layout>
            <AppToolbar/>

            <v-overlay v-if="UtMobile.isMobile()"
                       :model-value="appSidebarStore.isSidebarOpened"
                       z-index="4"
                       persistent
                       @click="appSidebarStore.changeSidebarVisibility"/>

            <v-navigation-drawer
                v-if="appSidebarStore.isSidebarOpened"
                theme="light"
                permanent>
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
    import {UtMobile} from "../util/UtMobile";

    export default {
        components: {AppToolbar},
        setup() {
            const appSidebarStore = useAppSidebarStore();
            function isCurrentFrame(frame) {
                const currentFrame = appSidebarStore.getCurrentFrame
                return frame.path === currentFrame.path
            }
            return {appSidebarStore, isCurrentFrame, UtMobile}
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

            div {
                min-width: var(--app-minimum-width);
            }
        }
        .v-navigation-drawer {
            width: var(--app-sidebar-width) !important;
            &__content {}
        }
    }
</style>
