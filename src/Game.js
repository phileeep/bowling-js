'use strict';

class Game {

  constructor() {
    this.frames = []
    this.round = 0
    this.frame = 1
  }

  add(score){
    let roundScore = []
    if (this.frame == 1) {
      roundScore.push(score);
      this.frames.push(roundScore);
      this.frame += 1
    } else if (this.frame == 2) {
      roundScore.push(score);
      this.frames.push(roundScore);
      this.resetFrame()
    }
    roundScore = []
  };

  scoreTotal() {
    let newArr = this.frames.flat();
    return newArr.reduce(function(a, b){
      return a + b}, 0)
  };

  // _isAStrike(){
  //   if(this.frame = 1 && this.add() == 10) {

  //   }      
  // }

  // lastFrame(){
  //   return true
  // }

  resetFrame() {
    this.frame == 0

  }

  advFrame() {
    this.frame += 1
  }

  }