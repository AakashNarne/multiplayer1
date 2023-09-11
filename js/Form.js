class Form {
  constructor() {
  this.input=createInput("").attribute("placeholder", "Player Name");
  this.playbutton=createButton("Play");
  this.titleimg=createImg("assets/title.png");
  this.greeting=createElement("h3");
  }
  setElement(){
  this.titleimg.position(100, 10);
  this.input.position(width/2-100, height/2-80);
  this.playbutton.position(width/2-100, height/2-20);
  this.greeting.position(width/2-300, height/2-80);
  };
  handleMousePressed(){
  this.playbutton.mousePressed(()=>{
  this.input.hide();
  this.playbutton.hide();
  var message=`Hello There, ${this.input.value()} wait just a moment till we find a player for you to play with....`
  this.greeting.html(message);
  });
  };
  display(){
  this.setElement();
  this.handleMousePressed();
  };
  hide(){
  this.greeting.hide();
  this.playbutton.hide();
  this.input.hide();
  };
  }
