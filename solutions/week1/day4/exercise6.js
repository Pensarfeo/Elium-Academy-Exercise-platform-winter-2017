var uniq = function(arr){
    return arr.filter(
        function onlyUnique(value, index, self) { 
            return self.indexOf(value) === index;
        }
    )
}