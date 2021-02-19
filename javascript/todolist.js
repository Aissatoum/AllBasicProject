//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
//Event Listeners
// document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click', filterTodo);
//Functions
function addTodo(event){
   event.preventDefault(); 
   //todo div
   const todoDiv = document.createElement('div');
   todoDiv.classList.add('todo');
   //Create LI
   const newTodo = document.createElement('li');
   newTodo.innerText = todoInput.value;
   newTodo.classList.add('todo-item');
   todoDiv.appendChild(newTodo);
   //Add todo to localstorage
//    saveLocalTodos(todoInput.value);
   //completed mark button 
   const completedButton = document.createElement('button');
   completedButton.innerHTML = '<i class="fas fa-check"></i>';
   completedButton.classList.add('complete-btn');
   todoDiv.appendChild(completedButton);
   //completed trash button
   const trashButton = document.createElement('button');
   trashButton.innerHTML = '<i class="fas fa-trash"></i>';
   trashButton.classList.add('trash-btn');
   todoDiv.appendChild(trashButton);
   //Append todo list
   todoList.appendChild(todoDiv);
   //clear Todo Input value
   todoInput.value = "";

}
function deleteCheck(e){
const item = e.target;
//Delete todo
if(item.classList[0] === 'trash-btn'){
    const todo = item.parentElement;
    //Animation
    todo.classList.add('fall');
    todo.addEventListener('transitionend',function(){
todo.remove();
    }); 
}
//check mark
if(item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
}
}
function filterTodo(e){
const todos = todoList.childNodes;
todos.forEach(function(todo){
    switch(e.target.value){
        case "all":
            todo.style.display = "flex";
        break;
        case "completed":
            if(todo.classList.contains("completed")){
                todo.style.display = "flex";
            }else{
                todo.style.display = "none";
            }
            break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
    }
}); 
}
// function saveLocalTodos(todo){
//     let todos;
//     if(localStorage.getItem("todos") === null){
//         todos = [];
//     }else{
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }
//     todos.push(todo);
//     localStorage.setItem("todos", JSON.stringify(todos));
// }
// function getTodo(){

//     let todos;
//     if(localStorage.getItem("todos") === null){
//         todos = [];
//     }else{
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }
//    todos.forEach(function(todo){
//         //todo div
//    const todoDiv = document.createElement("div");
//    todoDiv.classList.add("todo");
//    //Create LI
//    const newTodo = document.createElement("li");
//    newTodo.innerText = todo;
//    newTodo.classList.add("todo-item");
//    todoDiv.appendChild(newTodo);
  
//    //completed mark button 
//    const completedButton = document.createElement('button');
//    completedButton.innerHTML = '<i class="fas fa-check"></i>';
//    completedButton.classList.add('complete-btn');
//    todoDiv.appendChild(completedButton);
//    //completed trash button
//    const trashButton = document.createElement('button');
//    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
//    trashButton.classList.add('trash-btn');
//    todoDiv.appendChild(trashButton);
//    //Append todo list
//    todoList.appendChild(todoDiv);

//    });
// }
// function removeLocalTodos(todos){
//     let todos;
//     if(localStorage.getItem("todos") === null){
//         todos = [];
//     }else{
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }

// }

// $(".txtb").on("keyup",function(e){
//     //13 means enter button
//     if(e.keyCode == 13 && $(".txtb").val() != "")
//     {
//        var task = $("<div class='task'></div>").text($(".txtb").val());
//        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
//            var p = $(this).parent();
//           p.fadeOut(function(){
//                p.remove();
//            });
//        });

//        var check = $("<i class='fas fa-check'></i>").click(function(){
//         var p = $(this).parent();
//         p.fadeOut(function(){
//             $(".comp").append(p);
//             p.fadeIn();
//         });
//         $(this).remove();
//        });
//        task.append(del,check);
//        $(".notcomp").append(task);
//        //to clear the input
//        $(".txtb").val("");
//     }
// });