var catimg ;mouseimg
function preload(){
catimg=loadAnimation("cat1.png","Cat2.png","cat3.png","cat4.png");
mouseimg=loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png");
gardenimg=loadImage("garden.png");




}


function setup(){
createCanvas(1000,800)

cat=createSprite(150,160,20,50);
cat.addAnimation("catWalking",cat_walking)
cat.scale = 0.9;

ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;

mouse = createSprite(50,180,400,20);
mouse.addImage("mouse",groundImage);
mouse.scale





}



function draw(){
background(garden.png);


if(cat.x-mouse.x<(cat.width-mouse.width)/2){


}





    drawSprites();

}


function keyPressed(){
  if (keyCode===LEFT_ARROW){

    mouse.addAnimation("mouseTasing",mouse.img2);
    mouse.addAnimation("mouseTasing");
    mouse.frameDelay = 25;
}

    if (keyCode===LEFT_ARROW){

   mouse.addAnimation("mouseTasing",mouse.img2);
   mouse.addAnimation("mouseTasing");   
   mouse.frameDelay = 25;


    }
}
