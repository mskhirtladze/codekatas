var Game = require('./game');
var GameState = require('./game-state');
var draw = require('./drawer').drawMatrix;

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var game = new Game('X');

var run = function(){
    draw(game.getBoard());
    if(game.state !== GameState.Idle){
        console.log(game.state);
        game.restart();
        run();
    }else{
        rl.question("next move? ", function(input) {
           var position = input.split(',');
           try {
               game.placeMark(position[0], position[1]);
           }catch(e){
               console.log(e);
           }
           run();
        });
    }
}

run();