const lists = [
  { title: "Life Tasks", id: "lifeJobsList", items: [] },
  { title: "Works Tasks", id: "workJobsList", items: [] },
  { title: "Shopping", id: "shoppingList", items: [] },
];

function addTask(listId, inputId, listIndex) {
  var text = document.getElementById(inputId).value;
  displayAndSaveTask(listId, text, listIndex);
  document.getElementById(inputId).value = "";
}

function displayAndSaveTask(listId, text, listIndex) {
  lists[listIndex].items.push(text);
  var newItem = document.createElement("div");
  newItem.innerHTML = text;
  newItem.onclick = function () {
    removeTask(listId, newItem, listIndex);
  };
  document.getElementById(listId).appendChild(newItem);
  saveLists();
}

function removeTask(listId, newItem, listIndex) {
  var text = newItem.innerHTML;
  var itemIndex = lists[listIndex].items.indexOf(text);
  lists[listIndex].items.splice(itemIndex, 1);
  document.getElementById(listId).removeChild(newItem);
  saveLists();
}

function saveLists() {
  localStorage.setItem("savedLists", JSON.stringify(lists));
}

function loadLists() {
  var jsonList = localStorage.getItem("savedLists");
  var savedLists = JSON.parse(jsonList);
  savedLists.forEach((list, listIndex) => {
    list.items.forEach((item) => {
      if (list.id) {
        displayAndSaveTask(list.id, item, listIndex);
      }
    });
  });
}
loadLists();
