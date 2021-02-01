const mongoose = require('mongoose');
const {Schema} = mongoose;

const profileSchema = new Schema({
    name: String,
    sport: String,
    gender: String,
    dateOfBirth : String,
    description: String,
    location : String,
    team : String
})

mongoose.model('profiles', profileSchema);