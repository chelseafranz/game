var Player = function(options){
  this.name=options.name;
  this.health=options.health || 100;
  switch(this.type){
    case 'a':
      attack_points= 30;
      special_points=10;
      break;
    case 'b':
      attack_points= 20;
      special_points=40;
      break;
    case 'c':
      attack_points= 5;
      special_points=30;
      break;
  };
  this.pow = function(opp){
    opp.health = opp.health - (_.random(0,5)); 
  };
  this.bam = function(opp){
    opp.health = opp.health - (_.random(2,15)); 
  };
  this.kaboom = function(opp){
    opp.health = opp.health - (_.random(0,5)); 
  };
};


var player;
var villan;
var Villan = function(options){
  this.name= options.name;
  this.health= 100;
  this.attack = function(opp){
    opp.health = opp.health - (_.random(0,10));
  };
  this.type = options.type;
};
$('.play').hide();

var winner= function(){
if( player.health <=0 ){
  alert('you lose');
}else if (villan.health <= 0){
  alert('you win');
}
};

//when any button inside of '.start' is clicked..
$('.start button').on('click', function(event){
  event.preventDefault();
//take the 'name' of whichever button is clicked, 
//assign that button's text value to be equal to 'new Player'
    var character_type=$(this).attr('name'),
          character_name= $(this).text();

    player = new Player({
      name: character_name,
      type: character_type,
    });

$('.start').hide("slow");
});



$('.start2 button').on('click', function(event){
  event.preventDefault();

    var character_type=$(this).attr('name'),
          character_name= $(this).text();

    villan = new Villan({
      name: character_name,
      type: character_type
    });
$('.start2').hide("slow");
$('.play').show("slow");
$('.attack').show();
$('h1').addClass('center');

$('.go').text(player.name);
$('.go2').text(villan.name);

});

$('.pow').on('click', function(){
player.pow(villan);
$('.newHealth2').text(villan.health);
villan.attack(player);
$('.newHealth').text(player.health);
winner();
});

$('.bam').on('click', function(){
player.bam(villan);
$('.newHealth2').text(villan.health);
villan.attack(player);
$('.newHealth').text(player.health);
winner();
});

$('.kaboom').on('click', function(){
player.kaboom(villan);
$('.newHealth2').text(villan.health);
villan.attack(player);
$('.newHealth').text(player.health);
winner();
});



































