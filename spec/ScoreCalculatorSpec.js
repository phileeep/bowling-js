describe('ScoreCalculator', function() {

  let score;
  let game;

  beforeEach(function(){
   game = new Game();
   score = new ScoreCalculator();
  });

  it('Can push two values into one frame', () => {
    score.add(1);
    score.add(2);
    expect(score.frames).toEqual([ 1, 2 ]);
  });
  it('Will reset the frame after a round', () => {
    score.add(1);
    score.add(2);
    expect(score.frame).toEqual(1);
  });
  it('can add the total scores of the game', () => {
    score.add(1);
    score.add(5);
    expect(score.addedScores()).toEqual(6);
  });
});