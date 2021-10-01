var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var rect1, rect2, rect3, rect4, rect5, rect6
var dividor1, dividor2, dividor3, dividor4, dividor5, dividor5, dividor6
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

 
  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+70) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+70) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width; j=j+70) { 
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+70) 
  {
    plinkos.push(new Plinko(j,375));
  }

  rect1 = new Block(100,100,50,10)
  rect2 = new Block(100,100,50,10)
  rect3 = new Block(100,100,50,10)
  rect4 = new Block(100,100,25,10)
  rect5 = new Block(100,100,25,10)
  rect6 = new Block(100,100,25,10)

  dividor1 = new RectDividor(rect1.body,{x:200,y:125});
  dividor2 = new RectDividor(rect2.body,{x:700,y:225});
  dividor3 = new RectDividor(rect3.body,{x:550,y:325});
  dividor4 = new RectDividor(rect4.body,{x:180,y:75});
  dividor5 = new RectDividor(rect5.body,{x:700,y:25});
  dividor6 = new RectDividor(rect6.body,{x:365,y:380});

  circle1 = new CircleO(100,100,30)
  circle2 = new CircleO(100,100,30)
  square1 = new Block(200,200,20,30)
  square2 = new Block(100,100,30,30)
  hexagon1 = new CircleO(100,100,20)
  hexagon2 = new CircleO(100,100,15)

  chain1 = new Chain(circle1.body,{x:305,y:380})
  chain2 = new Chain(circle2.body,{x:30,y:30})
  chain3 = new Chain(square1.body,{x:690,y:200})
  chain4 = new Chain(square2.body,{x:405,y:70})
  chain5 = new Chain(hexagon1.body,{x:405,y:380})
  chain6 = new Chain(hexagon2.body,{x:505,y:25})
  
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  fill("rgb(24, 105, 240)");
  rect1.display()
  fill("rgb(253, 229, 51)");
  rect2.display()
  fill("rgb(107, 50, 152)");
  rect3.display()
  fill("rgb(246, 172, 50)")
  rect4.display()
  fill("rgb(152, 224, 54)");
  rect5.display()
  fill("rgb(237, 70, 47)");
  rect6.display()
  dividor1.display(); 
  dividor2.display(); 
  dividor3.display(); 
  dividor4.display(); 
  dividor5.display(); 
  dividor6.display();    

  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
  chain6.display()

  circle1.display()
  circle2.display(); 
  square1.display(); 
  square2.display(); 
  hexagon1.display(); 
  hexagon2.display();  

  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //create the particles using frameCount
 if(frameCount % 60 === 0){
  particles.push(new Particles(random(0,800),0))
 }

  //display the particles 
  for (var a = 0; a < particles.length; a++) {
    particles[a].display();   
  }



}