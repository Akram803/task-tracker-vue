<template>
  
    <AddTaskForm
        v-show="showTaskForm" 
        @add-task="addTask" />

    <Tasks 
        :tasks='tasks'
        @toggle-reminder="toggleReminder"
        @delete-task="deleteTask" />


</template>


<script>
import Tasks from '../components/Tasks.vue'
import AddTaskForm from '../components/AddTaskForm.vue'
import {
  getTasks,
  getTask, 
  createTask,
  deleteTask,
  updateTask
} from '../api.js'


export default {
    name: 'Home',
    props:{
        showTaskForm: Boolean
    },
    components: {
      AddTaskForm,
      Tasks,
  },  
  data(){
      return {
          tasks: [],
      }
  },
  methods:{
      async addTask(task){
        this.tasks.push(
          await createTask(task)
        )
      },

      async deleteTask(id){
          if(confirm('are you sure')){
              (await deleteTask(id))? 
                this.tasks = this.tasks.filter((task)=> task.id !== id)
                :
                alert('backend error')
          }
      },
      
      async toggleReminder(id){
        let task = this.tasks.find((t)=> t.id === id )
        task.reminder = !task.reminder

        task = await updateTask(task)
      },

      getTasks,
      getTask,
      createTask
  },
  async created(){
    this.tasks = await this.getTasks()
  }
}
</script>
