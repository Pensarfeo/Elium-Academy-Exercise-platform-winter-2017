var insideOut= function(obj, swap){
    let properlyFormatted = true
    const jbo = {}
    for(ele in swap) {
        properlyFormatted = properlyFormatted && (swap[ele] === true || swap[ele] === false)
        swap[ele] ? (jbo[obj[ele]] = ele) : (jbo[ele] = obj[ele]) 
    }
    if (!properlyFormatted){
        console.log('improperly formatted swapping map')
        return
    }
    return jbo

}