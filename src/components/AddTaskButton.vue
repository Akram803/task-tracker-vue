<template>
    <button class="btn" 
            :style="{background: color}"
            @click="$emit('toggle-add-task-form')" >
        {{text}}
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String, 
        color: String
    },
    methods: {
        addTaskClick(e) {
            console.log('clicked', e)
        }
    }
}
</script>

<style>

</style>