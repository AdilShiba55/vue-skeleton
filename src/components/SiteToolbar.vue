<template>
    <v-toolbar id="site-toolbar">
        <div class="content">
            <div class="left">
                <img src="data:image/png;base64,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"/>
            </div>
            <div class="right">
                <change-language-dropdown/>
                <v-btn variant="outlined" text="Личный кабинет"/>
            </div>
        </div>
        <v-progress-linear v-if="siteStore.isBusy"/>
    </v-toolbar>
</template>

<script>
    import {useSiteStore} from "../stores/site";
    import IconTextButton from "./IconTextButton.vue";
    import ChangeLanguageDropdown from "./ChangeLanguageDropdown.vue";

    export default {
        components: {
            ChangeLanguageDropdown,
            IconTextButton
        },
        setup() {
            const siteStore = useSiteStore();
            return {siteStore}
        }
    }
</script>

<style lang="scss">
    #site-toolbar {
        .content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: var(--color-background-mute);
            padding: 0 80px 0 80px;
            width: 100%;
            min-height: 64px;
            color: var(--color-text-white);

            .v-btn {
                font-size: var(--font-size-small);
                text-transform: none;
                font-weight: 500;
            }

            .left {
                display: flex;
                align-items: center;
                width: 70%;
                gap: 30px;
                span {
                    font-weight: bold;
                }
                img {
                    width: 80px;
                }
            }

            .right {
                display: flex;
                align-items: center;
                justify-content: right;
                font-size: var(--font-size-small);
                width: 30%;
                gap: 10px;
            }
        }
    }
</style>
