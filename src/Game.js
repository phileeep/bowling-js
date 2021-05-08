'use strict';

class Game {

  constructor() {
    this.frames = []
    this.round = 1
    this.frame = 1
    this.STRIKE_SCORE = 10
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
        } else {
          this.frames.push(score);
          this.advFrame();
        }
    } else if (this.frame == 2) {
      this.frames.push(score);
      this.resetFrame();
    }
  };

  gameOver(){
    if (this.round == 12) {
      return true
    }
  }

  resetFrame() {
    this.frame = 1
    this.round += 1
  }

  advFrame() {
    this.frame += 1
  }

}