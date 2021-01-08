class Division {
  constructor (x,y,w,h){
    
    var options =  {

        isStatic: true

    }
    this.body = Bodies.rectangle(x,y,w,h,options)
    this.w = w;
    this.h = h;
     world.add(world,this.body);

}
display(){
   if( var k = 0; k <=Width; k = k +80){
    Division.push(new Division(k,height-divisionHeight/2,10,divisionHeight));


   }


  var pos = this.body.position;
  rectMode(CENTER);
  Fill("white");
 rect(pos.x,pos.y,this.w,this.y);
}

}