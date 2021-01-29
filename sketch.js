var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var particle;
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var count = 0;
var gameState = "start"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  line = new Ground(400,450,800,20)

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("500",20,600);
 text("500  ",100,600);
 text("500 ",180,600);
 text("500 ",270,600);
 text("100",340,600);
 text("100 ",420,600);
 text("100 ",500,600);
 text("200 ",580,600);
 text("200 ",670,600);
 text("200 ",750,600);



  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   fill ("yellow")
   line.display();

   if(particle = null){
paricle.display();

   if(paricle.body.position.y>760){
    if(particle.body.position.x<300){
     score  =score+500
     paricle = null
    }
   }
   }
}

function mousePressed(){
  if(gameState !== "end"){
    paricle = new Particle(mouse,10,10,10)
  }
}

