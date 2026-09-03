const para=document.querySelector("p")
console.log(para)

const form=document.querySelector("task-form");
const counter=document.querySelector("#counter");
const tasklist=document.querySelector("#task-list");
const box=document.querySelector(".task-text")
const list=document.querySelector("#task-list");
const input=document.querySelector("#task-input")


console.log(input.value)

function updateCounter(){
    const tasks=tasklist.querySelectorAll(".task")

const outstandingTask=tasklist.querySelectorAll(".task:not(.completed)"
    
).length;
counter.textContent=outstandingTasks;
}
 form.addEventListener("submit",function(event){
    event.preventDefault();
    const taskText=input.value.trim();
    if(taskText===""){
        return;
    }
    const li=document.createElement("li");
    li.classList.add("task");
    const span=document.createElement("span");
    span.textContent=taskText;
    const doneButton=document.querySelector("button");
    doneButton.textContent="Done";
    doneButton.classList.add("toggle-btn");
    const deleteButton=document.createElement("button");
    deleteButton.textContent="Delete";
    deleteButton.classList.add("delete-btn");
    li.appendChild(span);
    li.appendChild(doneButton);
    li.appendChild(deleteButton);
    tasklist.appendChild(li);
    

});

tasklist.addEventListener("click", function (event){
    if (event.target.classList.contains("toggle-btn")){
        const task=event.target.closest(".task");
        task.classList.toggle("completed");
        updateCounter()
    }
    if (event.target.contains("delete-btn"));
    const task=event.target.closest(".task");
task.remove();
updateCounter();

});


tasklist.classList




const button=document.querySelector(".tase-btn")

 button.addEventListener("click",function pop(e){
    console.log("hello world")
}
);
list.addEventListener("click",function(event){
    console.log("clicked:", event.target);
 })
 list.addEventListener("click", function(event){
    if (event.target.matches(".delete-btn")){
         event.target.closest("li").remove();
    } });


 
//  const list =document.querySelector("#tase-btn");
//  list.addEventListener("click", function (hello ){
//      console.log("clicked:", event.target);
//  });





counter.textContent="changed element"
box.textContent="testing"
 console.log(para)
// HOW TO CREATE AN ELEMENT AND ADD AN ELEMENT
// creating a variable and naming it


// const item=document.createElement("li");

// item.className="task"
// item.textContent="Read a chapter"

// document.querySelector("#task-list").appendChild(item)
// const item=document.createElement("li");

// item.className="span"
// item.textContent="Wokeup"

// document.querySelector("#task-list").appendChild(item)

// button.addEventListener("click",function popup(e){
//     console.log("hello world")
// })


// const list =document.querySelector("#task-list");
// list.addEventListener("click", function (Event){
//     console.log("clicked:", event.target);
// });

 

