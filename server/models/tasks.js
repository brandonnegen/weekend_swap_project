var mongoose = require('mongoose');
var TaskSchema = new mongoose.Schema({
    message : String,
    complete : Boolean
});

module.exports = mongoose.model('tasks', TaskSchema);