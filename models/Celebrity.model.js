//  Add your code here

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema ({

    name: String,
    occupation: String,
    catchPhrase: String,

});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;

//Don't forget to export the model. 2. In the Celebrity.model.js model file:
