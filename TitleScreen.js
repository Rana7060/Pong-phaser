class TitleScreen extends Phaser.Scene {
  preload() {}
  create() {
    const title = this.add.text(400, 250, "Old School Tennis", {
      fontSize: 50,
    });
    // title.setOrigin(0.5, 0.5);

    // this.add
    //   .text(400, 300, "Press Space To Start", {
    //     fontSize: 20,
    //   })
    //   .setOrigin(0.5, 0.5);
    // this.input.keyboard.on("keydown-SPACE", () => {
    //   this.scene.start(Game);
    // });
  }
}
