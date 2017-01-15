Universe= {
    total: 0,
    Energy: {
        destroy: function(val){
            Universe.total -= val
        },
        create: function(val){
            Universe.total += val
        },
        total: function() {
            Universe.total
        }
    }
}


Universe.Matter = {
    destroy: Universe.Energy.create,
    create: Universe.Energy.destroy,
    total: function() {
        Universe.total * -1
    }
}
