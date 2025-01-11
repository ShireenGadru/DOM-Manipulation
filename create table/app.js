// Task Requirements
// Dynamically generate a table with headers: Name, Age, and City using JavaScript.
// Populate the table with the initial data provided in the JavaScript array.
// Implement the "Add Row" functionality:
// Read values from the input fields.
// Add a new row to the table with the provided values.
// Validate inputs (e.g., ensure no fields are empty).
// Clear the input fields after adding a row.

// Add delete button for every row

function createTable() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  ["Name", "Age", "City"].forEach((item) => {
    const th = document.createElement("th");
    th.textContent = item;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);
  document.body.appendChild(table);
}

createTable();

function handleDeleteRow(id) {
  const element = document.getElementById(id);
  const table = document.getElementsByTagName("table")[0];
  table.removeChild(element);
}

function addDataToTable(name, age, city) {
  const tr = document.createElement("tr");
  const id = Math.round(Math.random() * 1000) + "";
  tr.id = id;
  [name, age, city].forEach((item) => {
    const td = document.createElement("td");
    td.textContent = item;
    tr.appendChild(td);
  });
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete Row"
  deleteBtn.addEventListener("click", () => handleDeleteRow(id));
  tr.appendChild(deleteBtn)
  const table = document.getElementsByTagName("table")[0];
  table.appendChild(tr);
}

function handleClick() {
  const nameElement = document.getElementById("name");
  const ageElement = document.getElementById("age");
  const cityElement = document.getElementById("city");

  const name = nameElement.value;
  const age = ageElement.value;
  const city = cityElement.value;

  if (!name || !age || !city) {
    const error = document.createElement("div");
    error.id = "error";
    error.innerHTML = "Please enter all values";
    error.style.color = "red";
    document.body.appendChild(error);
    return;
  }
  const errorEl = document.getElementById("error");
  errorEl && document.body.removeChild(errorEl);
  console.log(name, age, city);
  addDataToTable(name, age, city);

  nameElement.value = "";
  ageElement.value = "";
  cityElement.value = "";
}

document.getElementById("submit").addEventListener("click", handleClick);
