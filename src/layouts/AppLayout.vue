<template>
    <div id="app-layout">
        <AppSidebar>
            <template v-slot:content>
                <RouterView/>
            </template>
        </AppSidebar>
    </div>
</template>

<script>
import AppSidebar from "../components/AppSidebar.vue";
import {useAppSidebarStore} from "../stores/appSidebar";
export default {
    components: {AppSidebar},
    setup() {
        const appSidebarStore = useAppSidebarStore();
        appSidebarStore.setFrames()
        appSidebarStore.setFrameByCurrentPath()
    }
}
</script>
