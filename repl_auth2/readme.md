# Get started
Pretty simple
```javascript
new Auth([text, [class, [style, [window, [option]]]]])
[.append()]
[.done = e => callback for when authentication is successful. e is the callback data]
[.err = e => callback for when authentication is unsuccessful. e is the callback data]
```

## `Auth.append()`
Creates a button that opens up a pop-up to a log in prompt;

## Arguments
`STRING` - Text is the `innerHTML` of the button.
`OBJECT` - Style is the inline style of the button.
`OBJECT` - Window is the `window.open()` options.
`OBJECT` - Option is the attributes of the button e.g. `data-auth="1"`.

## Example
```js
// initialize
var authBtn = new Auth('Log in with <a href="https://repl.it/">repl.it</a>', "log-in", {
  background: "red",
  color: "#fff"
}, {
  top: 500,
  left: 500,
  width: 200,
  height: 300
});

// handler for when authentication is successful
authBtn.done = function(data){
  alert(data);
  location.reload();
};

// handler for when authentication is unsuccessful
authBtn.err = function(err){
  alert(err);
  location.reload();
};

// add to html
authBtn.append();
```
