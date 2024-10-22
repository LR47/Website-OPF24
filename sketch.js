b=[]
r=5

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("container-p5");
    
    //canvas.hide();
  
    for(i=0;i<width/r;i++){
    
      b.push(new ball(i,height,r))
      
    }
  }
  
  function draw() {
    resizeCanvas(windowWidth, windowHeight)
    background(20, 14, 0);
    console.log(canvas.width)
    
    for(i=0;i<15;i++){
      b.push(new ball(random(0,width),height,r))
    }
      
      
      //console.log(canvas.width)
      for(let i=0;i<b.length;i++){
        if(b[i].done==true){
          b.splice(i,1)
          
        }
      }
      console.log(b.length)
     for(let balls of b){
       balls.display();
        balls.applyforce();
       balls.age()
      //console.log(b.acc.mag())
     balls.update();
     }
  }
  function mouseWheel(event){
    for(let balls of b){
   if(event.delta>0){
       balls.applyforce(createVector(0,-2))
     }else{
       balls.applyforce(createVector(0,2))
     }
   }
 }

  class ball{
    constructor(x,y,r){    
       this.pos = createVector(x, y);
      //
      this.vel = createVector();
      this.acc = createVector();
      this.g=createVector(0,-0.1)
      //
      this.rad = r*random(0,1);
      this.mass = this.rad / 10;
      this.moving=false
      this.t=0
      this.m=random(0,5)
      this.gap=1
      this.mouseForce=createVector(0,0)
      
      this.done=false
    }
    
    display(){
      noStroke()

      fill(166, 133,0, map(this.pos.y,0,windowHeight,0,255))
      circle(this.pos.x, this.pos.y, this.rad * 2);
      
    }
     applyforce(f){
      this.acc.add(f)
      this.acc.add(this.g)
       this.acc.div(this.m)
    }
    update(){
      this.vel.add(this.acc);  
      this.pos.add(this.vel);
      this.acc.mult(0);
      this.vel.mult(0.99)
     
    }
    age(){
      let a=0;
      a+=2
      fill(166,133,0,255-a)
      this.rad+=-0.05
      if(this.rad<0){
        this.done=true
      }
    }
    
  }