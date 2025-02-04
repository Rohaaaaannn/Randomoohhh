let items = [];

function addItem() {
    let input = document.getElementById("itemInput");
    let item = input.value.trim();
    if (item) {
        items.push(item);
        let list = document.getElementById("itemList");
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
        input.value = "";
    }
}

function selectRandom() {
    let resultElement = document.getElementById("result");
    if (items.length > 0) {
        let randomIndex = Math.floor(Math.random() * items.length);
        let selectedItem = items[randomIndex];
        resultElement.textContent = "Selected: " + selectedItem;
        resultElement.style.color = "#28a745";
        resultElement.style.fontWeight = "bold";
    } else {
        alert("Please add some items first.");
    }
}
