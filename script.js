let taskInput = document.getElementById("task-input")
let addButton = document.getElementById("add-button")
let tabs = document.querySelectorAll(".task-tabs div")
let taskList = []



filter = (event) =>{
    console.log("event")
}

for(let i=1; i<tabs.length; i++){
    tabs[i].addEventListener("click", (event)=>{filter(event)})
}

randomIDGenerate = () =>{
    return '_' + Math.random().toString(36).substr(2, 9);
}

addTask = () =>{    
    let task = {
        id:randomIDGenerate(),
        taskContent: taskInput.value,
        isComplete: false
    }
    taskList.push(task)
    render()

}
toggleComplete = (id) =>{
    console.log(id)
    for(let i = 0; i<taskList.length; i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete
            break
        }
    }
    render()
}

deleteTask = (id) =>{
    console.log(id)
    for(let i = 0; i<taskList.length; i++){
        if(taskList[i].id == id){
            taskList.splice(i, 1)
            break
        }
    }
    render()

}

render = () =>{
    let resultHTML = ''
    for(let i = 0; i < taskList.length; i++){
        if(taskList[i].isComplete ===  true){
            resultHTML += `<div class="task">
            <div class='task-done'>${taskList[i].taskContent}</div>
            <div>
              <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
              <button onclick="deleteTask('${taskList[i].id}')">Delete</button>
            </div>
          </div>`
        }
        else{
            resultHTML += `<div class="task">
            <div>${taskList[i].taskContent}</div>
            <div>
              <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
              <button onclick="deleteTask('${taskList[i].id}')">Delete</button>
            </div>
          </div>`
        }        
    }
    document.getElementById("task-board").innerHTML = resultHTML
}

addButton.addEventListener("click", addTask)
