// ----------------
// Functions to filter data on the page.

// When filter buttons are clicked, remove the rows in the table that do not contain the input class.
function filterSelection(buttonElement) {
    // Toggle the active status of the button
    buttonElement.classList.toggle("active");

    // Find which classes should be matched
    var filterAvoidList = classesToNotMatch()
    var filterMatchList = classesToMatch()

    // Toggle the visibility of each row based on which buttons are currently active.
    var trs = $("#filterDataTable tr")
    changeRowVisibility(trs, filterAvoidList, filterMatchList)
}

// Create a list of the ids of all classes where only ONE in the group MUST be matched (active "Appears" buttons)
function classesToMatch(){
    var btns = $("#filterBtnContainer > .filterAppears > .btn.active"); 
    return btns.map(function() { return this.id; }).get();
}

// Create a list of the ids of all classes which should NOT be matched on (inactive buttons)
function classesToNotMatch(){
    var btns = $("#filterBtnContainer > .btnGroup:not(.showAll,.filterAppears) > .btn:not(.active)"); 
    return btns.map(function() { return this.id; }).get();
}

// Change the display status of each given row to ensure only the rows we have filters enabled for are visible
function changeRowVisibility(rowList, avoidList, matchList){
    for (var i = 1; i < rowList.length; i++) { // Start from 1 to ignore header row
        var presentOnAvoidList = false
        var missingFromMatchList = true
        // For each class name in the current row, check if it's present on the avoidList or absent from the matchList.
        for (var j = 0; j < rowList[i].classList.length; j++){
            if (avoidList.includes(rowList[i].classList[j])){
                presentOnAvoidList = true;
                break
            }

            if (matchList.includes(rowList[i].classList[j])){
                missingFromMatchList = false;
            }
        }
        if (!presentOnAvoidList && !missingFromMatchList){
            rowList[i].style.display = "";
        }
        else{
            rowList[i].style.display = "none";
        }
    }
}

// Reset all rows in the table to visible and reset all filter buttons to active.
function filterNone() {
    // Reset table rows.
    $("#filterDataTable tr").map(function() {this.style.display = ""});

    // Reset filter buttons.
    var btns = $("#filterBtnContainer > .btnGroup:not(.showAll) > .btn:not(.active)");
    btns.map(function() {this.classList.add("active")});
}
// End of filter buttons
// ----------------

// Execute the below block of code once the DOM has loaded.
document.addEventListener('DOMContentLoaded', function() {
    filterNone() // Ensure all the data is showing when page is loaded.
});