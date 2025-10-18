const listValue = document.getElementById("task");



function addTask(){
    try{
        const task = listValue.value.trim();
        // Create li element
        const li = document.createElement("li");

        // Set the text content of the created list item to user input
        li.textContent= "Task: " + task;

        // Display message if content is empty
        if(li.textContent === "Task: " + ""){
            window.alert("You must enter something!")
            return;
        }

        // Select the ul HTML element
        const addUl = document.querySelector("ul");

        // Create a new HTML button element
        const deleteBtn = document.createElement("button");
        deleteBtn.className="deleteBtn"
        // Set the text content of the button to Delete item
        deleteBtn.textContent=(`Delete`);
        // Delete li item when button is clicked
        deleteBtn.addEventListener("click", function() {
            li.remove();
        });

        const markDoneBtn = document.createElement("button");
        markDoneBtn.className = "markDoneBtn"
        markDoneBtn.textContent = (`Done`);
        markDoneBtn.addEventListener("click" , function(){
            li.classList = ("completed");
            li.textContent = "Task: " + task + " " + "completed";
            deleteBtn.remove();
        });

        // Append the newly created HTML li element to the ul element
        addUl.appendChild(li);
        // Append the newly created HTML button element to the created li element
        li.appendChild(deleteBtn);
        li.appendChild(markDoneBtn);

        // clear the input
        listValue.value = "";


    }catch(error){
        window.alert(error);
    }
}