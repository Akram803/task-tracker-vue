
// === get tasks ===
async function getTasks(){
    return await (
      await fetch('/api/tasks')
    ).json()
}

async function createTask(task){
    const res = await fetch('api/tasks',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(task),
    })

    return await res.json()
    
}

async function deleteTask(id){
    const res = await fetch(`api/tasks/${id}`,{
        method: 'DELETE',
    })
    return res.ok
}

async function updateTask(task){
    const res = await fetch(`api/tasks/${id}`,{
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: task
    })
    return await res.json()
}

// === task by task ===
async function getTask(id){ 
    return await (
        await fetch(`/api/tasks/${id}`)
    ).json()
}







export { 
    getTasks, 
    getTask, 
    createTask,
    deleteTask,
    updateTask
}

