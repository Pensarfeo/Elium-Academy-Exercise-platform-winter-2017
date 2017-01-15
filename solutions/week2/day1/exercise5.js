var protouniverse = function (val){
    this.tot = 0
}
//asdf
protouniverse.prototype.destroy = function(type, val){
    var elementSign = (val === "matter" ? -1 : 1) 
    console.log("destroy", this.tot, type, val, this.tot + ( val * elementSign ))
    this.tot = this.tot - ( val * elementSign )
}

protouniverse.prototype.create = function(type, val){
    var elementSign = (val==="matter" ? -1 : 1) 
    console.log("create", this.tot, type, val, this.tot, elementSign ,( val * elementSign ))
    this.tot = this.tot + ( val * elementSign )
}


protouniverse.prototype.total = function(val){
    var elementSign = (val==="matter" ? -1 : 1) 
    return this.tot * elementSign
}