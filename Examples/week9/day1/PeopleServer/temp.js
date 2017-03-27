
// One Universe
function Universe (val){
    this.type = (val==="matter" ? -1 : 1)
}

Universe.prototype.destroy = function(val){
    this.__proto__.element = (this.__proto__.element || 0 ) - ( val * this.type )
}

Universe.prototype.create = function(val){
    this.__proto__.element = (this.__proto__.element || 0 ) + ( val * this.type )
}

Universe.prototype.total = function(val){
    console.log(this.type * this.__proto__.element )
}



var Matter = new Universe("matter")
var Energy = new Universe("energy")

Matter.destroy(5)
Energy.destroy(5)

Matter.total()
Energy.total()

// Generated Universe
function protoUniverse(){
    this.element = 0
}

protoUniverse.make = function(){
    function Universe (val){
        //protoUniverse.call(this)
        this.type = (val==="matter" ? -1 : 1)
    }
    Universe.prototype = new protoUniverse
    var unis = {}

    unis.Matter = new Universe("matter")
    unis.Energy = new Universe("energy")
    return unis
}


protoUniverse.prototype.destroy = function(val){
    return this.__proto__.element = (this.__proto__.element || 0 ) - ( val * this.type )
}

protoUniverse.prototype.create = function(val){
    return this.__proto__.element = (this.__proto__.element || 0 ) + ( val * this.type )
}

protoUniverse.prototype.total = function(val){
    console.log(this.type * this.__proto__.element )
}

var Universe = protoUniverse.make()
/*
console.log(Universe.Matter.create(5))
console.log(Universe.Energy.create(-5))

Universe.Matter.total(5)
Universe.Energy.total(5)
*/

Multiverse(cb) {
    var onCreate = cb || function(){}
    var id = Math.floor(101 * Math.random())
    if(this.universes[id]){
        onCreate(this.universes[id], id)
    } else {
        this.universes[id] = this.protoUniverse.make()
        onCreate(this.universes[id], id)
    }
}
Multiverse.universes ={}
Multiverse.protoUniverse = protoUniverse


new Multiverse()