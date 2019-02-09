window.onload = function () {
    let btnAdd = document.getElementById('btnAdd')
    let btnClear = document.getElementById('btnClear')
    let btnSort = document.getElementById('btnSort')
    let inpNewTask = document.getElementById('inpNewTask')
    let taskList = document.getElementById("taskList")
  
    let tasks = []
  
    function refreshList () {
      taskList.innerHTML = ""
      for (let i in tasks) {
        
        let task = tasks[i]
        let li = document.createElement('li')
        li.className = "list-group-item"
        let div = document.createElement('div')
        div.className = task.done ? "row done" : "row"
  
        let span = document.createElement('span')
        span.innerText = task.name
        span.className = "col py-1"
        let up=document.createElement('i')
        let btnup=document.createElement('button')
        btnup.className="btn btn-secondary col-2 mx-2"
        let btndown=document.createElement('button')
        btndown.className="btn btn-secondary col-2 mx-2"
        up.className="fas fa-angle-up"
        let down=document.createElement('i')
        down.className="fas fa-angle-down"
        let liBtnDone = document.createElement('button')
        liBtnDone.innerText = task.done ? "❌" : "✔️"
        liBtnDone.className = "btn btn-info col-2 mx-2"
        let liBtnDelete = document.createElement('button')
        liBtnDelete.innerText = "DELETE"
        liBtnDelete.className = "btn btn-danger col-2 mx-2"
  
        liBtnDone.onclick = function () {
          task.done = !task.done
          refreshList()
        }
        liBtnDelete.onclick = function () {
          tasks.splice(i, 1)
          refreshList()
        }
        btnup.onclick=function(){
           let t1=tasks.splice(i,1,tasks[i-1]);
           tasks.splice(i-1,1,t1[0])
           refreshList()
        }

        btndown.onclick=function(){
          let q=tasks[parseInt(i)+1]
          console.log(tasks)
          console.log(q)
          let t2=tasks.splice(i,1,q);
          console.log(q)
          tasks.splice(parseInt(i)+1,1,t2[0])
          console.log(tasks)
          refreshList()
       }
       
        div.appendChild(span)
        btnup.appendChild(up)
        btndown.appendChild(down)
        if(i!=0)
        div.appendChild(btnup)
        if(i!=tasks.length-1)
        div.appendChild(btndown)
        div.appendChild(liBtnDone)
        div.appendChild(liBtnDelete)
        
  
        li.appendChild(div)
        taskList.appendChild(li)
  
      }
    }
  
    refreshList()
  
    function sortList () {
      tasks.sort(function (a, b) {
        return a.done - b.done
      })
      refreshList()
    }
  
    function clearList() {
      tasks = tasks.filter(function (t) {
        return !t.done
      })
      refreshList()
    }
  
    function addTask() {
      console.log(tasks)
      let taskName = inpNewTask.value
      tasks.push({
        name: taskName,
        done: false
      })
      inpNewTask.value = ""
      refreshList()
    }
  
    btnAdd.onclick = function () {
      addTask()
    }
    inpNewTask.onkeyup = function (ev) {
      if (ev.keyCode == 13) {
        addTask()
      }
    }
  
    btnSort.onclick = function () {
      sortList()
    }
  
    btnClear.onclick = function () {
      clearList()
    }
  }