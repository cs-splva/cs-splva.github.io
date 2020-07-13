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

// Show only one ID from op group of ID's that share the same class
function onlyShow(ID,classGroup) {

	// Get all elements with class from input
	var elements = $('.'+classGroup);

	// Loop through all elements
	// If element is equal to input ID, remove class 'hidden'
	// Else add class 'hidden'
	var i;
	for (i = 0; i < elements.length; i++) {
	  var currentID = elements[i].id;
	  if(currentID == ID){
	    removeClass(currentID,'hidden');
	  } else {
	    addClass(currentID,'hidden');
	  }
	} 
}