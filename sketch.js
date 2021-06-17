function preload() {
mouseAnimation=loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png")
catAnimation=loadAnimation("images/cat1.png","images/cat2.png","images/cat3.png","images/cat4.png")
groundimage=loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    cat=creatSprite()
    //create tom and jerry sprites here

}

function draw() {

    background(groundimage);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
