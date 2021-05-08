describe('Game', function() {
  let game;

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
    expect(game.frames).toEqual([ 1, 2 ]);
  });
  it('Will reset the frame after a round', () => {
    game.add(1);
    game.add(2);
    expect(game.frame).toEqual(1);
  });
  // it('Will not continue adding once the game has ended', () =>{
  //   game.round = 11
  //   expect(game.add(2)).toEqual(null);
  // });
  it('Will output strike when the user throws a 10', () =>{
    expect(game.add(10)).toEqual('strike');
  })
  it('Will output spare when the user throws a 10 between the first and second throws', () =>{
    game.add(2)
    expect(game.add(8)).toEqual('spare');
  })
});