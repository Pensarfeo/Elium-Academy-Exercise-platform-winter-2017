var findbyAttr = function(){
    $("#exerciseTest").find("[id$='tutorial']").each(function(i, ele){
        $(ele).css({backgroundColor: "yellow"})
    })
}