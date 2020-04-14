var fixedrect;
var movingrect;


function setup() {
  createCanvas(1000,1000);
  fixedrect = createSprite(400, 200, 80, 50);
  fixedrect. shapeColor = "pink";
  
  movingrect = createSprite(600,200,80,30);
  movingrect.shapeColor = "blue";
  movingrect.velocityX = -3;
}

function draw() {
  background(0);  
  
  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 && 
    fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 )
    {
      movingrect.velocityX = movingrect.velocityX * (-1);
    }

  if(movingrect.y - fixedrect.y < movingrect.heigth/2 + fixedrect.height/2 &&
    fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2)
    {
      movingrect.velocityY = movingrect.velocityY * (-1);
    }


  drawSprites();
}