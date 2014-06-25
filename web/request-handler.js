var path = require('path');
var archive = require('../helpers/archive-helpers');
var headers = require('./http-helpers.js').headers;
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  var statusCode = 404;

  var handler = {
  	POST: function(req, res){

  	},
  	GET: function(req, res){
		statusCode = 200;
    archive.readListOfUrls();
  	},
  	OPTIONS: function(){}
  };

  var method = req.method;
  console.log(req.method);
  handler[method](req, res);

  res.writeHead(statusCode, headers);
  console.log(archive.paths.list);
  res.end(JSON.stringify(archive.paths.archivedSites));
};
