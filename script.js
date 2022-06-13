"use strict";

const themeChanger = document.getElementById("switch");
let themecont = 1;

themeChanger.addEventListener("click", change);

function change() {
  let lightIcon = document.getElementById("theme-changer");
  if (themecont == 1) {
    document.documentElement.setAttribute("data-theme", "light-theme");
    lightIcon.src = "images/icon-moon.svg";
    themecont = 2;
  } else if (themecont == 2) {
    document.documentElement.removeAttribute("data-theme", "light-theme");
    lightIcon.src = "images/icon-sun.svg";
    themecont = 1;
  }
}

function newTodo() {
  let itemData = document.createElement("div");
  let inputFeild = document.getElementById("WTF");
  let inputValue = inputFeild.value;
  let check = document.createElement("input");
  let closeBtn = document.createElement("img");

  closeBtn.setAttribute("id", "closeBtn");
  closeBtn.src = "images/icon-cross.svg";

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
}

document.getElementById("WTF").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    newTodo();
    itemInfo();
  }
});

function itemInfo() {
  let itemContainer = document.getElementById("myUl").childElementCount;
  let infoBox = document.getElementById("info-box");

  infoBox.innerHTML = itemContainer + " " + "items left";
}

// function checker() {
//   let itemContainer = document.getElementById("myUl");
//   let checkitems = document.querySelector("input[name='checkBox']");
//   for (checkitems in itemContainer) {
//     if (checkitems.checked == true) {
//       itemContainer.childElementCount -= 1;
//     }
//     // {
//     //   checkitemsconsitemContainerent = o[key];
//     // }
//   }

//   console.log(itemContainer.childElementCount);
//   let infoBox = document.getElementById("info-box");

//   infoBox.innerHTML = itemContainer.childElementCount + " " + "items left";
// }
// function checker() {
//   let itemsDet = document.getElementById("check");
//   let itemContainer = document.getElementById("myUl");
//   itemContainer.forEach(check => {
//     if (itemsDet.checked == true) {
//       console.log(2);
//     } else if (itemsDet.checked == false) {
//       console.log(1);
//     }
//   });
// }

// function checker() {
//   let itemsDet = document.getElementById("check");
//   let itemContainer = document.getElementById("myUl").childElementCount;
//   let infoBox = document.getElementById("info-box");
//   let checkedItems = itemContainer.itemsDet.checked;

//   if (itemsDet.checked == true) {
//     checkedItems = itemContainer.itemsDet.checked;
//     itemContainer -= checkedItems;

//     console.log(itemContainer);
//   } // } else if (itemsDet.checked == false) {
//   //   itemContainer += 1;
//   //   console.log(itemContainer);
//   // }
// }
