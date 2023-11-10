<template>
    <div id="icon-text-button" class="text-center">
        <v-btn :text="title">

            <template v-if="leftIcon" v-slot:prepend>
                <v-icon :icon="leftIcon" color="success"></v-icon>
            </template>

            <template v-if="rightIcon" v-slot:append>
                <v-icon :icon="rightIcon" color="warning"></v-icon>
            </template>
        </v-btn>
    </div>
</template>

<script>

export default {
    props: {
        title: {type: String, default: 'Button'},
        leftIcon: {type: String},
        rightIcon: {type: String}
    }
}
</script>
