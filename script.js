let taskInput = document.getElementById("task-input")
let addButton = document.getElementById("add-button")
let tabs = document.querySelectorAll(".task-tabs div")
let taskList = []
let mode = 'all'
let filterList = []

filter = (event) =>{    
    filterList = []
    mode = event.target.id
    if(mode === "all"){
        //전체 리스트
        render()
    }
    else if(mode === "ongoing"){
        //진행 중 아이템
        //iscomplete false
        for(let i = 0; i<taskList.length; i++){
            if(taskList[i].isComplete === false){
                filterList.push(taskList[i])
            }
        }
        render()
    }
    else if(mode === "done"){
        //끝난 아이뎀
        //iscomplete true
        for(let i = 0; i<taskList.length; i++){
            if(taskList[i].isComplete === true){
                filterList.push(taskList[i])
            }
        }
        render()
    }
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
                filter({target:{id: mode}})
            break
        }
    }
    render()

}

render = () =>{
    //내가 선택한 탭에 따라서 리스트르 달리 보여준다
    let list = []
    
    //ongoing, done filterList
    if(mode === 'all'){
        //all taskList
        list = taskList
    }
    else if(mode === "ongoing"){
        //ongoing, done filterList
        list = filterList
    }
    else if(mode === "done"){
        list = filterList
    }
    let resultHTML = ''
    for(let i = 0; i < list.length; i++){
        if(list[i].isComplete ===  true){
            resultHTML += `<div class="task">
            <div class='task-done'>${list[i].taskContent}</div>
            <div>
              <button onclick="toggleComplete('${list[i].id}')">Check</button>
              <button onclick="deleteTask('${list[i].id}')">Delete</button>
            </div>
          </div>`
        }
        else{
            resultHTML += `<div class="task">
            <div>${list[i].taskContent}</div>
            <div>
              <button onclick="toggleComplete('${list[i].id}')">Check</button>
              <button onclick="deleteTask('${list[i].id}')">Delete</button>
            </div>
          </div>`
        }        
    }
    document.getElementById("task-board").innerHTML = resultHTML
}

addButton.addEventListener("click", addTask)
