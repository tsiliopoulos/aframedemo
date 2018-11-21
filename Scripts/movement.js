

(function onPress()
{
    var x = 0;
    var y = 0;
    var z = 0;
    
    document.addEventListener('keydown', function(event) {
        var model = document.getElementById("spider");
        
        if (model.hasAttribute("position")){
           var pos = x.toString() + " " + y.toString() + " " + z.toString();
           x = x + 1;
           y = y + 1;
           z = z + 1;
           model.setAttribute("position", pos);
           console.log(x);
           console.log(y);
           console.log(z);
        }
                   
        });
}
)();