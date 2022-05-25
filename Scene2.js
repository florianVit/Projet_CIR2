class Scene2 extends Phaser.Scene {
  constructor() {
    super("Scene2");
  }


  create() {
    var etat=0;
    var monTimer;
    var chrono = 0;


      //fond
    this.background = this.add.tileSprite(0, 0, config.width, config.height, "background").setAlpha(0);
    this.background.setOrigin(0, 0);

    //var logo = this.add.sprite(600,200 , "logo");
    this.tweens.add({
      targets: this.background,
      alphaTopLeft: { value: 2, duration: 5000, ease: 'Power1' },
      alphaTopRight: { value: 2, duration: 5000, ease: 'Power1' },
      alphaBottomRight: { value: 2, duration: 5000, ease: 'Power1' },
      alphaBottomLeft: { value: 2, duration: 5000, ease: 'Power1', delay: 500 },
    });
    //chrono




    this.start = this.add.sprite(600,350 , "start").setInteractive({ cursor: 'pointer' }).setAlpha(0);

    this.start.on('pointerover', function (event) {
      //this.setTint(0xff0000);
      this.setTexture("start_hover");
    });
    this.start.on('pointerout', function (event) {

      this.setTexture("start");
    });

    this.start.on('pointerup', function (event) {
      setTimeout(() => {
        this.scene.start('Scene3');
        this.scene.destroy()
      }, 10);

    }, this);
    this.tweens.add({
      targets: this.start,
      alphaTopLeft: { value: 2, duration: 5000, ease: 'Power1' },
      alphaTopRight: { value: 2, duration: 5000, ease: 'Power1' },
      alphaBottomRight: { value: 2, duration: 5000, ease: 'Power1' },
      alphaBottomLeft: { value: 2, duration: 5000, ease: 'Power1', delay: 500 },
    });

    this.option = this.add.sprite(600,475 , "options").setInteractive({ cursor: 'pointer' }).setAlpha(0);
    this.option.on('pointerover', function (event) {
      this.setTexture("options_hover");
    });
    this.option.on('pointerout', function (event) {
      this.setTexture("options");
    });
    this.option.on('pointerup', function (event) {

      },this);

    this.tweens.add({
      targets:this.option,
      alphaTopLeft: { value: 2, duration: 5000, ease: 'Power1' },
      alphaTopRight: { value: 2, duration: 5000, ease: 'Power1' },
      alphaBottomRight: { value: 2, duration: 5000, ease: 'Power1' },
      alphaBottomLeft: { value: 2, duration: 5000, ease: 'Power1', delay: 500 },

    });

/*
    var overlay = this.add.text( 123, 123, 'Click ailleur pour fermer' );
    overlay.visible = false;

    var over = this.add.rectangle(123, 223, 478 , 300, 0x9966ff);
    over.visible = false;

    var home = this.add.sprite(1100,43 , "home").setInteractive({ cursor: 'pointer' });
    var menu = this.add.sprite(1100,234 , "menu").setInteractive({ cursor: 'pointer' });
    home.on('pointerover', function (event) {
      overlay.visible = true;
    });
    home.on('pointerout', function (event) {
      overlay.visible = false;
    });
    home.on('pointerup', function (event) {
      over.visible = true;
      this.add.text( 123, 123, 'Click sur 1 pour fermer' );
      over.setStrokeStyle(4, 0xefc53f);

      //var r3 = this.add.rectangle(600, 200, 148, 148);
      //r3.setStrokeStyle(2, 0x1a65ac);

    });

    menu.on('pointerup', function (event) {
      over.visible = false;
    });*/


    this.apple = this.add.image(100, 699, "apple");
    this.burger = this.add.image(130, 699,"burger");
    this.carrot = this.add.image(145, 699, "carrot");
    this.egg = this.add.image(98, 699, "egg");
    this.fries = this.add.image(31, 699, "fries");
    this.ham = this.add.image(932, 699, "ham");
    this.pizza = this.add.image(1134, 699, "pizza");
    this.strawberry = this.add.image( 1033, 699, "strawberry");
    this.sushi = this.add.image(1078, 699, "sushi");
    this.watermelon = this.add.image(1123, 699, "watermelon");
    this.cherry = this.add.image(1028, 699, "cherry");
  }

  typewriteText(text)
  {
    const length = text.length
    let i = 0
    this.time.addEvent({
      callback: () => {
        this.label.text += text[i]
        ++i
      },
      repeat: length - 1,
      delay: 100
    })
  }
  makeBar(x, y,color) {
    //draw the bar
    let bar = this.add.graphics();

    //color the bar
    bar.fillStyle(color, 1);

    //fill the bar with a rectangle
    bar.fillRect(0, 0, 200, 50);

    //position the bar
    bar.x = x;
    bar.y = y;

    //return the bar
    return bar;
  }
  setValue(bar,percentage) {
    //scale the bar
    bar.scaleX = percentage/100;
  }
  // 0 add the update function
  update() {

    //this.moveShip(this.start, 0);
    // call a function to move the ships vertically
    this.moveShip(this.apple, 6);
    this.moveShip(this.burger, 4);
    this.moveShip(this.carrot, 8);
    this.moveShip(this.cherry, 5);
    this.moveShip(this.egg, 7);
    this.moveShip(this.fries, 4);
    this.moveShip(this.ham, 9);
    this.moveShip(this.pizza, 8);
    this.moveShip(this.strawberry, 5);
    this.moveShip(this.sushi, 6);
    this.moveShip(this.watermelon, 4);

    // for scroll the background
    //this.background.tilePositionY -= 0.5;

  }

  //function to move the ships
  moveShip(ship, speed) {
    // increase the position of the ship on the vertical axis
    ship.y += speed;
    // if the ship hits the bottom of the screen call the reset function
    if (ship.y > config.height) {
      // 2.1 call a reset position function
      this.resetShipPos(ship);
    }
  }

  // reset position function
  resetShipPos(ship){
    // put the ship on the top
    ship.y = 0;
    var result = Phaser.Math.Between(0, 1);
    if (result == 1) {
      var randomX = Phaser.Math.Between(0, 450);
      ship.x = randomX;
    } else {
      var randomX = Phaser.Math.Between(800, config.width);
      ship.x = randomX;
    }
  }

  createWindow (func)
  {
    var x = Phaser.Math.Between(400, 600);
    var y = Phaser.Math.Between(64, 128);

    var handle = 'window' + this.count++;

    var win = this.add.zone(x, y, func.WIDTH, func.HEIGHT).setInteractive().setOrigin(0);

    var demo = new func(handle, win);

    //this.input.setDraggable(win);

    win.on('drag', function (pointer, dragX, dragY) {

      this.x = dragX;
      this.y = dragY;

      demo.refresh()

    });

    this.scene.add(handle, demo, true);
  }

  resize (width, height)
  {
    if (width === undefined) { width = this.game.config.width; }
    if (height === undefined) { height = this.game.config.height; }

    this.cameras.resize(width, height);
  }



}

class Juggler extends Phaser.Scene {

  constructor (handle, parent)
  {
    super(handle);

    this.parent = parent;
  }

  create ()
  {
    var bg = this.add.image(0, 0, 'ui').setOrigin(0);

    this.cameras.main.setViewport(this.parent.x, this.parent.y, Juggler.WIDTH, Juggler.HEIGHT);

    this.add.image(100, 600, 'oui').setOrigin(0);


  }

  refresh ()
  {
    this.cameras.main.setPosition(this.parent.x, this.parent.y);

    this.scene.bringToTop();
  }

}

Juggler.WIDTH = 480;
Juggler.HEIGHT = 300;