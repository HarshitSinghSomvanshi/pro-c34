//Create variables here
var dog,pet;
var happyDog;
var foodS;
var foodStock;
var database,position,writeStock;
function preload()
{
  //load images here
   pet = loadImage("images/dogImg.png");
   happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
    
  database = firebase.database();
  console.log(database);
  
  dog = createSprite(250,250,20,20);
  dog.addImage(pet);
  dog.scale = 0.2;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

}

function draw() {  
background(46,139, 87);

  //add styles here
  if(keyWentDown(UP_ARROW)) {
     writeStock(foodS);
     dog.addImage(happyDog);
  }

  drawSprites();
   
  stroke("white");
  textSize(20);
  fill("white");

  text("Note: Press UP_ARROW Key To Feed Drago Milk", 20,30);
}

function readStock(data){
   food=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}
