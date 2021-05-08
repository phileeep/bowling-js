describe('Game', function() {
  let bowling;

  beforeEach(function(){
    game = new Game;
  });

  it('Should be able to add a score to the scorecard and return it', () =>{
    game.add(2);
    game.add(6);
    expect(game.scoreTotal()).toEqual(8);
  });
  it('Should start a game on the first round', () => {
    expect(game.round).toEqual(0);
  });
  it('Can push two values into one frame', () => {
    game.add(1);
    game.add(2);
    expect(game.frames).toEqual([ [ 1 ], [ 2 ] ] );
  });
});