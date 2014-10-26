var player;
var villan;
var guitarA= '<img id="guitarA" width= "200px" src="https://s3.amazonaws.com/uploads.hipchat.com/31349/1240363/El6OAAJ2LZX4rE1/pgmFM.png" />';
var guitarB='<img id="guitarB" width= "200px" src="https://s3.amazonaws.com/uploads.hipchat.com/31349/1240363/6UMkgCV4REeDKbY/r340.png" />';
var guitarC='<img id="guitarC" width= "200px" src="https://s3.amazonaws.com/uploads.hipchat.com/31349/1240363/GfrOpc1bblZ91sh/r4000B.png" />';
var guitarD='<img id="guitarD" width= "200px" src="https://s3.amazonaws.com/uploads.hipchat.com/31349/1240363/zShfuykziHO2ZjP/6199.png" />';
var fire = '<img id="fire" width= "200px" src="https://s3.amazonaws.com/uploads.hipchat.com/31349/1240363/m2izq2Lt4fkPEXt/fire.png" />';
var winFlames= function(){
$('.playerPic').append(fire);
};

var loseFlames= function(){
$('.villanPic').append(fire);
};

var winner= function(){
if( player.health <=0 ){
  loseFlames();
}else if (villan.health <= 0){
  winFlames();
};
};

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
    opp.health = opp.health - (_.random(5,20)); 
  };
};


var Villan = function(options){
  this.name= options.name;
  this.health= 100;
  this.attack = function(opp){
    opp.health = opp.health - (_.random(0,10));
  };
  this.type = options.type;
};

  $('.play').hide();
  $('.getReady').hide();
  $('.startButtons').hide();
  $('.playerPic').hide();
  $('.villanPic').hide();


  $('h2').on('click', function(){
  $('h2').addClass('animated hinge');
  $('.startButtons').show(800);
   
  });




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

  switch (player.name){
      case "Slash":
      $('.playerPic').html(guitarA);
        break;
            case "Freddie":
      $('.playerPic').append(guitarB);
          break;
      case "Ozzy":
      $('.playerPic').append(guitarC);
        break;
    };

$('.start').hide("slow");
$('.playerPic').show(1000);
 
});



$('.start2 button').on('click', function(event){
  event.preventDefault();

    var character_type=$(this).attr('name'),
          character_name= $(this).text();

    villan = new Villan({
      name: character_name,
      type: character_type
    });

    switch (villan.name){
      case "Axl":
        $('.villanPic').append(guitarD);
        break;
      case "Dave":
        $('.villanPic').append(guitarD);
          break;
      case "Kurt":
        $('.villanPic').append(guitarD);
        break;
    };
$('.start2').hide(200, function(){

  $('.villanPic').show(1000);
  $('.getReady').show(800);

});


  $('.getReady').on('click', function(){
    $('.attack').show(400);
    // $('.body').hide(800);
    $('.rock').hide(800);
    $('.play').show(800);
  $('.rock').addClass('animated flipOutX');
  $('.body').removeClass();
  $('.getReady').hide(800);
    $('.go').text(player.name);
    $('.go2').text(villan.name);
    
    $('.attack').show(800);
  });
  });

 //

 // 
//  
// 


  





$('.pow').on('click', function(){
  player.pow(villan);
  console.log(player.pow);
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


































