if (localStorage.storedLifeList) {
  loadLists();
}
if (localStorage.storedWorkList) {
  loadLists();
}
if (localStorage.storedShoppingList) {
  loadLists();
}

function addLifeTask() {
  var newItem = document.createElement("div");
  newItem.innerHTML = document.getElementById("lifeJobsItem").value;
  newItem.onclick = removeLifeTask;
  document.getElementById("lifeJobsList").appendChild(newItem);
  document.getElementById("lifeJobsItem").value = "";
  saveLists();
}

function addWorkTask() {
  var newItem = document.createElement("div");
  newItem.innerHTML = document.getElementById("workJobsItem").value;
  newItem.onclick = removeWorkTask;
  document.getElementById("workJobsList").appendChild(newItem);
  document.getElementById("workJobsItem").value = "";
  saveLists();
}
function addShoppingItem() {
  var newItem = document.createElement("div");
  newItem.innerHTML = document.getElementById("shoppingListItem").value;
  newItem.onclick = removeShoppingItem;
  document.getElementById("shoppingList").appendChild(newItem);
  document.getElementById("shoppingListItem").value = "";
  saveLists();
}

function removeLifeTask() {
  document.querySelector("#lifeJobsList").removeChild(this);
  saveLists();
}
function removeWorkTask() {
  document.querySelector("#workJobsList").removeChild(this);
  saveLists();
}
function removeShoppingItem() {
  document.querySelector("#shoppingList").removeChild(this);
  saveLists();
}

//TODO: refactor with querySelectorAll

function saveLists() {
  localStorage.storedLifeList = document.querySelector(
    "#lifeJobsList"
  ).innerHTML;
  localStorage.storedWorkList = document.querySelector(
    "#workJobsList"
  ).innerHTML;
  localStorage.storedShoppingList = document.querySelector(
    "#shoppingList"
  ).innerHTML;
}

function loadLists() {
  document.querySelector("#lifeJobsList").innerHTML =
    localStorage.storedLifeList;
  for (var i = 0; i < lifeJobsList.children.length; i++) {
    lifeJobsList.children[i].onclick = removeLifeTask;
  }
  document.querySelector("#workJobsList").innerHTML =
    localStorage.storedWorkList;
  for (var i = 0; i < workJobsList.children.length; i++) {
    workJobsList.children[i].onclick = removeWorkTask;
  }
  document.querySelector("#shoppingList").innerHTML =
    localStorage.storedShoppingList;
  for (var i = 0; i < shoppingList.children.length; i++) {
    shoppingList.children[i].onclick = removeShoppingItem;
  }
}
