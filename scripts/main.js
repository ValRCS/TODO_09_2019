console.log("Started TODO app!");
//app holds our global state
const app = {
    jobId : 0,
    mybtn : document.querySelector("#btn1"),
    todoCont : document.querySelector("#todos-cont"),
    getBtn : document.querySelector("#btn0"),
    jobsUrl : "https://jsonplaceholder.typicode.com/todos",
    inputField : document.querySelector("#myinput")
};
main();

function main() {
     //we create an event handler for add button
    app.mybtn.onclick = (event) => {
        console.log("You pressed Add!");
        console.log("Input value is: " + app.inputField.value);

        //Add New TODO 
        addTodo(app.todoCont, app.inputField.value);
    }

    // app.inputField.onchange this will fire on any commitment 
    //meaning click outside, enter key, click on button outside etc
    //so we will use specific keyboard event

    app.inputField.onkeydown = function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
          // Cancel the default action, if needed
          console.log("You Pressed Enter");
          event.preventDefault();
          // Trigger the button element with a click
          app.mybtn.click();
        }
      };

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


    //create a loop to add first 20 jobs, can remove && i < 20 when done testing
    for (let i=0; i < json.length && i < 20; i++) {
        addTodo(app.todoCont, json[i].title);
    }

}


function addTodo(parent, value) {
    //Create New Todo
    const newTodo = document.createElement("div");
    newTodo.classList.add("job-cont-"+app.jobId);
    //using backticks for some string interpolation
    newTodo.innerHTML = `
        <input type="checkbox" name="" id="j-chk-${app.jobId}">
        <label class="job-desc" id="j-desc-${app.jobId}"></label>
        <button class="del-btn" id="j-del-${app.jobId}">DELETE</button>
         `;  
    //newTodo only has one label
    
    //value could be malicious so we only use innerText not innerHTML!!
    const jdesc = newTodo.querySelector("label");
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

