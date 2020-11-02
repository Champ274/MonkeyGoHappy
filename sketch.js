var monkey,monkeyanimation;
var bananagroup,bananaimg;
var Obstaclesgroup,obstacleimg;
//var stone,stoneimg;
var game,gimg
var bg,bgimg;
var score;
var bananagroup;
var score2;
var ground;
var PLAY,END,gamestate;
function preload(){
   monkeyanimation=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
bananaimg=loadImage("Banana.png")
//stoneimg=loadImage("stone.png")
bgimg=loadImage("jungle2.jpg")
obstacleimg=loadImage ('stone.png') 
 // gimg=loadImage('gameOver.png')
}

function setup() {
  createCanvas(400, 400);
 bg=createSprite(20,20,20,20)
  bg.addImage(bgimg)
  monkey=createSprite( 60,250,20,20);
  monkey.addAnimation("m1",monkeyanimation);
  monkey.scale=0.08;
//banana=createSprite(300,190,600,4);
 //banana.scale=.08
// banana.addImage(bananaimg);
  ground=createSprite(210,260,440,10)
  
  ground.visible=false
  score=0
  score2=0
   ObstaclesGroup=new Group();
  bananagroup=new Group();
 game=createSprite(20,20,20,20)
  //game=addImage(gimg)
 // stone=createSprite(200,250,20,20)
  //stone.addImage(stoneimg)
 // stone.scale=0.25
  game.visible=false
}

function draw() {
  background(220);
  if( gamestate===PLAY){
   if(bg.x<0){
      bg.x=bg.width/2
    }
      bg.velocityX=-2
 
  monkey.collide(ground)
   if (keyDown("space")&&monkey.y>200){
monkey.velocityY=-10;  
  }
  monkey.velocityY=monkey.velocityY+0.8
   //  score=score+Math.round(getFrameRate()/60);
    if(monkey.isTouching(bananagroup)){
      bananagroup.destroyEach()
      score2=score2+10;
     
     
   }
     if(monkey.isTouching(ObstaclesGroup)){
     ObstaclesGroup.destroyEach()
       score2=score2-20
      // gamestate='END'
     //  monkey.velocityX =0
     //  banana.velocityX=0
     //  game.visible=true;
     //  text"("gameover",200,200);
      }
    switch(score2){
        
      case 50:monkey.scale=0.1;
        break;
        case 100:monkey.scale=0.13 
        break;
         default:break;
  
    }
    
  drawSprites();
  spawnBananas();
    spawnObstacles();
    //text("score"+score,320,10);
    text("score:"+score2,220,30);
   
  }
}
function spawnBananas(){
    if ( frameCount % 60 === 0) {
    var banana = createSprite(200,220,40,10);
   
    banana.addImage(bananaimg);
     banana.scale = 0.05;
     banana.velocityX = -5;
    banana.y=random(130,170)
     //assign lifetime to the variable
     banana.lifetime = 200;
    bananagroup.add(banana)
    //adjust the depth
  //   banana.depth = monkey.depth;
    // banana.depth = monkey.depth + 1;
   // bg.depth=banana.depth+1
    }

  
}

function spawnObstacles(){
  if(frameCount% 100 ===0){
    var obstacle = createSprite(300,280,10,40);
    obstacle.velocityX = -10;
   
    
    obstacle.addImage(obstacleimg);
     obstacle.scale = 0.25;
    obstacle.lifetime=200
    
     ObstaclesGroup.add(obstacle);
    
    
    
  }
  
  
}