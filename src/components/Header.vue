<template>
    <header>
        <h1>{{title}}</h1>
        <AddTaskButton
            @toggle-add-task-form="$emit('toggle-add-task-form')" 
            :text="showTaskForm? 'close' : 'add task' " 
            :color="showTaskForm? 'red': 'green'" />
    </header>
</template>



<script>
import AddTaskButton from './AddTaskButton.vue'

export default {
    name: 'Header',
    components: {
        AddTaskButton
    },
    props: {
        title: {
            type: String,
            default: 'Title'
        },
        showTaskForm: Boolean
    }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>