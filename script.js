// Get the input box and the list container from HTML
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task when "Add" button is clicked
function addTask() {
    // Check if the input box is empty
    if (inputBox.value === "") {
        // Show alert if nothing is typed
        alert("You must write something!");
    } else {
        // Create a new <li> element for the task
        let li = document.createElement("li");
        // Put the typed text inside the <li>
        li.innerHTML = inputBox.value;
        // Add the new task to the list
        listContainer.appendChild(li);
        
        // Create a delete button (× symbol)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // This is the × character
        // Add the × button to the task item
        li.appendChild(span);
    }
    
    // Clear the input box after adding
    inputBox.value = "";
    // Save the updated list to browser storage
    saveData();
}

// Listen for clicks on the task list
listContainer.addEventListener("click", function(e) {
    // If clicked on the task text (<li>)
    if (e.target.tagName === "LI") {
        // Toggle "checked" class to mark as done/undone
        e.target.classList.toggle("checked");
        saveData();  // Save changes
    }
    // If clicked on the × button (<span>)
    else if (e.target.tagName === "SPAN") {
        // Remove the entire task
        e.target.parentElement.remove();
        saveData();  // Save changes
    }
}, false);

// Function to save the list to browser's localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to load saved tasks when page opens
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Load any saved tasks right away
showTask();