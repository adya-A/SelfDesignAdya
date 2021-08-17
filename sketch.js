var dessertImg, iceImg, landscapeImg;
var ground;
var randomground;
var obst1, obst2, obst3, obst4;
var cloudImg;
var backgroundImg;
var background1;

function preload() {
    dessertImg = loadImage("assets/ground2.jpg");
    obst1 = loadImage("assets/obstacle1.png");
    obst2 = loadImage("assets/obstacle2.png");
    obst3 = loadImage("assets/obstacle3.png");
    obst4 = loadImage("assets/obstacle4.png");
    cloudImg = loadImage("assets/cloud.png");
    backgroundImg = loadImage("assets/backgroundImg.png");
}

function setup() {
    createCanvas(1000, 600);

    background1 = createSprite(0, 0, 1000, 600);
    background1.addImage(backgroundImg);
    background1.scale = 5; 

    ground = createSprite(3000, 550, width, 20);
    ground.addImage(dessertImg);
    ground.scale = .5;
    ground.velocityX = -6;

}

function draw() {
    background(255);

    background1.velocityX = -3;
    if(background1.x < 0){
        background1.x = background1.width/2;
    }

    if (ground.x < 0) {
        ground.x = 3000;
    }
    spawnObstacles();
    spawnClouds();
    drawSprites();
}

function spawnObstacles(){
    if(frameCount%60===0){
        var obstacle = createSprite(1000, 510, 20,80);
        obstacle.velocityX = -6;
        var rand = Math.round(random(1,4));
        switch(rand){
            case 1: obstacle.addImage(obst1);
            obstacle.scale = 0.5;
            break;
            case 2: obstacle.addImage(obst2);
            obstacle.scale = 0.5;
            break;
            case 3: obstacle.addImage(obst3);
            obstacle.scale = 0.2;
            break;
            case 4: obstacle.addImage(obst4);
            obstacle.scale = 0.2;
            break;
            default: break;
        }
        
    }
    
}

function spawnClouds(){
    if(frameCount%80===0){
        var cloud = createSprite(1000, 200, 50, 30);
        cloud.velocityX = -4;
        cloud.y = Math.round(random(150, 250));
        console.log(cloud.y);
        cloud.addImage(cloudImg);
        cloud.scale = 0.5;
    }
}