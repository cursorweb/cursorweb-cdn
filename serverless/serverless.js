/**
  * Serverless.js by coder100
  */
function Serverless(opt){
  this.opt = opt || {};
}
Serverless.prototype.logIn = function(password){
  this.opt.auth = password;
}
Serverless.prototype.site = function(site){
  this.opt.site = site;
}
Serverless.prototype.get = function(site, opt){
  var req = new XMLHttpRequest();
  req.onload = opt;
  req.open("GET", this.opt.site+site);
  req.setRequestHeader("auth", this.opt.auth);
  req.send();
}
Serverless.prototype.post = function(site, data, opt){
  var req = new XMLHttpRequest();
  req.open("POST", this.opt.site+site);
  req.onload = opt;
  req.setRequestHeader("auth", this.opt.auth);
  req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  req.send(data);
}
Serverless.encodeJSON = function(json){
  var output = [];
  for(var i in json){
    output.push(i+"="+json[i]);
  }
  return output.join("&");
}
