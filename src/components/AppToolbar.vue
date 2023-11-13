<template>
    <v-app-bar id="app-toolbar">
        <div class="content">
            <div class="left-sidebar">
                <v-btn @click="appSidebarStore.changeSidebarVisibility"
                       class="sidebar-toggle-btn"
                       plain>
                    <v-icon icon="mdi-menu"/>
                </v-btn>
            </div>
            <div class="left"></div>
            <div class="right">
                <change-language-dropdown/>
            </div>
        </div>
        <v-progress-linear v-if="siteStore.isBusy"/>
    </v-app-bar>
</template>

<script>
import {useSiteStore} from "../stores/site";
import IconTextButton from "./IconTextButton.vue";
import {useAppSidebarStore} from "../stores/appSidebar";
import ChangeLanguageDropdown from "./ChangeLanguageDropdown.vue";

export default {
    components: {
        ChangeLanguageDropdown,
        IconTextButton
    },
    setup() {
        const siteStore = useSiteStore();
        const appSidebarStore = useAppSidebarStore()
        return {siteStore, appSidebarStore}
    }
}
</script>

<style lang="scss">
#app-toolbar {
    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--color-background-mute);
        width: 100%;
        min-height: 64px;
        color: var(--color-text-white);

        .v-btn {
            font-size: var(--font-size-small);
            text-transform: none;
            font-weight: 500;
        }

        .left-sidebar, .left, .right {
            display: flex;
            align-items: center;
        }

        .left-sidebar {
            width: var(--app-sidebar-width);
            justify-content: space-between;
            padding-left: 16px;
            .sidebar-toggle-btn {
                min-width: unset;
                color: var(--color-text-black);
                background-color: var(--color-text-white);
            }
        }

        .left {
            gap: 30px;
            span {
                font-weight: 500;
            }
        }

        .right {
            justify-content: right;
            font-size: var(--font-size-small);
            width: 30%;
            gap: 10px;
            padding-right: 16px;
        }
    }
}
</style>
