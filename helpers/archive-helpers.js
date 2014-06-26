var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = readListOfUrls = function(){
  fs.readFile(paths.list, 'utf-8', function (err, data) {
    if(err){
      throw err;
    }
    data = data.split('/n').pop();
    return data;
  });
};

exports.isUrlInList = function(targetUrl){
  var data = readListOfUrls();
  for(var i = 0; i < data.length; i++){
    var url = data[i];
    if(targetUrl === url){
      return true;
    }
  }
  return false;
};

exports.addUrlToList = function(data){
  fs.appendFile(paths.list, data);
};

exports.isURLArchived = function(targetUrl){
  fs.readdir(paths.archivedSites, function(err, data){
    if(err){
      throw err;
    } else {
      for(var i = 0; i < data.length; i++){
        var url = data[i];
        if(targetUrl = url){
          return true;
        }
      }
    }
    return false;
  });
};

exports.downloadUrls = function(targetURL){

  http.get(targetURL, function (err, res) {
    if (err) {
      console.error(err);
      return;
    }

    console.log(res.code, res.headers, res.buffer.toString());
  });
};
