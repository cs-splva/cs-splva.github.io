// Get and Set Document properties
function getDocumentProperty(ID){
    var idSelection = "#" + ID + " input";
    return $(idSelection).val();
}

function setDocumentProperty(ID, value){
    var idSelection = "#" + ID + " input";
    $(idSelection).val(value).focus().blur();
	$(idSelection).change() // Trigger change event
}

// Add and remove Classes
function addClass(ID, className) {
    var ID = "#" + ID;
    document.querySelector(ID).classList.add(className);
}

function removeClass(ID, className) {
    var ID = "#" + ID;
    document.querySelector(ID).classList.remove(className);
}