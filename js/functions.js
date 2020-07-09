function getDocumentProperty(ID){
    var idSelection = "#" + ID + " input";
    return $(idSelection).val();
}

function setDocumentProperty(ID, value){
    var idSelection = "#" + ID + " input";
    $(idSelection).val(value).focus().blur();
}