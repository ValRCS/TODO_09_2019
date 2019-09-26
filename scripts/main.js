console.log("Started TODO app!");
//app holds our global state
const app = {
    jobId : 0,
    mybtn : document.querySelector("#btn1"),
    todoCont : document.querySelector("#todos-cont")
};
main();


function main() {
 


    //we create an event handler for add button
    app.mybtn.onclick = (event) => {
        console.log("You pressed Add!");
        const inputField = document.querySelector("#myinput");
        console.log("Input value is: " + inputField.value);

        //Add New TODO 
        addTodo(app.todoCont, inputField.value);
    }
}


function addTodo(parent, value) {
    //Create New Todo
    const newTodo = document.createElement("div");
    newTodo.classList.add("job-cont-"+app.jobId);
    newTodo.innerHTML = `
        <input type="checkbox" name="" id="j-chk-${app.jobId}">
        <span class="job-desc" id="j-desc-${app.jobId}"></span>
        <button class="del-btn" id="j-del-${app.jobId}">DELETE</button>
         `;  
    //newTodo only has one span      
    const jdesc = newTodo.querySelector("span");
    jdesc.innerText = value;

    parent.appendChild(newTodo);

    
    
    //TODO move updating to separate function
    app.jobId++;

    //add Handlers
    //TODO 
}

