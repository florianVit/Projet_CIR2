class Scene1 extends Phaser.Scene {

  constructor() {

    super("Scene1");
  }

  preload(){
    this.load.image("background", "assets/images/fond.jpg");
    this.load.image("apple", "assets/images/apple.png");
    this.load.image("burger", "assets/images/burger.png");
    this.load.image("carrot", "assets/images/carrot.png");
    this.load.image("cherry", "assets/images/cherry.png");
    this.load.image("egg", "assets/images/egg.png");
    this.load.image("fries", "assets/images/fries.png");
    this.load.image("ham", "assets/images/ham.png");
    this.load.image("pizza", "assets/images/pizza.png");
    this.load.image("strawberry", "assets/images/strawberry.png");
    this.load.image("sushi", "assets/images/sushi.png");
    this.load.image("watermelon", "assets/images/watermelon.png");
    this.load.image("start", "assets/images/start.png");
    this.load.image("start_hover", "assets/images/start_hover.png");
    this.load.image("options", "assets/images/options.png");
    this.load.image("options_hover", "assets/images/option_hover.png");
    this.load.image("logo", "assets/images/logo.png");
    this.load.image("home", "assets/images/home.png");
    this.load.image("menu", "assets/images/menu.png");
    this.load.image("ui", "assets/images/ui.PNG");
    this.load.image("oui", "assets/images/oui.PNG");
    this.load.image("non", "assets/images/non.PNG");

    //this.load.audio("song", "assets/song.mp3");
    this.load.image('supp', '/assets/supp.png');
    this.load.image('pause', '/assets/pause.png');
    this.load.image('sky', '/assets/sky.png');
    this.load.image('green', '/assets/green.png');
    this.load.image('black', '/assets/black.png');
    this.load.image('sea', '/assets/sea.png');
    this.load.image('earth', '/assets/earth.png');
    this.load.image('green_clair', '/assets/green_clair.png');
    this.load.image('building1', '/assets/decors/building4.png', 50,50);
    this.load.image('building2', '/assets/decors/building2.png', 50,50);
    this.load.image('building3', '/assets/decors/building3.png', 50,50);
    this.load.image('rp', '/assets/routes/rp.png', 50,50);
    this.load.image('rpNO', '/assets/routes/rpNO.png', 50,50);
    this.load.image('rpO', '/assets/routes/rpO.png', 50,50);
    this.load.image('rpS', '/assets/routes/rpS.png', 50,50);
    this.load.image('rpSO', '/assets/routes/rpSO.png', 50,50);
    this.load.image('rpE', '/assets/routes/rpE.png', 50,50);
    this.load.image('rpSE', '/assets/routes/rpSE.png', 50,50);
    this.load.image('rpN', '/assets/routes/rpN.png', 50,50);
    this.load.image('rpNE', '/assets/routes/rpNE.png', 50,50);
    this.load.image('rtD', '/assets/routes/rtHD.png', 50,50);
    this.load.image('rtG', '/assets/routes/rtHG.png', 50,50);
    this.load.image('api', '/assets/apiculture/api.png');
    this.load.image('bureau', '/assets/buildings/Bureau.png', 50,50);
    this.load.image('green_zone', '/assets/buildings/green_zone.png');
    this.load.image('parking', '/assets/parking/parking.png', 50,50);
    this.load.image('farm_MH', '/assets/farm/farm_MH.png');
    this.load.image('grass_M', '/assets/ground/grass_M.png');
    this.load.image('grass_SM', '/assets/ground/grass_SM.png');
    this.load.image('grass', '/assets/ground/grass.png');
    this.load.image('yellowG', '/assets/ground/yellowG.png');
    this.load.image('chemin', '/assets/cheminEtAutre/chemin.png');
    this.load.image('bush', '/assets/cheminEtAutre/bush.png');
    this.load.image('bush2', '/assets/cheminEtAutre/bush2.png');
    this.load.image('usine1', '/assets/decors/usine1.png');
    this.load.image('usine2', '/assets/decors/usine2.png');
    this.load.image('station', '/assets/trainStation/station.png');
    this.load.image('rail', '/assets/rail_train/rail.png');
    this.load.image('loco', '/assets/rail_train/loco.png');
    this.load.image('wagon', '/assets/rail_train/wagon.png');
    this.load.image('warehouse', '/assets/warehouse_bis/warehouse_bis.png');
    this.load.image('maison1', '/assets/seaSide/maison1.png');
    this.load.image('maison2', '/assets/seaSide/maison2.png');
    this.load.image('maison3', '/assets/seaSide/maison3.png');
    this.load.image('maison4', '/assets/seaSide/maison4.png');
    this.load.image('maison5', '/assets/seaSide/maison5.png');
    this.load.image('maison6', '/assets/seaSide/maison6.png');
    this.load.image('maison7', '/assets/seaSide/maison7.png');
    this.load.image('arbresVD', '/assets/seaSide/arbresVD.png');
    this.load.image('arbresVB', '/assets/seaSide/arbresVB.png');
    this.load.image('market', '/assets/market/market.png');
    this.load.image('dock', '/assets/dock/dock.png');
    this.load.image('resto', '/assets/decors/resto.png', 50,50);
    this.load.image('pnj1', '/assets/people/pnj1_2.png');
   // this.load.image('i_dude', '/assets/invisible_dude.png');


    this.load.spritesheet('dude', '/assets/dude.png', { frameWidth: 32, frameHeight: 48 });


  }



  create() {
    this.add.text(600, 460, "Start the Game");
    this.scene.start("Scene2");
  }
}


// text

