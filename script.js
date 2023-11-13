const inputBox = document.getElementById("input-box");
const tasklist = document.getElementById("tasklist");

function addTask(){
    if(inputBox.value === ''){
        alert("Please enter the task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        tasklist.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
    }
tasklist.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    }, false);

    function saveData(){
        localStorage.setItem("data", tasklist.innerHTML );
    }
    function showTask(){
        tasklist.innerHTML = localStorage.getItem("data");
    }
    showTask();

