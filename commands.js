var fs = require('fs');
var request = require('request');

var exports = module.exports = {
  pwd: function(done,file){
      done(process.cwd());
    },
  date: function(done,file){
    done(Date());
  },
  ls: function(done,file){
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      var str = "";
      files.forEach(function(file) {
        str+=file.toString() + "\n";
      });
      done(str);
    });
  },
  echo: function(done,file){
    done(file);
  },
  cat: function(done,file){
    fs.readFile(file, function(err,data){
      if (err) throw err;

      done(data);
    });
  },
  head: function(done,file){
    fs.readFile(file, {encoding: "utf-8"},function(err,data){
      if (err) throw err;
      done(data.split("\n").slice(0,5).join("\n"));
    });
  },
  tail: function(done,file){
    fs.readFile(file, {encoding: "utf-8"},function(err,data){
      if (err) throw err;
      done(data.split("\n").slice(-5).join("\n"));
    });
  },
  sort: function(done,file){
     fs.readFile(file, {encoding: "utf-8"},function(err,data){
      if (err) throw err;
      done(data.split("\n").sort().join("\n"));
    });
  },
  wc: function(done,file){
    fs.readFile(file, {encoding: "utf-8"},function(err,data){
      if (err) throw err;
      done(data.split("\n").length.toString());
    });
  },
  uniq: function(done,file){
     fs.readFile(file, {encoding: "utf-8"},function(err,data){
      if (err) throw err;
      var results = [];
      var newData = data.split("\n");
      for (var i = 0; i < newData.length; i++){
        if (newData[i] !== newData[i+1]) results.push(newData[i]);
        if (i === newData.length-1) results.push(newData[newData.length-1])
      }
      done(results.join("\n"));
    });
  },
  curl: function(done,urlName){
    request("https://www." + urlName, function(error,response,body){
      done(response.body);
    });
  }
};

//curl http://www.google.com























