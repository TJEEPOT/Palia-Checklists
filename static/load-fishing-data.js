import {tableHeaders , tableData, rowClasses} from "./fishing-data.js";
import {populateDataTableWithClasses} from "./dynamic-table.js";

// Put the fishing data into the table once the DOM has loaded.
document.addEventListener('DOMContentLoaded', function() {
    populateDataTableWithClasses(tableHeaders , tableData, rowClasses);
});