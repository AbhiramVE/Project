var canvas;
var music;
var Sur1, Sur2, Sur3, Sur4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    Sur1 = createSprite(100,580,200,10);
    Sur1.shapeColor("Red");
    Sur2 = createSprite(100,580,200,10);
    Sur1.shapeColor("Yellow");
    Sur3 = createSprite(100,580,200,10);
    Sur1.shapeColor("Blue");
    Sur4 = createSprite(100,580,200,10);
    Sur1.shapeColor("Green");
    //create box sprite and give velocity
    box = createSprite(random(20,750),50,20,20);
    box.velocityY = 5;
    box.velocityX = 2;
    box.shapeColor("White");
}


function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(box.isTouching(Sur1) && box.bounceOff(Sur1)){
        box.shapeColor = Sur1.shapeColor;
    }
    if(box.isTouching(Sur2) && box.bounceOff(Sur2)){
        box.shapeColor = Sur2.shapeColor;
    }
    if(box.isTouching(Sur3) && box.bounceOff(Sur3)){
        box.shapeColor = Sur3.shapeColor;
    }
    if(box.isTouching(Sur4) && box.bounceOff(Sur4)){
        box.shapeColor = Sur4.shapeColor;
    }
    
    drawSprites();
}
