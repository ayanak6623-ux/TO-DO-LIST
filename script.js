const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.querySelector("button");

addButton.addEventListener("click", addTask);

inputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
function addTask() {
  const task = inputBox.value.trim();

  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  li.textContent = task;

  listContainer.appendChild(li);

  inputBox.value = "";
  saveData();
}
