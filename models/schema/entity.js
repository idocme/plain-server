let mongoose = require('mongoose');
//var ObjectId = require('mongodb').ObjectID; //Could be used to create ObjectId(val) using set.


let entity = mongoose.Schema({
    name: { type: String, validate: validateName, maxlength: 25 },
    email: {type: String},
    _id: { type: String }
    ,
},{
  toJSON : {getters: true, setters: true},//allow setters and getters
  id: false,
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});


function validateName(name) {
    if (name.length === 0)
        throw new Error("Lineup name can't be empty.");
    if (name.length < 2 && name.length > 15)
        throw new Error("Lineup name must be between 2-15 characters.");
    if (/[{}='"@#$%^&*()_+-]/.test(name))
        throw new Error("Lineup name contains illegal characters.");
    return true;
}

const Entity = mongoose.model('Entity', entity);
module.exports = Entity; 