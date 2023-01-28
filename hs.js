var tableBody = document.querySelector("#tableBody");

renderTable();
function renderTable() {
  // clear out the TableBody
  tableBody.innerHTML = "";
  // get the array out of storage
  const arrayFromStorage = JSON.parse(localStorage.getItem("scoreArray"));

  for (let index = 0; index < arrayFromStorage.length; index++) {
    // loop over the array
    const element = arrayFromStorage[index];
