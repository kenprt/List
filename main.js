let addButton = document.getElementById("addToShopping");
let container = document.getElementById("listcontainer");
let inputField = document.getElementById("inputField");

addButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    container.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        container.removeChild(paragraph);
    })
})