<template>
    <header>
        <h1>{{title}}</h1>
        <AddTaskButton
            v-show="isHomePage"
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
    },
    computed:{
        isHomePage(){
            if(this.$route.path ==='/')
                return true
            else
                return false
        }
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