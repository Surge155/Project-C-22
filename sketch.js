var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var invishand;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(400,30);
	star.addImage(starImg);
	star.scale = 0.2;

	invishand = createSprite(400,520,10,10);
	invishand.visible = false;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, starBody);
	
	Engine.run(engine);

	fairyVoice.play();

}


function draw() {
  background(bgImg);

	
	fairy.velocityX = 0;
	
	stopstar();
	fallingstars();
  keyPressed();

  star.depth = invishand.depth;
  star.depth = star.depth + 2;
  drawSprites();
console.log(fairy.y);
}

function keyPressed() {
	if(keyDown("left")){
		fairy.velocityX = fairy.velocityX + -8;
	}
	if(keyDown("right")){
		fairy.velocityX = fairy.velocityX + 8;
	}
}

function fallingstars(){
	if(keyDown("down")){
		star.velocityY = 6;
}
}

function stopstar(){
	if(star.isTouching(invishand)){
		star.velocityY = 0;
	}
}