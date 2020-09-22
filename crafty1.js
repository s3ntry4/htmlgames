Crafty.init(900,500, document.getElementById('game'));
      Crafty.defineScene("level1, function() {
      var player = Crafty.e('2D, DOM, Color, Twoway, Gravity, Collision')
        .attr({x: 0, y: 0, w: 40, h: 40})
        .color("#F00")
        .twoway(150)
        .gravity("Floor")
        .onHit('Goal', function(hitDatas){Crafty.enterScene("end");})
	.gravityConst(750);
        
      Crafty.e('Floor, 2D, Canvas, Color')
        .attr({x: 0, y: 250, w: 250, h: 10})
        .color('green');
      
      var coolman = Crafty.e('Floor, 2D, Canvas, Color')
        .attr({x: 460, y: 250, w: 200, h: 10})
        .color('green');
	      
      Crafty.e('Goal, 2D, Canvas, Color')
        .attr({x: 700, y: 250, w: 250, h: 10})
        .color('blue');
      player.origin("center");
      player.bind('UpdateFrame', function(){
        if(player.y>500){
          player.y = 0;
          player.x=0;
        }
      });
      
      
      var dogvar=0
      coolman.bind('UpdateFrame', function(){
        coolman.y+=dogvar;
        if(coolman.y>300){
          //dogvar = -1;
        }
        if(coolman.y<100){
          //dogvar=1;
        }
      });
			
      });
      
      
      Crafty.defineScene("title", function() {
        Crafty.e("2D, DOM, Text")
          .attr({ w: 400, h: 20, x: 150, y: 120 })
          .textFont({size: '30px'})
          .text("Click the red square in the corner")
          .textAlign("center")
          .textColor("#000");
        var titleButton = Crafty.e('2D, Canvas, Color, Mouse')
          .attr({x: 0, y: 0, w: 40, h: 40})
          .color('red')
          .bind('Click', function(MouseEvent){
            Crafty.enterScene("level1");
          });
      });
      
      Crafty.defineScene("end", function() {
        Crafty.e("2D, DOM, Text")
          .attr({ w: 200, h: 20, x: 150, y: 120 })
          .textFont({size: '30px'})
          .text("You Won!")
          .textAlign("center")
          .textColor("#000");
      });
      
      Crafty.enterScene("title");
