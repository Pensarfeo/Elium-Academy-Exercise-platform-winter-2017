var findRed = function() {
    $("#exerciseTest").find("input[value='Red']").each(function(i, ele){
        $(ele).next().text(" the value is red!")
    })
}
