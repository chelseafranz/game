var Player = function(options){
  this.name=options.name;
  this.health=options.health || 100;
  this.age = options. age || {};

};

Player.prototype.littleattack= function(monster){
monster.health = monster.health - (_.random(0, 12));
};
Player.prototype.bigattack= function(monster){
monster.health = monster.health - (_.random(20, 50));
};


var Monster = function(options){
  this.name= options.name;
  this.health= options.health || 100;
  this.age= options.age || {};
};

Monster.prototype.counterattack= function(person){
person.health = person.health - (_.random(0, 50));
};

var ben = new Player ({
  name: 'Ben',
  age: 34,
});

var jerry = new Monster({
  name: 'Jerry',
});

var samson = new Player({
  name: 'Samson'
});

var delilah = new Monster({
  name: 'Delilah'
});


$('h3').click(function(){
  $('h3').fadeToggle("slow", "linear");
  $('h1').addClass('center');
});


$('.head').one('click','.center',function(){
$('.player1').append('<h4 class="choose">Choose your players </h4>');
$('.player1').append('<button class="p1">player one</button>');
$('.player1').append('<button class="p2">player two</button>');
});

//choose your players//////////////////////////////
$('.player1').one('click','.p1',function(){
  $('ul').removeClass('hide');
  $('ul').addClass('show');
});

$('.player1').one('click','.p2',function(){
  $('ol').removeClass('hide2');
  $('ol').addClass('show2');
});

$('ul').one('click', '.select', function(){
  $('.left').append('<form><input type="checkbox">I am ready to play</form>');
});

$('ol').one('click',function(){
$('.right').append('<form><input class="fp" type="checkbox">I am even more ready to play</form>');

$( "input" ).on( 'click',function(){
$('.choose').hide("slow", "linear");
$('ul').fadeToggle("slow", "linear");
$('ol').fadeToggle("slow", "linear");
$('form').fadeToggle("slow", "linear");
});
$('.game').removeClass('gone')
$('.game').addClass('see');
});

// $('.game').on('click', function(){
//   $('.game').removeClass('gone')
//   $('.game').addClass('see');
// });

// attacks/////////////////////////////////

$('.gameL').on('click', '.a',function(){
  $('.gameL').append('<div>lets go</div>');
});

var playerOne;
var playerTwo;

$('.a').on('click', function(){
  playerOne= ben;

  $('.d').on('click', function(){
    playerTwo= jerry;

    $('.pow').on('click', function(){
      playerOne.bigattack(playerTwo);
      playerTwo.bigattack(playerOne);
      $('.healthScore').html(playerTwo.health);

});

});


});
