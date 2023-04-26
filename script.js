"use strict";

const themeChanger = document.getElementById("switch");
let themecont = 1;

themeChanger.addEventListener("click", change);

function change() {
  document.body.classList.toggle("light");
  let lightIcon = document.getElementById("theme-changer");
  if (themecont == 1) {
    lightIcon.src = "images/icon-moon.svg";
    themecont = 2;
  } else if (themecont == 2) {
    lightIcon.src = "images/icon-sun.svg";
    themecont = 1;
  }
}
function itemInfo() {
  let itemContainer = document.getElementById("myUl").childElementCount;
  let infoBox = document.getElementById("info-box");
  let checkboxes = document.getElementsByClassName("checkboxes");
  let checkedCount = 0;

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkedCount++;
    }
  }

  infoBox.innerHTML = itemContainer - checkedCount + " items left";
}

document.addEventListener("click", function(event) {
  if (event.target.classList.contains("closeBtn")) {
    let itemData = event.target.parentNode;
    itemData.remove();
    itemInfo();
  }
});

document.addEventListener("change", function(event) {
  if (event.target.classList.contains("checkboxes")) {
    itemInfo();
  }
});

function newTodo() {
  let itemData = document.createElement("div");
  let inputFeild = document.getElementById("WTF");
  let inputValue = inputFeild.value;
  let check = document.createElement("input");
  let closeBtn = document.createElement("img");

  closeBtn.setAttribute("class", "closeBtn");
  closeBtn.setAttribute("id", "closeBtn");
  closeBtn.setAttribute("src", "images/icon-cross.svg");

  itemData.setAttribute("class", "itemData");
  check.setAttribute("type", "checkbox");
  check.setAttribute("class", "checkboxes");
  check.setAttribute("name", "checkBox");
  check.setAttribute("onclick", "checker()");
  let li = document.createElement("li");
  let listContent = document.createTextNode(inputValue);

  check.setAttribute("id", "check");
  itemData.appendChild(check);
  itemData.appendChild(li);
  itemData.appendChild(closeBtn);
  li.appendChild(listContent);
  if (inputValue == "") {
    alert("input box is empty");
  } else {
    document.getElementById("myUl").appendChild(itemData);
    inputFeild.value = "";
  }
  itemInfo();
}

document.getElementById("WTF").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    newTodo();
  }
});

const allBtn = document.getElementById("all");
allBtn.addEventListener("click", function() {
  const listItems = document.querySelectorAll(".itemData");

  listItems.forEach(function(item) {
    item.style.display = "flex";
  });
});

const activeBtn = document.getElementById("active");

activeBtn.addEventListener("click", function() {
  const checkboxes = document.querySelectorAll(".checkboxes");

  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      checkbox.parentNode.style.display = "none";
    } else {
      checkbox.parentNode.style.display = "flex";
    }
  });
});

const completedBtn = document.getElementById("completed");

completedBtn.addEventListener("click", function() {
  const checkboxes = document.querySelectorAll(".checkboxes");

  checkboxes.forEach(function(checkbox) {
    if (!checkbox.checked) {
      checkbox.parentNode.style.display = "none";
    } else {
      checkbox.parentNode.style.display = "flex";
    }
  });
});

const clearCompletedBtn = document.getElementById("clear");
clearCompletedBtn.addEventListener("click", function() {
  const completedItems = document.querySelectorAll(
    ".itemData input[type='checkbox']:checked"
  );
  completedItems.forEach(item => item.parentNode.remove());
  itemInfo();
});
