var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var peopleSchema = new Schema({
    name        : {type : String, index : true, unique : true, required : true},
    age         : {type : Number},
    email       : {type : String},
    address     : {type : String},
    image       : {type : String},
    description : {type : String}
})

mongoose.model('people', peopleSchema)
