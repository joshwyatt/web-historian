var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  var statusCode = 404;

  var handler = {
  	POST: function(req, res){

  	},
  	GET: function(req, res){
		statusCode = 200;
  	},
  	OPTIONS: function(){}
  };

  var method = req.method;
  console.log(req.method);
  handler[method](req, res);

  res.end(statusCode, archive.paths.list);
};
