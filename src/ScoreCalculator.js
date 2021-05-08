class ScoreCalculator{


  constructor(){
    this.hello = 'hello'
  }

  addScores(){
    
    let total = 0
    game.frames.forEach((score, index) => {
      if (this.isStrike(score)) {
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
    return Game.frames[index + 1] + 10
  }

  // isSpare(){

  // }

  // if (score + this.frames[this.frames.length - 1] == 10){
  //   return('spare')
  // }
}