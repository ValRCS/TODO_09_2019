console.log("Started TODO app!");
main();


function main() {
    const app = {
        lastId : 0,
        mybtn : document.querySelector("#btn1"),
        todoCont : document.querySelector("#todos-cont")
    }

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
    newTodo.innerHTML = `
        <input type="checkbox" name="" id="j-chk-1">
        <span class="job-desc" id="j-desc-1">Buy Milk</span>
        <button class="del-btn" id="j-del-1">DELETE</button>
         `;   
    parent.appendChild(newTodo);


    //add Handlers
    //TODO 
}

