class ScoreCalculator{

  constructor(){
    this.game = new Game();
    this.frames = []
    this.frame = 1
    this.STRIKE_SCORE = 10
  }
  
  add(score){
    console.log(this.round)
    if (this.game.gameOver()) {
      return null
    } else if (this.frame == 1) {
        if (score == 10) {
          this.frames.push(this.STRIKE_SCORE);
          this.frame == 1
          this.game.round += 1
          // return('strike')
        } else {
          this.frames.push(score);
          this.advFrame();
        }
    } else if (this.frame == 2) {
      this.frames.push(score);
      this.resetFrame();
    }
  };

  addedScores(){
    let total = 0
    this.frames.forEach((score, index) => {
      if (this.isStrike(score)) {
        console.log(score)
        total += 10 + this.strikeBonus(index)
      } else {
        total += score
      }
    })
    return total
  }

  isStrike(score){
    if (score == 10) {
      return true
    }
  }

  strikeBonus(index){
    return this.frames[index + 1] + 10
  }

  resetFrame() {
    this.frame = 1
    this.round += 1
  }

  advFrame() {
    this.frame += 1
  }


  // isSpare(){

  // }

  // if (score + this.frames[this.frames.length - 1] == 10){
  //   return('spare')
  // }
}

