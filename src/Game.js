'use strict';

class Game {

  constructor() {
    this.frames = []
    this.round = 0
    this.frame = 1
    this.STRIKE_SCORE = 10
    this.roundScore = []
  }

  add(score){
    console.log(this.round)

    if (this.gameOver()) {
      return null

    } else if (this.frame == 1) {

      if (score == 10) {
        this.frames.push(this.STRIKE_SCORE);
        this.frame == 1
        this.round += 1
        return('strike')
      }

      this.frames.push(score);
      this.advFrame()
    
    } else if (this.frame == 2) {

      if (score + this.frames[this.frames.length - 1] == 10){
        return('spare')
      }

      this.frames.push(score);
      this.frame = 1;
      this.roundScore = []
    }

    this.round += 1
    return score
  };


  scoreTotal() {
    let newArr = this.frames.flat();
    return newArr.reduce(function(a, b){
      return a + b}, 0)
  };

  gameOver(){
    if (this.round == 11) {
      return true
    }
  }

  resetFrame() {
    this.frame == 1
  }

  advFrame() {
    this.frame += 1
  }

  isStrike(){
    if (this.add.roundScore == [10]) {
      console.log("strike")
    }
  }
  }
