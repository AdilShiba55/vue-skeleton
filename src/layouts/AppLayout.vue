<template>
    <div id="app-layout">
        <AppSidebar>
            <template v-slot:content>
                <RouterView/>
            </template>
        </AppSidebar>
    </div>

    <ErrorDialog/>
</template>

<script>
import AppSidebar from "../components/AppSidebar.vue";
import {useAppSidebarStore} from "../stores/appSidebar";
import ErrorDialog from "../dialog/ErrorDialog.vue";
export default {
    components: {ErrorDialog, AppSidebar},
    setup() {
        const appSidebarStore = useAppSidebarStore();
        appSidebarStore.setFrames()
        appSidebarStore.setFrameByCurrentPath()
    }
}
</script>
