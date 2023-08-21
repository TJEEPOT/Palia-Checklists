// Generic function to simply create a table from the given header and data.
function populateDataTable(tableHeaders, tableData) {
    var tableHeaderRow = document.getElementById("table-header");
    for (var i = 0; i < tableHeaders.length; i++) {
        var th = document.createElement("th");
        th.textContent = tableHeaders[i];
        tableHeaderRow.appendChild(th);
    }

    var table = document.getElementById("filterDataTable").getElementsByTagName("tbody")[0];
    for (var i = 0; i < tableData.length; i++) {
        var row = table.insertRow(i);

        for (var j = 0; j < tableHeaders.length; j++) {
            var cell = row.insertCell(j);
            var header = tableHeaders[j];

            if (tableData[i].hasOwnProperty(header)) {
                cell.textContent = tableData[i][header];
            } else {
                cell.textContent = "N/A";
            }
        }
    }
}

// Specialised function to add the data as class names to each table row.
function populateDataTableWithClasses(tableHeaders, tableData, rowClasses) {
    var tableHeaderRow = document.getElementById("table-header");
    for (var i = 0; i < tableHeaders.length; i++) {
        var th = document.createElement("th");
        th.textContent = tableHeaders[i];
        tableHeaderRow.appendChild(th);
    }

    var table = document.getElementById("filterDataTable").getElementsByTagName("tbody")[0];
    for (var i = 0; i < tableData.length; i++) {
        var row = table.insertRow(i); // Create a row in the table for this item of data

        // Add the data to this cell.
        for (var j = 0; j < tableHeaders.length; j++) {
            var cell = row.insertCell(j);
            var header = tableHeaders[j];
            var data = tableData[i][header]
            
            if (tableData[i].hasOwnProperty(header)) {
                cell.textContent = data;
            } else {
                cell.textContent = "N/A";
            }
            if (rowClasses.includes(header)){
                if (typeof(data) !== "string"){
                    data.forEach(e => {
                        e.replaceAll(" ", "_");
                        row.classList.add(e);
                    })
                }
                else{
                    var noWhitespaceData = data.replaceAll(" ", "_");
                    row.classList.add(noWhitespaceData);
                }
            }
        }
    }
}

export {populateDataTable, populateDataTableWithClasses};