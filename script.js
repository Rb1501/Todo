 function addTodo() {

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    const parent = document.createElement("div");

    const child1 = document.createElement("div");
    child1.innerHTML = title;
    parent.appendChild(child1);

    const child2 = document.createElement("div");
    child2.innerHTML = description;
    parent.appendChild(child2);

    const child3 = document.createElement("button");
    child3.innerHTML = "Mark as done";
    parent.appendChild(child3);

    const child4 = document.createElement("button");
    child4.innerHTML = "Edit";
    parent.appendChild(child4);

    const child5 = document.createElement("button");
    child5.innerHTML = "Delete";
    parent.appendChild(child5);

    child3.setAttribute("onclick", "markAsDone(this)");
    child4.setAttribute("onclick", "editTodo(this)");
    child5.setAttribute("onclick", "deleteTodo(this)");


    document.getElementById("container").appendChild(parent);
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";

}

function markAsDone(button){
       if(button.innerHTML === "Mark as done"){
        button.innerHTML = "done";
    }else{
        button.innerHTML = "Mark as done";
    }
}
function editTodo(button){
    const parent = button.parentElement;

    const title = parent.children[0];
    const description = parent.children[1];
    const newTitle = prompt("enter the title:",title.innerHTML);
    if(newTitle != null){
        title.innerHTML = newTitle;
    }
    const newDescription = prompt("enter the discription:",description.innerHTML);
    if(newDescription != null){
        description.innerHTML = newDescription;
    }




}
function deleteTodo(button){
    const parent = button.parentElement;
    parent.remove();

}
 