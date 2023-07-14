document.addEventListener("DOMContentLoaded", () => {
  //Submit Button
  document.getElementById("create-task-form").addEventListener('submit', (e) => {
    e.preventDefault()
    addToDo(e.target.newTaskDescription.value)
  })
  //Function to append to ToDo List
  function addToDo(ToDo){
    const li = document.createElement("li")
    li.innerHTML = ToDo
    document.getElementById("tasks").append(li)
  }
});


