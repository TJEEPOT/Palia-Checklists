import {tableHeaders , tableData } from './data.js';

var tableHeaderRow = document.getElementById('table-header');
for (var i = 0; i < tableHeaders.length; i++) {
    var th = document.createElement('th');
    th.textContent = tableHeaders[i];
    tableHeaderRow.appendChild(th);
}

var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
for (var i = 0; i < tableData.length; i++) {
    var row = table.insertRow(i);

    for (var j = 0; j < tableHeaders.length; j++) {
        var cell = row.insertCell(j);
        var header = tableHeaders[j];

        if (tableData[i].hasOwnProperty(header)) {
            cell.textContent = tableData[i][header];
        } else {
            cell.textContent = 'N/A';
        }
    }
}
