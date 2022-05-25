

var config = {

  width: 1200,
  height: 700,
  scene: [Scene1, Scene2, Scene3, Scene4],
  //zoom:4,
  physics: {
    default: 'matter',
    matter: {
      gravity: { y: 0 },
      enableSleeping: true

    }
    /*arcade: {
        gravity: { y: 0 },
        debug: true
    }*/
  },
  pixelArt: true


}

new Phaser.Game(config);



