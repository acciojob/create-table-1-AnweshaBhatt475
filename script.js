function insert_Row() {
    // Get the table element by its ID
    var table = document.getElementById("sampleTable");

    // Create a new row
    var newRow = table.insertRow(0); // Insert at the top (index 0)

    // Create two new cells in the new row
    var newCell1 = newRow.insertCell(0);
    var newCell2 = newRow.insertCell(1);

    // Set the text content of the new cells
    newCell1.innerHTML = "New Cell1";
    newCell2.innerHTML = "New Cell2";
}
