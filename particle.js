class Particle {
 constructor (x,y,r) {

  var options = {
  restitution:0.4

  }
 this.body = Bodies.circle(x,y,this.r,option);
 this.color = color (random (0, 225), random(0,255), random(0, 225));
 world.add(world, this.body);

}
display(){

 var pos = this.body.position;
 var angle = this.body.angle;

if (frameCount%60===0){
    Particle.push(new Particle(random(width/2-10,width/2+10),10,10));

}

for (var j = 0; j <particles.length; j++ ){

    particles[j].display();
}

for (var k = 0; k < divisions.length; k++){

    division[k].display();
}


 Push();
 Translate(pos.x, pos.y);
 Rotate(angle);
 noStroke();
 fill("red")
 ellipseMode(RADIUS);
ellipse(0,0,this.r,this.r);
Pop();
 

}
   }