console.log("Started TODO app!");
//app holds our global state
const app = {
    jobId : 0,
    mybtn : document.querySelector("#btn1"),
    todoCont : document.querySelector("#todos-cont"),
    getBtn : document.querySelector("#btn0"),
    jobsUrl : "https://jsonplaceholder.typicode.com/todos"
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

    app.getBtn.onclick = () => {
        console.log("You pressed get Jobs Button!");
        fetch(app.jobsUrl)
            .then(response => response.json())
            .then(json => addJobs(json))
    }
}

function addJobs(json) {
    console.log("Ready to add " + json.length + " jobs");

    console.log("Adding",json[0]);

    addTodo(app.todoCont, json[0].title);
}


function addTodo(parent, value) {
    //Create New Todo
    const newTodo = document.createElement("div");
    newTodo.classList.add("job-cont-"+app.jobId);
    //using backticks for some string interpolation
    newTodo.innerHTML = `
        <input type="checkbox" name="" id="j-chk-${app.jobId}">
        <span class="job-desc" id="j-desc-${app.jobId}"></span>
        <button class="del-btn" id="j-del-${app.jobId}">DELETE</button>
         `;  
    //newTodo only has one span  
    
    //value could be malicious so we only use innerText not innerHTML!!
    const jdesc = newTodo.querySelector("span");
    jdesc.innerText = value;

    parent.appendChild(newTodo);

    const delBtn = newTodo.querySelector(".del-btn");

    delBtn.onclick = function(event) {
        console.log("removing parent of element with id"+this.id);

        //if we use arrow function this will not be available for button
        //this.parentElement.remove();

        //careful with event if possible bubbling
        event.target.parentElement.remove();

        //third way would be get id of the element 
        // parse that id and use that id to get needed element
        //such as .job-cont-myid
    }
  
    const chkBox = newTodo.querySelector('[type="checkbox"]');

    chkBox.onclick = function(event) {

        //const jDesc = event.target.nextElementSibling;
        
        // trickier alternative using id and splitting our id
        const id = event.target.id.split("-")[2];
        const descId = "#j-desc-"+id;
        const jDesc = document.querySelector(descId);

        if (event.target.checked) {
            //console.log("nextSibling"+event.target.nextSibling.id);
            jDesc.style.textDecoration = "line-through";
        } else {
            jDesc.style.textDecoration = "none";
        }

    }
    
    //TODO move updating to separate function
    app.jobId++;

    //add Handlers
    //TODO 
}

