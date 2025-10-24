let cartItemsContainerEl = document.getElementById("cartItemsContainer");
let inputListEl = document.getElementById("cartItemTextInput");



function addButton() {
    let listEl = document.createElement("li");
    listEl.textContent = inputListEl.value;
    listEl.style.color = "Blue";
    listEl.classList.add("cartitem");
    cartItemsContainerEl.appendChild(listEl);
    
    inputListEl.value = "";
}
