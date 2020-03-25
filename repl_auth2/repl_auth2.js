/*
Code created by Junhao Zhang @coder100: repl.it/@coder100
*/
var Auth = function(txt, cls, sty, win, opt){
  this.txt = txt || '<img src="https://repl.it/public/images/favicon.ico" alt="Log in with repl.it">';
  this.cls = cls || "log-in";
  this.style = sty || {
    background: "#fff",
    color: "#000",
    border: "none",
    outline: "0",
    padding: "10px",
    fontWeight: "bolder",
    fontSize: "150%",
    cursor: "pointer",
    boxShadow: "0 0 4px rgba(0, 0, 0, 0.5)"
  }; // inline css
  this.win = win || {
    modal: "yes",
    width: "500",
    height: "700",
    resizable: "no"
  }; // object format for pop-up
  this.opt = opt || {
    className: this.cls,
    id: "log-in"
  }; // attributes
  this.awin = []; // to be made into format ["x=w","y=z"]
  this.done = function(e){
    location.reload();
  }; // auth done
  this.err = function(e){
    location.reload();
  }; // auth unsuccessful
  this.domain = location.hostname; // current domain
  for(a in this.win){
    var e = this.win[a];
    this.awin.push(a+"="+e);
  }
  this.swin = this.awin.join(","); // final
}
Auth.prototype.append = function(){
  var el = document.createElement("button");
  var self = this;
  Object.assign(el.style, this.style)
  el.className = this.cls;
  el.innerHTML = this.txt;
  Object.assign(el, this.opt)
  el.addEventListener("click", function(){
    var f = window.open("https://repl.it/auth_with_repl_site?domain="+self.domain, "_blank", "modal=yes,width=500,height=700,resizable=no,"+self.swin);
    window.addEventListener("message", function(e){
      f.close();
      if(e.data != "auth_complete") self.err(e);
      else self.done(e);
    });
  });
  document.body.appendChild(el);
}
