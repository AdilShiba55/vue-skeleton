<template>
    <div id="site-layout">
        <SiteToolbar/>
        <RouterView/>
    </div>
</template>
<script>
import SiteToolbar from "../components/SiteToolbar.vue";
export default {
    components: {SiteToolbar}
}
</script>
