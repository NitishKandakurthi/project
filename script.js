function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === "") {
        alert("Please enter a task!");
    } else {
        var li = document.createElement("li");
        var taskText = document.createElement("span");
        var text = document.createTextNode(input);
        taskText.appendChild(text);
        li.appendChild(taskText);
        document.getElementById("taskList").appendChild(li);
        document.getElementById("taskInput").value = "";

        taskText.onclick = function() {
            this.parentElement.classList.toggle("completed");
        };

        var closeButton = document.createElement("span");
        var closeText = document.createTextNode("\u00D7");
        closeButton.className = "close";
        closeButton.appendChild(closeText);
        li.appendChild(closeButton);

        closeButton.onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }
}
//end
