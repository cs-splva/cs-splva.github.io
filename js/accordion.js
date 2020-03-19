$( ".accordion" ).accordion({
collapsible: true, heightStyle: 'content',
  activate: function(event, ui) {

 

        $(".sf-input-with-placeholder").width("86.5%");
        $(".ListContainer").width("200px");
        $(".ListContainerScroll").width("194px");
        $(".Image").css("left","197px");        
        $(".sfc-scrollable").width("192px");
        $(".ListContainerScroll .HorizontalScrollbarContainer").width("178px");
        $(".ListContainerScroll .VerticalScrollbarContainer").css("left","180px");
        $(".ListContainerScroll .VerticalScrollbarContainer").css("top","0px");

 

        $(".sf-element-list-box .ScrollArea").width("178px");

 

        $(".ListItems .sf-element-list-box-item").width("166px");
        //*/
        // Refresh dropdown-list sizes by interacting with a dummy, hidden element (workaround!)
        $("#refreshWrapper input").val(Math.random()); // look for id(#) refreshWrapper and element tag input and fill in a random value using Math.random()
        $("#refreshWrapper input").focus(); // focus on the control to make it active.
        $("#refreshWrapper input").blur(); // blur acts as pressing Return as user and triggers the update in the property control.
                
 }
});

 

$(".sf-input-with-placeholder").width("86.5%");
$('.ui-accordion-content').css({
       "padding":"5px",
       "text-align":"left",
       "font-size":"10.5px",
       'font-family': 'Segoe UI',
       "overflow":"hidden",
       "background":"#FFFFFF",
       "border":"none",
});

 

$('.ui-accordion-header').css({
       'color':'#FFF',
       'font-family': 'Segoe UI',
       'font-size':'14px',
       'font-weight':'bold',
       'background':'#00A1DE',
       'border':'none',
       'padding-top':"5px",
       'padding-bottom':"5px",

 

});