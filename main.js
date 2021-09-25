window.onload = () => {
  let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 500,
    // backgroundColor: "#616161",
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 0 },
        debug: false,
      },
    },
  };

  const game = new Phaser.Game(config);
  let paddleLeft;

  game.scene.add("titlescreen", TitleScreen);
  game.scene.add("game", Game);

  game.scene.add("game-background", GameBackground);

  // game.scene.start("titlescreen");
  game.scene.start("game");
  game.scene.start("game-background");
  //
};
