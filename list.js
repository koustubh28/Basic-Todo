var todoArray = [];
window.setTimeout(function() {
    var input = prompt("What would you like to do ?");

    while(input !== "quit") {
        if (input === "list") {
            todoList();
        } else if (input === "new") {
            todoAdd();
        } else if (input === "delete") {
            todoDelete();
        }

        //Ask again
        input = prompt("What would you like to do ?");
    }
    console.log("OKAY YOU QUIT THE APP !");

    //function to list items
    function todoList() {
        console.log("**********");
        todoArray.forEach(function(todo, i) {
            console.log(i + ": " + todo);
        });
    }

    //function to add items
    function todoAdd() {
        var addNew = prompt("Enter a new item to add");
        todoArray.push(addNew);
        console.log("Todo Added");
    }

    //function to delete items
    function todoDelete() {
        var index = prompt("Choose the index to delete todo item");
        todoArray.splice(index,1);
        console.log("Todo Deleted");    
    }

},500);