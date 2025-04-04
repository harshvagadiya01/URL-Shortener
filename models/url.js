const { timeStamp } = require('console');
const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  shortId : {
    type : String,
    required : true,
    unique : true
  },
  redirectURL : {
    type : String,
    required : true,
  },
  visitedHistory :[{timeStamp : {type : Number}}],
  createdBy : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'user'
  }
}, {timestamps : true});

const URL = mongoose.model('url', urlSchema);

module.exports = URL;