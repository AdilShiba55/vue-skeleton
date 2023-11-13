<template>
    <v-dialog
        :id="id"
        class="base-dialog"
        :persistent="true"
        :model-value="opened"
        transition="dialog-bottom-transition"
        width="auto"
        @click:outside="$emit('click-outside')">
        <v-card>
            <div class="header">
                <slot name="header">
                    <v-toolbar :title="title"/>
                </slot>
            </div>
            <div class="content">
                <slot name="content">
                    <v-card-text>
                        <div class="text-h2 pa-12">Default Content</div>
                    </v-card-text>
                </slot>
            </div>
            <div class="footer">
                <slot name="footer">
                    <div>Default Footer</div>
                </slot>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>

import {ref, toRefs} from "vue";

export default {
    props: {
        id: {type: String, default: 'base-dialog'},
        title: {type: String, default: 'BaseDialog'}
    },
    setup() {
        const opened = ref(true)

        return {opened}
    }
}

</script>

<style lang="scss">
    .v-dialog.base-dialog {
        .v-overlay__content {
            min-width: 350px;
            max-height: unset;
            .v-card {
                overflow-y: hidden;
            }
        }
        .header {
            border-bottom: 1px solid #dee2e6;
        }
        .content {
            overflow-y: auto;
        }
        .footer {
            border-top: 1px solid #dee2e6;
        }
        .content {
            padding: 20px;
        }
    }
</style>
