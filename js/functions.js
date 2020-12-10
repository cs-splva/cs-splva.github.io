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

// Timing Functions

// Trigger a function (f) in intervals (time in ms)
function saveSetInterval(f,time){
	var mainInterval = setInterval(function(){ f(); },time);

	// Remember the interval Id
	localStorage.setItem('lastMainInterval',mainInterval);
}

// Check if a clock from saveSetInterval() is running and clear it
function saveClearInterval(){
	// Check for and clear any previous intervals in memory
	// If you don't do this, the intervals stack on each tab change(!)
	var lastMainInterval = localStorage.getItem('lastMainInterval');

	if (lastMainInterval != null) {
		console.log("Clearing last lastMainInterval: " + lastMainInterval);
		clearInterval(lastMainInterval); // Tidy up
	}
}

// Make #sfBusy-Overlay visible if Spotfire is busy
function sfBusyOverlay(){

	var busyIcon = $('.sfx_online_333 svg');
	var sfIsBusy = busyIcon[0].getAttribute("style") == 'display: none;';

	if(sfIsBusy == true) {
		$('#sfBusy-Overlay').css('display','block');
	} else {
		$('#sfBusy-Overlay').css('display','none');
	}
}
