
var model_spider;
var model_man;


window.onload = function onPress()
{
    var x = 0;
    var y = 0;
    var z = 0;
    var movement = 0.1
    
    document.addEventListener('keydown', function(event) {
        model_spider = document.getElementById("spider");
        model_man = document.getElementById("main");
        
        if (model_spider.hasAttribute("position")){
           var pos_spider = x.toString() + " " + y.toString() + " " + z.toString();
           x = x + movement;
           y = y + movement;
           z = z + movement;
           model_spider.setAttribute("position", pos_spider);
        }
                   
        });
}