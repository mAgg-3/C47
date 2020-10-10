var playground, bow, r_group, b_group, g_group, y_group, arrow_group;
var score=0;
var bg_img, ar_img, bow_img, r_img, y_img, g_img, b_img;
var whoosh;

function preload(){
ar_img=loadImage("Arrow.png");
bg_img=loadImage("BG.png");
bow_img=loadImage("bow.png");
r_img=loadImage("RB.png");
y_img=loadImage("YB.png");
g_img=loadImage("GB.png");
b_img=loadImage("BB.png");
whoosh=loadSound("whoosh_sound.flac")
}

function setup() {
  createCanvas(400,400);
  playground= createSprite(displayWidth,displayHeight,displayWidth-100,displayHeight-100);
  playground.addImage(bg_img);
  playground.velocityX=-2;
  playground.scale=10;
  
  bow=createSprite(350,200,10,10);
  bow.scale= 0.08;
  bow.addImage(bow_img);
  textSize(20);
 arrow_group=new Group();
 r_group=new Group();
 b_group=new Group();
 g_group=new Group();
 y_group=new Group();
}

function draw() {
  background("white");
  
  bow.y=World.mouseY;
  
  if(playground.x<0) 
  {
    playground.x=playground.width/2;
  }
 
  
  if (keyDown("space"))
{
  createarrow();
  whoosh.play()
}
if(World.frameCount%80===0)
{
var r = Math.round(random(1,4));
{
 if (r===1)
 {
 rballoons();
 }
  else if (r===2){
 gballoons();
 }
  else if (r===3){
 bballoons();
 }
 else  if (r===4){
 yballoons();
 }
  console.log(r);
}
}
if (arrow_group.isTouching(r_group)){
  score=score+1;
  arrow_group.destroyEach();
  r_group.destroyEach();
}
if (arrow_group.isTouching(g_group)){
  score=score+3;
  arrow_group.destroyEach();
  g_group.destroyEach();
}
if (arrow_group.isTouching(b_group)){
  score=score+5;
  arrow_group.destroyEach();
  b_group.destroyEach();
}
if (arrow_group.isTouching(y_group)){
  score=score+7;
  arrow_group.destroyEach();
  y_group.destroyEach();
}
drawSprites();  
text("score:"+score,50,50);
}

function createarrow()
{
  var arrow=createSprite(300,230,10,10);
  arrow.scale = 0.08;
  arrow.x=bow.x;
  arrow.y=bow.y;
  arrow.addImage(ar_img);
  arrow.velocityX=-6;
  arrow.lifetime =100;   // 400/4
arrow_group.add(arrow);
}
function rballoons()
{
  
    var redb=createSprite(200,Math.round(random(5,400)),10,10);
    redb.addImage(r_img);
    redb.scale = 0.08;
    redb.velocityX=-2;
    redb.lifetime = 200;
    r_group.add(redb);
}

function gballoons()
  {
    
    var greenb=createSprite(200,Math.round(random(15,190)),10,10);
    greenb.addImage(g_img);
    greenb.scale = 0.08;

    greenb.velocityX=-2;
    greenb.lifetime = 200;
    g_group.add(greenb);
  }
  
  function bballoons()
{
    var blueb=createSprite(200,Math.round(random(25,380)),10,10);
    blueb.addImage(b_img);
    blueb.scale = 0.08;

    blueb.velocityX=-2;
    blueb.lifetime = 200;
    b_group.add(blueb);
}

function yballoons()
 {
    var yellowb=createSprite(200,Math.round(random(30,270)),10,10);
    yellowb.addImage(y_img);
    yellowb.scale = 0.08;

    yellowb.velocityX=-2;
    yellowb.lifetime = 200;
    y_group.add(yellowb);
    
}



