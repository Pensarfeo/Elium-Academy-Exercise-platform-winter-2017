var findDirect = function(){
    $("#exerciseTest").find("form").children().each(function(i, ele){
        if($(ele).is("label")) {
            $(ele).css({border: "1px dotted red"})
        }
        
    })
}