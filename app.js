let input = document.getElementById("input");
let ul = document.getElementById("ul");
let i = 1;


function add() {
    if (input.value == "") {
        window.alert("Please enter task");
    } else {
        const node = document.createElement("li");
        const del = document.createElement("button");
        del.setAttribute("id", "remove");
        node.setAttribute("id", "item");
        del.innerHTML = "X";
        const txt = input.innerHTML;
        node.innerHTML = i + ". " + input.value;
        i++;
        ul.appendChild(node);
        node.appendChild(del);
        input.value = '';
        
        del.addEventListener("click", () => {
            node.style.display = "none";
          window.alert("Do you want to delete this task?");
        })
}

}