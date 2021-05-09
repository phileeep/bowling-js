'use strict';

class Game {

  constructor() {
    score = new ScoreCalculator();
  }

  move(roll){
    score.add(roll)
  }

  isGutterGame(){
    if (score.addedScores() == 0){
      return true
    }
  }

  isPerfectGame() {
    
  }


}
