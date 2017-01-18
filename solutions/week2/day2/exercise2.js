var findLi = function() {
    $("#exerciseTest").find("[name='color']").each(function(i, ele){
        $(ele).next().append("<span> with no color </span>")
    })
}
