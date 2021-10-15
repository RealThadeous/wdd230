const input = document.getElementById("favchap");
const button = document.getElementsByTagName("button")[0];
const list = document.getElementsByClassName("list")[0];


button.addEventListener('click', () => {
let li = document.createElement('li');
li.textContent = input.value;
let deleteButton = document.createElement('button');
deleteButton.textContent = "❌";
li.appendChild(deleteButton);
list.appendChild(li);
input.value = "";
deleteButton.addEventListener('click', () => {
    list.removeChild(li);
    input.focus();
});
});