describe('Game', function() {
  let game;

  beforeEach(function(){
    game = new Game;
  });

  it('Should start a game on the first round', () => {
    expect(game.round).toEqual(1);
  });
  it('Can push two values into one frame', () => {
    game.add(1);
    game.add(2);
    expect(game.frames).toEqual([ 1, 2 ]);
  });
  it('Will reset the frame after a round', () => {
    game.add(1);
    game.add(2);
    expect(game.frame).toEqual(1);
  });
  it('Will not continue adding once the game has ended', () =>{
    game.round = 12
    expect(game.add(2)).toEqual(null);
  });
  it('Will output strike when the user throws a 10', () =>{
    expect(game.add(10)).toEqual('strike');
  });
});