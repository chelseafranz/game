var Player = function(options){
  this.name=options.name;
  this.health=options.health || 100;
  switch(this.type){
    case 'a':
      attack_points= 10;
      special_points=20;
      break;
    case 'b':
      attack_points= 20;
      special_points=40;
      break;
    case 'c':
      attack_points= 5;
      special_points=30;
      break;
  }

  this.health = function(opponent){
    opponent.health = opponent.health - (_.random(0,15));
  };
  this.bigattack = function(){
    
  };
};

var Villan = function(options){
  this.name= options.name;
  this.health= function(opponent){
    opponent.health = opponent.health - (_.random(0,15));
  };
  this.bigattack = function(){

  };
  this.type = options.type;
};


//when any button inside of '.start' is clicked..
$('.start button').on('click', function(event){
  event.preventDefault();
//take the 'name' of whichever button is clicked, 
//assign that button's text value to be equal to 'new Player'
var character_type=$(this).attr('name'),
      character_name= $(this).text();

var player = new Player({
  name: character_name,
  type: character_type
});
$('.start').fadeOut();
$('.go').text(player.name);
});


$('.start2 button').on('click', function(event){
  event.preventDefault();

var character_type=$(this).attr('name'),
      character_name= $(this).text();

var villan = new Villan({
  name: character_name,
  type: character_type
});
$('.start2').hide("slow");
$('.play').show("slow");
$('.go2').text(villan.name);
});