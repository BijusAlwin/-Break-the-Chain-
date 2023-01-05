
var  vac,vacIMG,vacGroup
var PLAY= 1
var END = 0
var gameState = PLAY
var score = 0
var you
var obstacle,obstacleGroup,obstacleIMG
var sky,skyIMG
var player,playerIMG
var pill,pillsGroup
var lives=3
var heart1
var heart2
var heart3

function preload(){
playerIMG = loadImage("player.png")
skyIMG = loadImage("Background.png")
obstacleIMG = loadImage("Obstacle.png")
vacIMG=loadImage("Mask Button.png")
youIMG=loadImage("you won.jpg")
pillIMG=loadImage("pill.png")
heart1IMG=loadImage("a.png")
heart2IMG=loadImage("a.png")
heart3IMG=loadImage("a.png")
}

function setup() {
    createCanvas(windowWidth,windowHeight)

sky = createSprite(500,400)
sky.addImage(skyIMG)
sky.x = sky.width/2
sky.scale=1

heart1 = createSprite(45,47,10,10);
heart1.addImage(heart1IMG)
heart1.scale=0.4

 heart2 = createSprite(137,47,10,10);
 heart2.addImage(heart2IMG)
 heart2.scale=0.4


 heart3 = createSprite(227,47,10,10);
 heart3.addImage(heart3IMG)
 heart3.scale=0.4

pill=createSprite(1500,1500)
pill.addImage(pillIMG)
pill.scale=0.1

obstacle= createSprite(1420,1500)

player = createSprite(75,300)
 player.addImage(playerIMG)
 player.scale=0.2


obstacleGroup= new Group()
pillsGroup=new Group()



}

function draw() {
background(180)

pill.lifetime=600
obstacle.lifetime=600

if(pillsGroup.isTouching(player)){
    lives=3

    heart2 = createSprite(137,47,10,10);
    heart2.addImage(heart2IMG)
    heart2.scale=0.4
    pillsGroup.destroyEach()
   
    heart3 = createSprite(227,47,10,10);
    heart3.addImage(heart3IMG)
    heart3.scale=0.4
   
    pillsGroup.destroyEach()
      }

    if(obstacleGroup.isTouching(player)){
       
 if(lives===3 || lives===2 || lives===1){
 lives-=1
 player.x=75
 player.y=300
 obstacleGroup.destroyEach()
 gameState=PLAY
}
       
      
            }
if(player.y>=700 || player.y<=0){
    if(lives===3 || lives===2 || lives===1){
    lives-=1
    player.x=75
    player.y=300
    gameState=PLAY
    player.velocityY=0
    obstacleGroup.destroyEach()
    }
 }
 if (gameState === PLAY){
  
    heartLives()


    sky.velocityX= -(4+3*score/250)
    obstacle.velocityX= -(4+3*score/250)
    score=score + Math.round(frameCount/240)

         
          player.setCollider("circle",0,0,300)
          obstacle.setCollider("circle",0,0,300)
    
        player.velocityY=player.velocityY+=0.8
        sky.velocityX=-2
    
        if(sky.x <600 )(
            sky.x = sky.width/2
        )
        if ( keyDown("up_arrow")){
            player.velocityY-=2
        }
        
if(frameCount%220===0){
    pill=createSprite(1400,-100)
    pill.addImage(pillIMG)
    pill.scale=0.1
pill.y=Math.round(random(600,100))
pill.velocityX=-3
pill.scale=0.1
pillsGroup.add(pill)
}
  
    if (frameCount%120===0){
        obstacle = createSprite(1400,-100)
        obstacle.addImage(obstacleIMG)
        obstacle.scale=0.2
        obstacle.velocityX=-4
    
    obstacle.y=Math.round(random(650,50))
    obstacleGroup.add(obstacle)
    }
    drawSprites()
 }
 else if(gameState===END){

background(0)

    sky.velocityX=0
    sky.destroy()
    obstacleGroup.setVelocityEach(0)
   player.destroy()
   obstacleGroup.destroyEach()
  pillsGroup.destroyEach()

    textSize(35)
   
         you=createSprite(700,450)
         you.addImage(youIMG)
         you.scale=2
       drawSprites()
    
textSize(85)
drawSprites() 
fill("yellow")
textFont("Times New Roman")
text("GAME OVER. SCORE " + score,250,200)
 }
  
    
    drawSprites()

    textSize(30)
 
    fill("black")
    text(" Score :" + score,1100,80)
 
}

function heartLives() {
    if (lives===3){
gameState=PLAY

    }
    
    if(lives === 2){
      heart3.destroy();
      gameState=PLAY

    }
    if(lives === 1){
      heart2.destroy();
      gameState=PLAY
       
    }
    if(lives == 0){
      heart1.destroy();
     
  gameState=END
    }
}
