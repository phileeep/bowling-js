describe('ScoreCalculator', function() {

  let score;
  let game;

  beforeEach(function(){
   score = new ScoreCalculator;
   game = new Game();
  });

  it('can add the total scores of the game', () => {
    console.log(game.add(1));
    game.add(5);
    expect(score.addScores()).toEqual(6);
  });
});