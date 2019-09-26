console.log("Started TODO app!");

const mybtn = document.querySelector("#btn1");

//we create an event handler for add button
mybtn.onclick = (event) => {
    console.log("You pressed Add!");
    const inputField = document.querySelector("#myinput");
    console.log("Input value is: " + inputField.value);

    //Add New TODO 
    const todoCont = document.querySelector("#todos-cont");

    addTodo(todoCont, inputField.value);
}

function addTodo(parent, value) {
    const newTodo = document.createElement("div");
    newTodo.innerText = value;   
    parent.appendChild(newTodo);
}

