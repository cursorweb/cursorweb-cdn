/** 
 * Created by coder100 on repl.it
 * NOTE: You need jquery
 */
if(window.$){
  var bestButton = {
    styles: {},
    init: function(){
      for(i in bestButton.styles){
        var style = bestButton.styles[i];
        $('.btn-'+i)
        .css({
            color: style[0].color || "#fff",
            background: style[0].background
          })
        .hover(
          function(){
            $(this).css({
              color: style[1].color || style[0].color || "#fff",
              background: style[1].background
            })
          },
          function(){
            $(this).css({
              color: style[0].color || "#fff",
              background: style[0].background
            })
          }
        )
      }
    }
  };
}else{
  console.log("Please install jQuery for bestbutton to work.");
}
