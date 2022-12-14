const mongoose =  require('mongoose');
// Cree le exclusivite pour le utilisateur
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    email: { type: String , require: true , unique:true},
    password: { type : String , require: true}
})

userSchema.plugin(uniqueValidator)


module.exports = mongoose.model('User' , userSchema)