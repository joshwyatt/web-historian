var path = require('path');
var archive = require('../helpers/archive-helpers');
var headers = require('./http-helpers.js').headers;
var url = require('url');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  var statusCode = 404;

  var handler = {
    POST: function(req, res){

    },
  	GET: function(req, res){
      console.log("req.url: " + req.url);
      // console.log("req.url: "+ url.parse(req.url).pathname)

      // if url is in list && url is in archive
        // download urls

      // var targetUrl = req.url;
      // console.log("url method output:"+ req.data);
      // var a = archive.readListOfUrls;
      // var b = archive.isUrlInList;
      // var c = archive.addUrlToList;
      // var d = archive.isURLArchived;
      // var e = archive.downloadUrls;

      // if( a(targetUrl , b) ){
      //   if( d(targetUrl) ){
      //     e();
      //   }else{
      //     // return an error
      //   }
      // }else{
      //   a(c);
      // }

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
  handler[method](req, res);

  res.writeHead(statusCode, headers);
  var indexHTML = archive.readIndex(function(data){
    return res.end(JSON.stringify(data));
  });

};
