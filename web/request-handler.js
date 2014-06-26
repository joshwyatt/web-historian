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
      // if url is in list && url is in archive
        // download urls

      var targetUrl = req.url;
      var a = archive.readListOfUrls;
      var b = archive.isUrlInList;
      var c = archive.addUrlToList;
      var d = archive.isURLArchived;
      var e = archive.downloadUrls;

      if( a(b) ){
        if( d(targetUrl) ){
          e();
        }else{
          // return an error
        }
      }else{
        a(c);
      }

      // // if( a(b) && a(c) ){
      // if(a(b)){
      //   if(d()){
      //     //send the file contents (HTML)
      //   }
      // }else{
      //   a(c);
      // }
      //   var data = a();
      //   if( c(data) ){
      //     d(targetUrl);
      //   }

      // console.log('we have arrived HERE');
      statusCode = 200;
    }
    // }

    // OPTIONS: function(){
    //   console.log("option!");
    // }
  };

  var method = req.method;
  console.log(req.method);
  handler[method](req, res);

  res.writeHead(statusCode, headers);
  res.end(JSON.stringify(archive.paths.archivedSites));
};
