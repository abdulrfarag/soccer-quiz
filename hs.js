var tableBody = document.querySelector("#tableBody");

renderTable();
function renderTable() {
    console.log('render table')
  // clear out the TableBody
  tableBody.innerHTML = "";

  // get the array out of storage
  const arrayFromStorage = JSON.parse(localStorage.getItem("scoreArray"));

  for (let index = 0; index < arrayFromStorage.length; index++) {
    // loop over the array
    const element = arrayFromStorage[index];

    // create a TR for each entry
    var tr = document.createElement("tr");

    tr.innerHTML = `<td>${index + 1}</td><td>${element.initials}</td><td>${
      element.score
    }</td>`;

    //append the TR to the tablebody
    tableBody.appendChild(tr);
  }
}