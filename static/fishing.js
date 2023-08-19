// ----------------
// Functions to filter data on the page.

// When filter buttons are clicked, remove the rows in the table that do not contain the input class.
function filterSelection(input) {
    var table = document.getElementById("filterDataTable");
    var tr = table.getElementsByTagName("tr");
    
    // Loop through all table rows and hide those that don't match the pressed button.
    for (var i = 1; i < tr.length; i++) { // Start from 1 to ignore header row
        if (!tr[i].classList.contains(input)) { // if the current row does not contain the input, hide it
            tr[i].style.display = "none";
        };
    }
}

// Reset all rows in the table to visible.
function filterNone() {
    var table = document.getElementById("filterDataTable");
    var tr = table.getElementsByTagName("tr");

    for (var i = 1; i < tr.length; i++) {
        tr[i].style.display = ""
    }
}

// Add or remove highlight from filter button when clicked
function listenForFilterButton() {
    var btnContainer = document.getElementById("filterBtnContainer");
    var btnGroup = btnContainer.getElementsByClassName("btnGroup");

    for (var i = 0; i < btnGroup.length; i++) { // Loop all containers
        var btns = btnGroup[i].getElementsByClassName("btn");
        for (var j = 0; j < btns.length; j++) { // Loop all buttons in container
            btns[j].addEventListener("click", function(){
                this.classList.toggle("active");
            });
        }
    }
}
// End of filter buttons
// ----------------

// Execute the below block of code once the DOM has loaded.
document.addEventListener('DOMContentLoaded', function() {
    listenForFilterButton();
    filterNone() // Ensure all the data is showing when page is loaded.
});