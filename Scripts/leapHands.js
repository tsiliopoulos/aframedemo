
var camera;
var hand_left;
var hand_right;
var main;

var hand_left_controller;
var controller;

window.onload = function(){

    window.controller = new Leap.Controller;
    window.controller.use('riggedHand');
    window.controller.connect();

    camera = document.querySelector("mainChar"); //Choosing camera object



    controller = Leap.loop(function(frame){

        if (!camera){
            camera = document.querySelector("#camera");
        }

        if (!hand_left && !hand_right){
            hand_left = document.getElementById("hand_left");
            hand_right = document.getElementById("hand_right");
        }
        if(frame.hands.length > 0)
        {
            hand_left_controller = frame.hands[0];
            hand_left_pos = hand_left_controller.palmPosition;
            

            var x = camera.object3D.getWorldPosition.x;
            var y = camera.object3D.getWorldPosition.y;
            var z = camera.object3D.getWorldPosition.z;
        
            //console.log(camera.object3D.getWorldPosition());
            hand_left.object3D.position = camera.object3D.getWorldPosition();

        }
    });
}