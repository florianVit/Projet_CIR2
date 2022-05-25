class Scene4 extends Phaser.Scene {
    constructor() {
        super("Scene4");
    }


create ()
{


    var player;
    var resto;



    //this.physics.startSystem(Phaser.Physics.ARCADE);
    //Fond d'écran
    //this.stage.backgroundColor = '#124184';
    this.add.image(400, 300, 'earth').setScale(6);


    //Fond vert côté résidentiel
    {
        this.add.image(953-550, 346-320, 'green_clair').setScale(0.9);
        this.add.image(953, 346, 'green_clair').setScale(1);
        this.add.image(953-550, 346+320, 'yellowG').setScale(0.9);
        this.add.image(953-550*2, 346, 'green').setScale(1);
        this.add.image(953+550, 346+320, 'sea').setScale(1);
        this.add.image(953+550*2, 346, 'sea').setScale(1);
        this.add.image(953+550, 346-320, 'sea').setScale(1);
        //this.add.image(953, 346, 'black').setScale(0.9);
    }
    //Ferme
    {
        this.add.image(-520, 261, 'grass_M').setScale(0.1);
        this.add.image(-463, 228, 'grass_M').setScale(0.1);
        this.add.image(-463+57, 228-33, 'grass_M').setScale(0.1);
        this.add.image(-463+57*2, 229-33*2, 'grass_M').setScale(0.1);
        this.add.image(-463+57*3, 229-33*3, 'grass_M').setScale(0.1);
        this.add.image(-463+57*4, 229-33*4, 'grass_M').setScale(0.1);
        this.add.image(-463+57*5, 229-33*5, 'grass_M').setScale(0.1);
        this.add.image(-463+57*6, 229-33*6, 'grass_M').setScale(0.1);

        this.add.image(-520-57, 261+33, 'grass_M').setScale(0.1);

        this.add.image(-72, 66, 'grass_SM').setScale(0.1);
        this.add.image(-72+49, 66+32, 'grass_SM').setScale(0.1);
        this.add.image(-72+47*2, 61+32*2, 'grass_SM').setScale(0.1);
        this.add.image(-72+47*3, 57+32*3, 'grass_SM').setScale(0.1);
        this.add.image(-72+47*4, 53+32*4, 'grass_SM').setScale(0.1);

        this.add.image(-575-60+20, 376-30-10 , 'grass_SM').setScale(0.1);
        this.add.image(-575-60+57, 376-30-33 , 'grass_SM').setScale(0.1);

        this.add.image(-575+20, 376-10 , 'grass_SM').setScale(0.1);
        this.add.image(-575+57, 376-33 , 'grass_SM').setScale(0.1);
        this.add.image(-575+57*2, 376-33*2, 'grass_SM').setScale(0.1);
        this.add.image(-575+57*3, 376-33*3 , 'grass_SM').setScale(0.1);
        this.add.image(-575+57*4, 376-33*4 , 'grass_SM').setScale(0.1);

        this.add.image(-515+20, 406-10 , 'grass_SM').setScale(0.1);
        this.add.image(-515+57, 406-33 , 'grass_SM').setScale(0.1);
        this.add.image(-515+57*2, 406-33*2, 'grass_SM').setScale(0.1);
        this.add.image(-515+57*3, 406-33*3 , 'grass_SM').setScale(0.1);
        this.add.image(-515+57*4, 406-33*4 , 'grass_SM').setScale(0.1);

        this.add.image(-455+20, 436-10 , 'grass_SM').setScale(0.1);
        this.add.image(-455+57, 436-33 , 'grass_SM').setScale(0.1);
        this.add.image(-455+57*2, 436-33*2, 'grass_SM').setScale(0.1);
        this.add.image(-455+57*3, 436-33*3 , 'grass_SM').setScale(0.1);
        this.add.image(-455+57*4, 436-33*4 , 'grass_SM').setScale(0.1);

        this.add.image(-395, 466 , 'grass_SM').setScale(0.1);
        this.add.image(-395+57, 466-33 , 'grass_SM').setScale(0.1);
        this.add.image(-395+57*2, 466-33*2, 'grass_SM').setScale(0.1);
        this.add.image(-395+57*3, 466-33*3 , 'grass_SM').setScale(0.1);
        this.add.image(-395+57*4, 466-33*4 , 'grass_SM').setScale(0.1);

        this.add.image(163, 209, 'grass_SM').setScale(0.1);
        this.add.image(163-57, 209+33, 'grass_SM').setScale(0.1);
        this.add.image(163-57*2, 209+33*2, 'grass_SM').setScale(0.1);
        this.add.image(163-57*3, 209+33*3, 'grass_SM').setScale(0.1);
        this.add.image(163-57*4, 209+33*4, 'grass_SM').setScale(0.1);
        this.add.image(163-57*5, 209+33*5, 'grass_SM').setScale(0.1);
        this.add.image(163-57*6, 209+33*6, 'grass_SM').setScale(0.1);
        this.add.image(163-57*7, 209+33*7, 'grass_SM').setScale(0.1);
        this.add.image(163-57*8, 209+33*8, 'grass_SM').setScale(0.1);

        this.add.image(-335, 496 , 'grass_SM').setScale(0.1);

        this.add.image(210, 237, 'grass_SM').setScale(0.1);
        this.add.image(210-57, 237+33, 'grass_SM').setScale(0.1);
        this.add.image(210-57*2, 237+33*2, 'grass_SM').setScale(0.1);
        this.add.image(210-57*3, 237+33*3, 'grass_SM').setScale(0.1);
        this.add.image(210-57*4, 237+33*4, 'grass_SM').setScale(0.1);
        this.add.image(210-57*5, 237+33*5, 'grass_SM').setScale(0.1);
        this.add.image(210-57*6, 237+33*6, 'grass_SM').setScale(0.1);
        this.add.image(210-57*7, 237+33*7, 'grass_SM').setScale(0.1);
        this.add.image(210-57*8, 237+33*8, 'grass_SM').setScale(0.1);

        this.add.image(-335+60, 496+30 , 'grass_SM').setScale(0.1);
        this.add.image(-335+60*2, 496+30*2 , 'grass_SM').setScale(0.1);


        this.add.image(-155, 586 , 'grass_SM').setScale(0.1);
        this.add.image(-155+57, 586-33, 'grass_SM').setScale(0.1);
        this.add.image(-155+57*2, 586-33*2, 'grass_SM').setScale(0.1);
        this.add.image(-155+57*3, 586-33*3, 'grass_SM').setScale(0.1);
        this.add.image(-155+57*4, 586-33*4, 'grass_SM').setScale(0.1);
        this.add.image(-155+57*5, 586-33*5, 'grass_SM').setScale(0.1);
        this.add.image(-155+57*6, 586-33*6, 'grass_SM').setScale(0.1);
        this.add.image(-155+57*7, 586-33*7, 'grass_SM').setScale(0.1);
        this.add.image(-155+57*8, 586-33*8, 'grass_SM').setScale(0.1);

        this.add.image(257, 265, 'grass_SM').setScale(0.1);
        this.add.image(257-57, 265+33, 'grass_SM').setScale(0.1);
        this.add.image(257-57*2, 265+33*2, 'grass_SM').setScale(0.1);
        this.add.image(257-57*3, 265+33*3, 'grass_SM').setScale(0.1);
        this.add.image(257-57*4, 265+33*4, 'grass_SM').setScale(0.1);
        this.add.image(257-57*5, 265+33*5, 'grass_SM').setScale(0.1);
        this.add.image(257-57*6, 265+33*6, 'grass_SM').setScale(0.1);
        this.add.image(257-57*7, 265+33*7, 'grass_SM').setScale(0.1);
        this.add.image(257-57*8, 265+33*8, 'grass_SM').setScale(0.1);

        this.add.image(304, 293, 'grass_SM').setScale(0.1);
        this.add.image(304-57, 293+33, 'grass_SM').setScale(0.1);
        this.add.image(304-57*2, 293+33*2, 'grass_SM').setScale(0.1);
        this.add.image(304-57*3, 293+33*3, 'grass_SM').setScale(0.1);
        this.add.image(304-57*4, 293+33*4, 'grass_SM').setScale(0.1);
        this.add.image(304-57*5, 293+33*5, 'grass_SM').setScale(0.1);
        this.add.image(304-57*6, 293+33*6, 'grass_SM').setScale(0.1);
        this.add.image(304-57*7, 293+33*7, 'grass_SM').setScale(0.1);
        this.add.image(304-57*8, 293+33*8, 'grass_SM').setScale(0.1);

        //Rangée 1
        this.add.image(-66-58, 64+28, 'grass').setScale(0.1);
        this.add.image(-66-53*2, 64+28*2, 'grass').setScale(0.1);
        this.add.image(-66-51*3, 64+28*3, 'grass').setScale(0.1);
        this.add.image(-66-50*4, 64+28*4, 'grass').setScale(0.1);
        this.add.image(-66-50*5, 64+28*5, 'grass').setScale(0.1);

        //Rangée 2
        this.add.image(-124+60, 92+30, 'grass').setScale(0.1);
        this.add.image(-60-53, 122+28, 'grass').setScale(0.1);
        this.add.image(-58-53*2, 122+28*2, 'grass').setScale(0.1);
        this.add.image(-58-51*3, 122+28*3, 'grass').setScale(0.1);
        this.add.image(-58-50*4, 122+28*4, 'grass').setScale(0.1);

        //Rangée 3
        this.add.image(-10, 152, 'grass').setScale(0.1);
        this.add.image(-8-53, 152+28, 'grass').setScale(0.1);
        this.add.image(-4-53*2, 152+28*2, 'grass').setScale(0.1);
        this.add.image(-4-51*3, 152+28*3, 'grass').setScale(0.1);
        this.add.image(-4-50*4, 152+28*4, 'grass').setScale(0.1);

        //Rangée 4
        this.add.image(45, 182, 'grass').setScale(0.1);
        this.add.image(47-53, 182+28, 'grass').setScale(0.1);
        this.add.image(50-53*2, 182+28*2, 'grass').setScale(0.1);
        this.add.image(50-51*3, 182+28*3, 'grass').setScale(0.1);
        this.add.image(50-50*4, 182+28*4, 'grass').setScale(0.1);

        //Rangée 5
        this.add.image(105, 212, 'grass').setScale(0.1);
        this.add.image(105-53, 216+28, 'grass').setScale(0.1);
        this.add.image(108-53*2, 216+28*2, 'grass').setScale(0.1);
        this.add.image(108-51*3, 216+28*3, 'grass').setScale(0.1);
        this.add.image(108-50*4, 216+28*4, 'grass').setScale(0.1);

        this.add.image(-375, 241, 'grass_SM').setScale(0.1);




        this.add.image(-388, 346, 'chemin').setScale(0.05);
        this.add.image(-423, 366, 'chemin').setScale(0.05);
        this.add.image(-458, 386, 'chemin').setScale(0.05);
    }


    //Côté usine
    {
        this.add.image(-83, 637, 'yellowG').setScale(0.1);
        this.add.image(-83+57, 637-33, 'yellowG').setScale(0.1);
        this.add.image(-83+57*2, 637-33*2, 'yellowG').setScale(0.1);
        this.add.image(-83+57*3, 637-33*3, 'yellowG').setScale(0.1);
        this.add.image(-83+57*4, 637-33*4, 'yellowG').setScale(0.1);
        this.add.image(-83+57*5, 637-33*5, 'yellowG').setScale(0.1);
        this.add.image(-83+57*6, 637-33*6, 'yellowG').setScale(0.1);
        this.add.image(-83+57*7, 637-33*7, 'yellowG').setScale(0.1);
        this.add.image(-83+57*8, 637-33*8, 'yellowG').setScale(0.1);
        this.add.image(-83+57*9, 637-33*9, 'yellowG').setScale(0.1);

        //+50  +37
        this.add.image(-13, 664, 'yellowG').setScale(0.1);
        this.add.image(-33+57, 674-33, 'yellowG').setScale(0.1);
        this.add.image(-33+57*2, 674-33*2, 'yellowG').setScale(0.1);
        this.add.image(-33+57*3, 674-33*3, 'yellowG').setScale(0.1);
        this.add.image(-33+57*4, 674-33*4, 'yellowG').setScale(0.1);
        this.add.image(-33+57*5, 674-33*5, 'yellowG').setScale(0.1);
        this.add.image(-33+57*6, 674-33*6, 'yellowG').setScale(0.1);
        this.add.image(-33+57*7, 674-33*7, 'yellowG').setScale(0.1);
        this.add.image(-33+57*8, 674-33*8, 'yellowG').setScale(0.1);
        this.add.image(-33+57*9, 674-33*9, 'yellowG').setScale(0.1);

        this.add.image(17+57, 711-33, 'yellowG').setScale(0.1);
        this.add.image(17+57*2, 711-33*2, 'yellowG').setScale(0.1);
        this.add.image(17+57*3, 711-33*3, 'yellowG').setScale(0.1);
        this.add.image(17+57*4, 711-33*4, 'yellowG').setScale(0.1);
        this.add.image(17+57*5, 711-33*5, 'yellowG').setScale(0.1);
        this.add.image(17+57*6, 711-33*6, 'yellowG').setScale(0.1);
        this.add.image(17+57*7, 711-33*7, 'yellowG').setScale(0.1);
        this.add.image(17+57*8, 711-33*8, 'yellowG').setScale(0.1);
        this.add.image(17+57*9, 711-33*9, 'yellowG').setScale(0.1);

        this.add.image(67+57, 748-33, 'yellowG').setScale(0.1);
        this.add.image(67+57*2, 748-33*2, 'yellowG').setScale(0.1);
        this.add.image(67+57*4, 748-33*4, 'yellowG').setScale(0.1);
        this.add.image(67+57*5, 748-33*5, 'yellowG').setScale(0.1);
        this.add.image(67+57*6, 748-33*6, 'yellowG').setScale(0.1);
        this.add.image(67+57*7, 748-33*7, 'yellowG').setScale(0.1);
        this.add.image(67+57*8, 748-33*8, 'yellowG').setScale(0.1);
        this.add.image(67+57*9, 748-33*9, 'yellowG').setScale(0.1);

        this.add.image(117+57, 785-33, 'yellowG').setScale(0.1);
        this.add.image(117+57*2, 785-33*2, 'yellowG').setScale(0.1);
        this.add.image(173+57*2, 752-33*2, 'yellowG').setScale(0.1);
        this.add.image(117+57*4, 785-33*4, 'yellowG').setScale(0.1);
        this.add.image(117+57*5, 785-33*5, 'yellowG').setScale(0.1);
        this.add.image(117+57*6, 785-33*6, 'yellowG').setScale(0.1);
        this.add.image(117+57*7, 785-33*7, 'yellowG').setScale(0.1);
        this.add.image(117+57*8, 785-33*8, 'yellowG').setScale(0.1);
        this.add.image(117+57*9, 785-33*9, 'yellowG').setScale(0.1);

        this.add.image(167+57, 822-33, 'yellowG').setScale(0.1);
        this.add.image(167+57*2, 822-33*2, 'yellowG').setScale(0.1);
        this.add.image(223+57*2, 789-33*2, 'yellowG').setScale(0.1);
        this.add.image(167+57*4, 822-33*4, 'yellowG').setScale(0.1);
        this.add.image(167+57*5, 822-33*5, 'yellowG').setScale(0.1);
        this.add.image(167+57*6, 822-33*6, 'yellowG').setScale(0.1);
        this.add.image(167+57*7, 822-33*7, 'yellowG').setScale(0.1);
        this.add.image(167+57*8, 822-33*8, 'yellowG').setScale(0.1);
        this.add.image(167+57*9, 822-33*9, 'yellowG').setScale(0.1);
        this.add.image(147+57*10, 832-33*10, 'yellowG').setScale(0.1);

        this.add.image(217+57, 859-33, 'yellowG').setScale(0.1);
        this.add.image(217+57*2, 859-33*2, 'yellowG').setScale(0.1);
        this.add.image(265+57*2, 819-33*2, 'yellowG').setScale(0.1);
        this.add.image(217+57*4, 859-33*4, 'yellowG').setScale(0.1);
        this.add.image(217+57*5, 859-33*5, 'yellowG').setScale(0.1);
        this.add.image(217+57*6, 859-33*6, 'yellowG').setScale(0.1);
        this.add.image(217+57*7, 859-33*7, 'yellowG').setScale(0.1);
        this.add.image(217+57*8, 859-33*8, 'yellowG').setScale(0.1);
        this.add.image(217+57*9, 859-33*9, 'yellowG').setScale(0.1);
        this.add.image(197+57*10, 869-33*10, 'yellowG').setScale(0.1);

        this.add.image(267+57, 896-33, 'yellowG').setScale(0.1);
        this.add.image(267+57*2, 896-33*2, 'yellowG').setScale(0.1);
        this.add.image(315+57*2, 858-33*2, 'yellowG').setScale(0.1);
        this.add.image(267+57*4, 896-33*4, 'yellowG').setScale(0.1);
        this.add.image(267+57*5, 896-33*5, 'yellowG').setScale(0.1);
        this.add.image(267+57*6, 896-33*6, 'yellowG').setScale(0.1);
        this.add.image(267+57*7, 896-33*7, 'yellowG').setScale(0.1);
        this.add.image(267+57*8, 896-33*8, 'yellowG').setScale(0.1);
        this.add.image(267+57*9, 896-33*9, 'yellowG').setScale(0.1);
        this.add.image(267+57*10, 896-33*10, 'yellowG').setScale(0.1);

        this.add.image(317+57, 933-33, 'yellowG').setScale(0.1);
        this.add.image(317+57*2, 933-33*2, 'yellowG').setScale(0.1);
        this.add.image(365+57*2, 895-33*2, 'yellowG').setScale(0.1);
        this.add.image(317+57*4, 933-33*4, 'yellowG').setScale(0.1);
        this.add.image(317+57*5, 933-33*5, 'yellowG').setScale(0.1);
        this.add.image(317+57*6, 933-33*6, 'yellowG').setScale(0.1);
        this.add.image(317+57*7, 933-33*7, 'yellowG').setScale(0.1);
        this.add.image(317+57*8, 933-33*8, 'yellowG').setScale(0.1);
        this.add.image(317+57*9, 933-33*9, 'yellowG').setScale(0.1);
        this.add.image(317+57*10, 933-33*10, 'yellowG').setScale(0.1);

        this.add.image(140, 777, 'black').setScale(0.07);
        this.add.image(140+38, 777 -22, 'black').setScale(0.07);
        this.add.image(140+38*2, 777 -22*2, 'black').setScale(0.07);
        this.add.image(140+38*3, 777 -22*3, 'black').setScale(0.07);
        this.add.image(140+38*4, 777 -22*4, 'black').setScale(0.07);
        this.add.image(140+38*5, 777 -22*5, 'black').setScale(0.07);
        this.add.image(140+38*6, 777 -22*6, 'black').setScale(0.07);
        this.add.image(140+38*7, 777 -22*7, 'black').setScale(0.07);
        this.add.image(140+38*8, 777 -22*8, 'black').setScale(0.07);
        this.add.image(140+38*9, 777 -22*9, 'black').setScale(0.07);
        this.add.image(140+38*10, 777 -22*10, 'black').setScale(0.07);
        this.add.image(140+38*11, 777 -22*11, 'black').setScale(0.07);
        this.add.image(140+38*12, 777 -22*12, 'black').setScale(0.07);
        this.add.image(140+38*13, 777 -22*13, 'black').setScale(0.07);
        this.add.image(140+38*14, 777 -22*14, 'black').setScale(0.07);

        this.add.image(290, 820, 'black').setScale(0.07);
        this.add.image(290+38, 820 -22, 'black').setScale(0.07);
        this.add.image(290+38*2, 820 -22*2, 'black').setScale(0.07);



        //Rails
        this.add.image(-305-24*47, 802-14*47, 'rail').setScale(0.08);
        this.add.image(-305-24*46, 802-14*46, 'rail').setScale(0.08);
        this.add.image(-305-24*45, 802-14*45, 'rail').setScale(0.08);
        this.add.image(-305-24*44, 802-14*44, 'rail').setScale(0.08);
        this.add.image(-305-24*43, 802-14*43, 'rail').setScale(0.08);
        this.add.image(-305-24*42, 802-14*42, 'rail').setScale(0.08);
        this.add.image(-305-24*41, 802-14*41, 'rail').setScale(0.08);
        this.add.image(-305-24*40, 802-14*40, 'rail').setScale(0.08);
        this.add.image(-305-24*39, 802-14*39, 'rail').setScale(0.08);
        this.add.image(-305-24*38, 802-14*38, 'rail').setScale(0.08);
        this.add.image(-305-24*37, 802-14*37, 'rail').setScale(0.08);
        this.add.image(-305-24*36, 802-14*36, 'rail').setScale(0.08);
        this.add.image(-305-24*35, 802-14*35, 'rail').setScale(0.08);
        this.add.image(-305-24*34, 802-14*34, 'rail').setScale(0.08);
        this.add.image(-305-24*33, 802-14*33, 'rail').setScale(0.08);
        this.add.image(-305-24*32, 802-14*32, 'rail').setScale(0.08);
        this.add.image(-305-24*31, 802-14*31, 'rail').setScale(0.08);
        this.add.image(-305-24*30, 802-14*30, 'rail').setScale(0.08);
        this.add.image(-305-24*29, 802-14*29, 'rail').setScale(0.08);
        this.add.image(-305-24*28, 802-14*28, 'rail').setScale(0.08);
        this.add.image(-305-24*27, 802-14*27, 'rail').setScale(0.08);
        this.add.image(-305-24*26, 802-14*26, 'rail').setScale(0.08);
        this.add.image(-305-24*25, 802-14*25, 'rail').setScale(0.08);
        this.add.image(-305-24*24, 802-14*24, 'rail').setScale(0.08);
        this.add.image(-305-24*23, 802-14*23, 'rail').setScale(0.08);
        this.add.image(-305-24*22, 802-14*22, 'rail').setScale(0.08);
        this.add.image(-305-24*21, 802-14*21, 'rail').setScale(0.08);
        this.add.image(-305-24*20, 802-14*20, 'rail').setScale(0.08);
        this.add.image(-305-24*19, 802-14*19, 'rail').setScale(0.08);
        this.add.image(-305-24*18, 802-14*18, 'rail').setScale(0.08);
        this.add.image(-305-24*17, 802-14*17, 'rail').setScale(0.08);
        this.add.image(-305-24*16, 802-14*16, 'rail').setScale(0.08);
        this.add.image(-305-24*15, 802-14*15, 'rail').setScale(0.08);
        this.add.image(-305-24*14, 802-14*14, 'rail').setScale(0.08);
        this.add.image(-305-24*13, 802-14*13, 'rail').setScale(0.08);
        this.add.image(-305-24*12, 802-14*12, 'rail').setScale(0.08);
        this.add.image(-305-24*11, 802-14*11, 'rail').setScale(0.08);
        this.add.image(-305-24*10, 802-14*10, 'rail').setScale(0.08);
        this.add.image(-305-24*9, 802-14*9, 'rail').setScale(0.08);
        this.add.image(-305-24*8, 802-14*8, 'rail').setScale(0.08);
        this.add.image(-305-24*7, 802-14*7, 'rail').setScale(0.08);
        this.add.image(-305-24*6, 802-14*6, 'rail').setScale(0.08);
        this.add.image(-305-24*5, 802-14*5, 'rail').setScale(0.08);
        this.add.image(-305-24*4, 802-14*4, 'rail').setScale(0.08);
        this.add.image(-305-24*3, 802-14*3, 'rail').setScale(0.08);
        this.add.image(-305-24*2, 802-14*2, 'rail').setScale(0.08);
        this.add.image(-305-24, 802-14, 'rail').setScale(0.08);
        this.add.image(-305, 802, 'rail').setScale(0.08);

        for(let i = 0; i <= 40; i++){
            this.add.image(-305 + 24*i, 802 + 14*i, 'rail').setScale(0.08);
        }

        //train
        //this.add.image(-61, 868, 'station').setScale(0.07);

        this.add.image(-305-24*13, 790-14*13, 'wagon').setScale(0.1);
        this.add.image(-305-24*10, 790-14*10, 'wagon').setScale(0.1);
        this.add.image(-305-24*7, 790-14*7, 'wagon').setScale(0.1);
        this.add.image(-305-24*4, 790-14*4, 'wagon').setScale(0.1);
        this.add.image(-305-24, 796-14, 'loco').setScale(0.1);

    }

    //Côté dock
    {
        this.add.image(616-550, 255-320, 'arbresVD').setScale(0.2);
        this.add.image(866-550, 110-320, 'arbresVD').setScale(0.2);

        this.add.image(671-550, 417-320, 'arbresVB').setScale(0.2);


        this.add.image(660-550, 390-320, 'chemin').setScale(0.08);
        this.add.image(710-550, 360-320, 'chemin').setScale(0.08);
        this.add.image(712+50 -550, 360-30-320, 'chemin').setScale(0.08);
        this.add.image(712+50*2 -550, 360-30*2 -320, 'chemin').setScale(0.08);
        this.add.image(716+50*3 -550, 360-30*3 -320, 'chemin').setScale(0.08);
        this.add.image(716+50*4 -550, 360-30*4 -320, 'chemin').setScale(0.08);
        this.add.image(716+50*5 -550, 360-30*5 -320, 'chemin').setScale(0.08);
        this.add.image(716+50*6 -550, 360-30*6 -320, 'chemin').setScale(0.08);
        this.add.image(716+50*7 -550, 360-30*7 -320, 'chemin').setScale(0.08);
        //this.add.image(716+50*8 -550, 360-30*8 -320, 'chemin').setScale(0.08);



        this.add.image(915-550, 293-320, 'chemin').setScale(0.08);
        this.add.image(915+45-550, 293+25-320, 'chemin').setScale(0.08);
        this.add.image(915+45*2 -550, 293+25*2 -320, 'chemin').setScale(0.08);
        this.add.image(915+45*3 -550, 293+25*3 -320, 'chemin').setScale(0.08);

        this.add.image(855 -550, 509-320, 'chemin').setScale(0.08);
        this.add.image(855+50 -550, 509-30-320, 'chemin').setScale(0.08);
        this.add.image(855+50*2 -550, 509-30*2 -320, 'chemin').setScale(0.08);
        this.add.image(855+50*3 -550, 509-30*3 -320, 'chemin').setScale(0.08);
        this.add.image(855+50*4 -550, 509-30*4 -320, 'chemin').setScale(0.08);
        this.add.image(855+50*5 -550, 509-30*5 -320 , 'chemin').setScale(0.08);
        this.add.image(855+50*6 -550, 509-30*6 -320, 'chemin').setScale(0.08);
        this.add.image(855+50*7 -550, 509-30*7 -320, 'chemin').setScale(0.08);
        this.add.image(855+50*8 -550, 509-30*8 -320, 'chemin').setScale(0.08);
        //this.add.image(855+50*9 -550, 509-30*9 -320, 'chemin').setScale(0.08);

        this.add.image(505+200, 179-120, 'arbresVD').setScale(0.2);
        this.add.image(505, 179, 'arbresVD').setScale(0.2);




        this.add.image(616, 255, 'arbresVD').setScale(0.2);
        this.add.image(866, 110, 'arbresVD').setScale(0.2);
        this.add.image(616+50, 255+43, 'arbresVD').setScale(0.2);
        this.add.image(866+50, 110+43, 'arbresVD').setScale(0.2);

        this.add.image(671, 417, 'arbresVB').setScale(0.2);



        this.add.image(700, 428, 'black').setScale(0.07);
        this.add.image(700+38, 428 -22, 'black').setScale(0.07);
        this.add.image(700+38*2, 428 -22*2, 'black').setScale(0.07);
        this.add.image(700+38*3, 428 -22*3, 'black').setScale(0.07);
        this.add.image(700+38*4, 428 -22*4, 'black').setScale(0.07);
        this.add.image(700+38*5, 428 -22*5, 'black').setScale(0.07);
        this.add.image(700+38*6, 428 -22*6, 'black').setScale(0.07);
        this.add.image(700+38*7, 428 -22*7, 'black').setScale(0.07);
        this.add.image(700+38*8, 428 -22*8, 'black').setScale(0.07);
        this.add.image(700+38*9, 428 -22*9, 'black').setScale(0.07);
        this.add.image(700+38*10, 428 -22*10, 'black').setScale(0.07);
        this.add.image(700+38*11, 428 -22*11, 'black').setScale(0.07);
        this.add.image(700+38*12, 428 -22*12, 'black').setScale(0.07);
        this.add.image(700+38*13, 428 -22*13, 'black').setScale(0.07);

        this.add.image(1004-35, 252-25, 'black').setScale(0.07);
        this.add.image(1004-35*2, 252-25*2, 'black').setScale(0.07);
        this.add.image(1004-35*3, 252-25*3, 'black').setScale(0.07);
        this.add.image(1004-35*4, 252-25*4, 'black').setScale(0.07);
        this.add.image(1004-35*5, 252-25*5, 'black').setScale(0.07);
        this.add.image(794, 107, 'black').setScale(0.07);


        this.add.image(862-35, 335-25, 'black').setScale(0.07);
        this.add.image(862-35*2, 335-25*2, 'black').setScale(0.07);
        this.add.image(862-35*3, 335-25*3, 'black').setScale(0.07);
        this.add.image(862-35*4, 335-25*4, 'black').setScale(0.07);
        this.add.image(862-35*5, 335-25*5, 'black').setScale(0.07);
        this.add.image(652, 190, 'black').setScale(0.07);
        //this.add.image(117+57*13, 785-33*13, 'green').setScale(1);

        this.add.image(816+50, 427-17, 'arbresVD').setScale(0.2);
        this.add.image(1066+50, 282-17, 'arbresVD').setScale(0.2);




        this.add.image(795, 490, 'black').setScale(0.07);
        this.add.image(795+37, 490-22, 'black').setScale(0.07);
        this.add.image(795+37*2, 490-22*2, 'black').setScale(0.07);
        this.add.image(795+37*3, 490-22*3, 'black').setScale(0.07);
        this.add.image(795+37*4, 490-22*4, 'black').setScale(0.07);
        this.add.image(795+37*5, 491-22*5, 'black').setScale(0.07);
        this.add.image(795+37*6, 492-22*6, 'black').setScale(0.07);
        this.add.image(795+37*7, 493-22*7, 'black').setScale(0.07);
        this.add.image(795+37*8, 494-22*8, 'black').setScale(0.07);
        this.add.image(795+37*9, 495-22*9, 'black').setScale(0.07);
        this.add.image(795+37*10, 496-22*10, 'black').setScale(0.07);
        this.add.image(795+37*11, 497-22*11, 'black').setScale(0.07);
        this.add.image(795+37*12, 498-22*12, 'black').setScale(0.07);
        this.add.image(795+37*13, 499-22*13, 'black').setScale(0.07);
        this.add.image(795+37*14, 500-22*14, 'black').setScale(0.07);



        this.add.image(925+37, 410+22, 'black').setScale(0.07);
        this.add.image(925+37*2, 410+22*2, 'black').setScale(0.07);
        this.add.image(925+37*3, 410+22*3, 'black').setScale(0.07);
        this.add.image(925+37*4, 410+22*4, 'black').setScale(0.07);
        this.add.image(925+37*5, 410+22*5, 'black').setScale(0.07);

        this.add.image(1110-37, 520+22, 'black').setScale(0.07);

        this.add.image(1110-49, 520+28, 'rtD').setScale(0.1);
        //this.add.image(900, 425, 'green_clair').setScale(0.3);

    }

    //this.add.image(-520-57, 261+33, 'grass_M').setScale(0.1);
    this.add.image(640, -120, 'arbresVB').setScale(0.2);
    {
        //Nord-Est
        this.add.image(400, 300, 'rp').setScale(0.1);
        this.add.image(510, 237, 'rtD').setScale(0.1);
        this.add.image(554, 212, 'rtD').setScale(0.1);
        this.add.image(594, 189, 'rtD').setScale(0.1);
        this.add.image(634, 166, 'rtD').setScale(0.1);
        this.add.image(674, 143, 'rtD').setScale(0.1);
        this.add.image(714, 120, 'rtD').setScale(0.1);
        this.add.image(754, 97, 'rtD').setScale(0.1);
        this.add.image(754+40, 97-23, 'rtD').setScale(0.1);
        this.add.image(834, 51,'rtD').setScale(0.1);
        this.add.image(942, -13, 'rpNE').setScale(0.1);

        //Nord-Est à Est
        this.add.image(826, -79, 'rtG').setScale(0.1);
        this.add.image(825-40, -79-23, 'rtG').setScale(0.1);
        this.add.image(824-40*2, -79-23*2, 'rtG').setScale(0.1);
        this.add.image(823-40*3, -79-23*3, 'rtG').setScale(0.1);
        this.add.image(822-40*4, -79-23*4, 'rtG').setScale(0.1);
        this.add.image(821-40*5, -79-23*5, 'rtG').setScale(0.1);
        this.add.image(820-40*6, -79-23*6, 'rtG').setScale(0.1);
        this.add.image(819-40*7, -79-23*7, 'rtG').setScale(0.1);
        this.add.image(818-40*8, -79-23*8, 'rtG').setScale(0.1);

        //Est à Sud-Est
        this.add.image(1050, 50, 'rtG').setScale(0.1);
        this.add.image(1050+40, 50+23, 'rtG').setScale(0.1);
        this.add.image(1050+40*2, 50+23*2, 'rtG').setScale(0.1);
        this.add.image(1050+40*3, 50+23*3, 'rtG').setScale(0.1);
        this.add.image(1050+40*4, 50+23*4, 'rtG').setScale(0.1);
        this.add.image(1304, 195, 'rpE').setScale(0.1);

        //Nord-Ouest
        this.add.image(285, 234, 'rtG').setScale(0.1);
        this.add.image(245, 211, 'rtG').setScale(0.1);
        this.add.image(205, 188, 'rtG').setScale(0.1);
        this.add.image(165, 165, 'rtG').setScale(0.1);
        this.add.image(125, 142, 'rtG').setScale(0.1);
        this.add.image(125-40, 142-23, 'rtG').setScale(0.1);
        this.add.image(125-40*2, 142-23*2, 'rtG').setScale(0.1);
        this.add.image(125-40*3, 142-23*3, 'rtG').setScale(0.1);
        this.add.image(125-40*4, 142-23*4, 'rtG').setScale(0.1);
        this.add.image(-254+110, 50-64, 'rpNO').setScale(0.1);

        //Sud-Ouest
        this.add.image(291, 364, 'rtD').setScale(0.1);
        this.add.image(251, 387, 'rtD').setScale(0.1);//9
        this.add.image(211, 410, 'rtD').setScale(0.1);
        this.add.image(171, 433, 'rtD').setScale(0.1);
        this.add.image(131, 456, 'rtD').setScale(0.1);
        this.add.image(91, 479, 'rtD').setScale(0.1);
        this.add.image(51, 502, 'rtD').setScale(0.1);
        this.add.image(11, 525, 'rtD').setScale(0.1);
        this.add.image(-29, 548, 'rtD').setScale(0.1);
        this.add.image(-144, 548+66 , 'rpSO').setScale(0.1);

        //Ouest
        this.add.image(-259, 548 , 'rtG').setScale(0.1);
        this.add.image(-259-40, 548-23 , 'rtG').setScale(0.1);
        this.add.image(-259-40*2, 548-23*2 , 'rtG').setScale(0.1);
        this.add.image(-259-40*3, 548-23*3 , 'rtG').setScale(0.1);
        this.add.image(-259-40*4, 548-23*4 , 'rtG').setScale(0.1);
        this.add.image(-259-40*5, 548-23*5 , 'rtG').setScale(0.1);
        this.add.image(-259-40*6, 548-23*6 , 'rtG').setScale(0.1);
        this.add.image(-259-40*7, 548-23*7 , 'rtG').setScale(0.1);
        this.add.image(-579, 364, 'rtG').setScale(0.1);
        this.add.image(-688, 300, 'rpO').setScale(0.1);

        //Ouest à nord-ouest
        this.add.image(-574, 234, 'rtD').setScale(0.1);
        this.add.image(-574+40, 234-23, 'rtD').setScale(0.1);
        this.add.image(-574+40*2, 234-23*2, 'rtD').setScale(0.1);
        this.add.image(-574+40*3, 234-23*3, 'rtD').setScale(0.1);
        this.add.image(-574+40*4, 234-23*4, 'rtD').setScale(0.1);
        this.add.image(-574+40*5, 234-23*5, 'rtD').setScale(0.1);
        this.add.image(-574+40*6, 234-23*6, 'rtD').setScale(0.1);
        this.add.image(-574+40*7, 234-23*7, 'rtD').setScale(0.1);
        this.add.image(-574+40*8, 234-23*8, 'rtD').setScale(0.1);

        //Nord-Ouest à Nord

        this.add.image(-35, -77, 'rtD').setScale(0.1);
        this.add.image(-35+40, -77-23, 'rtD').setScale(0.1);
        this.add.image(-35+40*2, -77-23*2, 'rtD').setScale(0.1);
        this.add.image(-35+40*3, -77-23*3, 'rtD').setScale(0.1);
        this.add.image(-35+40*4, -77-23*4, 'rtD').setScale(0.1);
        this.add.image(-35+40*5, -77-23*5, 'rtD').setScale(0.1);
        this.add.image(-35+40*6, -77-23*6, 'rtD').setScale(0.1);
        this.add.image(-35+40*7, -77-23*7, 'rtD').setScale(0.1);
        this.add.image(-35+40*8, -77-23*8, 'rtD').setScale(0.1);
        this.add.image(394, -325, 'rpN').setScale(0.1);


        //Sud
        this.add.image(-34, 678, 'rtG').setScale(0.1);
        this.add.image(-34+40, 678+23 , 'rtG').setScale(0.1);
        this.add.image(-34+40*2, 678+23*2 , 'rtG').setScale(0.1);
        this.add.image(-34+40*3, 678+23*3 , 'rtG').setScale(0.1);
        this.add.image(-34+40*4, 678+23*4 , 'rtG').setScale(0.1);
        this.add.image(-34+40*5, 678+23*5 , 'rtG').setScale(0.1);
        this.add.image(-34+40*6, 678+23*6 , 'rtG').setScale(0.1);
        this.add.image(-34+40*7, 678+23*7 , 'rtG').setScale(0.1);
        this.add.image(-34+40*8, 678+23*8 , 'rtG').setScale(0.1);
        this.add.image(-34+40*8 +115, 678+23*8 +66 , 'rpS').setScale(0.1);

        //Sud à Sud-est
        this.add.image(515, 863, 'rtD').setScale(0.1);
        this.add.image(515+40, 863-23, 'rtD').setScale(0.1);
        this.add.image(515+40*2, 863-23*2, 'rtD').setScale(0.1);
        this.add.image(515+40*3, 863-23*3, 'rtD').setScale(0.1);
        this.add.image(515+40*4, 863-23*4, 'rtD').setScale(0.1);
        this.add.image(515+40*5, 863-23*5, 'rtD').setScale(0.1);
        this.add.image(515+40*6, 863-23*6, 'rtD').setScale(0.1);
        this.add.image(515+40*7, 863-23*7, 'rtD').setScale(0.1);
        this.add.image(515+40*8 +2, 863-23*8 -1, 'rtD').setScale(0.1);

        //Sud-Est
        this.add.image(510, 364, 'rtG').setScale(0.1);
        this.add.image(510+40, 364+23, 'rtG').setScale(0.1);
        this.add.image(510+40*2, 364+23*2, 'rtG').setScale(0.1);
        this.add.image(510+40*3, 364+23*3, 'rtG').setScale(0.1);
        this.add.image(510+40*4, 364+23*4, 'rtG').setScale(0.1);
        this.add.image(510+40*5, 364+23*5, 'rtG').setScale(0.1);
        this.add.image(510+40*6, 364+23*6, 'rtG').setScale(0.1);
        this.add.image(510+40*7, 364+23*7, 'rtG').setScale(0.1);
        this.add.image(510+40*8, 364+23*8, 'rtG').setScale(0.1);
        this.add.image(510+40*8 +115, 364+23*8 +66, 'rpSE').setScale(0.1);

    }

    //Collisions
    this.player = this.matter.add.sprite(400, 300, 'i_dude').setScale(0.01);
    this.player.name = 'player';
    //this.physics.world.enable(player, Phaser.Physics.ARCADE);

    //this.physics.enable(player, Phaser.Physics.ARCADE);
    //this.physics.enableBody(player);
    //player.body.collideWorldBounds = true;
    this.player.setBounce(1);


    this.resto = this.add.sprite(1085-550, 253-320, 'resto').setScale(0.4);
    this.resto.name = 'resto';

    this.add.image(1155-550, 310-320, 'green_zone').setScale(0.13);
    var pnj7 = this.add.image(1155-550, 290-320, 'pnj1').setScale(0.03).setInteractive({cursor:'pointer'});
    pnj7.on('pointerover', function(event){
        pnj7.setScale(0.07);
    });
    pnj7.on('pointerout', function(event){
        pnj7.setScale(0.03);
    });
    //resto.setAngle(-30);
    //this.physics.world.enable(resto, Phaser.Physics.ARCADE);
    //this.physics.enableBody(resto);

    {

        this.add.image(1200, 407, 'dock').setScale(0.17);

        this.add.image(1130, 473, 'green_zone').setScale(0.13);
        var pnj5 = this.add.image(1130, 457, 'pnj1').setScale(0.03).setInteractive({cursor:'pointer'});
        pnj5.on('pointerover', function(event){
            pnj5.setScale(0.07);
        });
        pnj5.on('pointerout', function(event){
            pnj5.setScale(0.03);
        });


        this.add.image(855-550, 393-320, 'market').setScale(0.15);

        this.add.image(965-550, 385-320, 'green_zone').setScale(0.13);
        var pnj6 = this.add.image(965-550, 373-320, 'pnj1').setScale(0.03).setInteractive({cursor:'pointer'});
        pnj6.on('pointerover', function(event){
            pnj6.setScale(0.07);
        });
        pnj6.on('pointerout', function(event){
            pnj6.setScale(0.03);
        });
        //this.add.image(675, -163, 'bureau').setScale(0.2);
        //this.add.image(675, -163, 'arbresVB').setScale(0.2);

        this.add.image(940 -550, 127 -320, 'maison3').setScale(0.3);
        this.add.image(823-550, 206-320, 'maison2').setScale(0.3);
        this.add.image(677-550, 283-320, 'maison1').setScale(0.3);

        this.add.image(-425, 285, 'farm_MH').setScale(0.1);
        this.add.image(-425, 340, 'green_zone').setScale(0.13);
        var pnj1 = this.add.image(-425, 325, 'pnj1').setScale(0.03).setInteractive({cursor:'pointer'});
        pnj1.on('pointerover', function(event){
            pnj1.setScale(0.07);
        });
        pnj1.on('pointerout', function(event){
            pnj1.setScale(0.03);
        });

        this.add.image(-448 , 359, 'bush').setScale(0.05);
        this.add.image(-465, 369, 'bush').setScale(0.05);
        this.add.image(-482 , 379, 'bush').setScale(0.05);

        this.add.image(-375, 328, 'bush2').setScale(0.05);
        this.add.image(-358, 338, 'bush2').setScale(0.05);


        this.add.image(-430+17*4, 389-10*4, 'bush').setScale(0.05);
        this.add.image(-430+17*3, 389-10*3, 'bush').setScale(0.05);
        this.add.image(-430+17*2, 389-10*2, 'bush').setScale(0.05);
        this.add.image(-430+17, 389-10, 'bush').setScale(0.05);
        this.add.image(-430, 389, 'bush').setScale(0.05);
        this.add.image(-447, 399, 'bush').setScale(0.05);

        this.add.image(-255, 435, 'api').setScale(0.07);
        this.add.image(-155, 500, 'green_zone').setScale(0.13);
        var pnj8 = this.add.image(-155, 485, 'pnj1').setScale(0.03).setInteractive({cursor:'pointer'});
        pnj8.on('pointerover', function(event){
            pnj8.setScale(0.07);
        });
        pnj8.on('pointerout', function(event){
            pnj8.setScale(0.03);
        });

        this.add.image(1040, 127, 'bureau').setScale(0.22);
        var pnj2 = this.add.image(1085, 190, 'pnj1').setScale(0.03).setInteractive({cursor:'pointer'});
        pnj2.on('pointerover', function(event){
            pnj2.setScale(0.07);
        });
        pnj2.on('pointerout', function(event){
            pnj2.setScale(0.03);
        });

        this.add.image(880, 196, 'building2').setScale(0.3);
        this.add.image(740, 263, 'building1').setScale(0.3);

        this.add.image(411, 473, 'usine2').setScale(0.4);


        this.add.image(157, 622, 'usine1').setScale(0.4);

        this.add.image(135, 735, 'green_zone').setScale(0.13);
        var pnj3 = this.add.image(135, 723, 'pnj1').setScale(0.03).setInteractive({cursor:'pointer'});
        pnj3.on('pointerover', function(event){
            pnj3.setScale(0.07);
        });
        pnj3.on('pointerout', function(event){
            pnj3.setScale(0.03);
        });

        this.add.image(545, 687, 'warehouse').setScale(0.09);

        this.add.image(605, 650, 'green_zone').setScale(0.13);
        var pnj4 = this.add.image(605, 637, 'pnj1').setScale(0.03).setInteractive({cursor:'pointer'});
        pnj4.on('pointerover', function(event){
            pnj4.setScale(0.07);
        });
        pnj4.on('pointerout', function(event){
            pnj4.setScale(0.03);
        });
        pnj4.on('pointerup', function (event) {
            this.oui= this.add.sprite(600,275 , "ui").setScrollFactor(0);
            this.a=this.add.sprite(700,475 , "non").setInteractive({ cursor: 'pointer' }).setScrollFactor(0);
            this.non = this.add.sprite(475,475 , "oui").setInteractive({ cursor: 'pointer' }).setScrollFactor(0);
            this.non.on('pointerup', function (event) {
                this.non.destroy();
                this.oui.destroy();
                this.a.destroy();
            },this);
            this.a.on('pointerup', function (event) {
                this.non.destroy();
                this.oui.destroy();
                this.a.destroy();
            },this);

},this);

//plateformes.setCollisionByProperty({ estSolide: true });
//this.add.image(754, 97, 'parking').setScale(0.1);
//this.physics.add.collider(player, plateformes);
//player.setBounce(0).setCollideWorldBounds(false);

this.cameras.main.startFollow(this.player, true, 0.09, 0.09);
        this.cameras.main.setZoom(1);
// this.cameras.main.roundPixels = true;
//player.setBounce(0);
//player.setCollideWorldBounds(true);

this.anims.create({
key: 'left',
frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
frameRate: 10,
repeat: -1
});

this.anims.create({
key: 'turn',
frames: [ { key: 'dude', frame: 4 } ],
frameRate: 20
});

this.anims.create({
key: 'right',
frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
frameRate: 10,
repeat: -1
});

//player.body.setGravityY(0);
//this.physics.add.collider(player, platforms);

//this.physics.add.collider(player, resto);

//this.physics.collide(player, resto);
this.cursors = this.input.keyboard.createCursorKeys();

//this.physics.add.collider(stars, platforms);

//scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

//this.physics.add.collider(resto);
this.pause=this.add.sprite(50,50,'pause').setInteractive({ cursor: 'pointer' }).setScrollFactor(0);
this.pause.on('pointerup', function (event) {
this.sup=this.add.sprite(140,50,'supp').setInteractive({ cursor: 'pointer' }).setScrollFactor(0);
this.sup.on('pointerup', function (event) {
argent.destroy();

santer.destroy();
avis.destroy();
ethique.destroy();
text1.destroy();
text2.destroy();
text3.destroy();
text4.destroy();
this.sup.destroy();
}, this);
let argent=this.makeBar(140,100,0x09FA09).setScrollFactor(0);
let text1=this.add.text( 140, 100, 'argent' ).setScrollFactor(0);
this.setValue(argent,50);


let santer=this.makeBar(140,200,0xe74c3c).setScrollFactor(0);
let text2=this.add.text( 140, 200, 'santé' ).setScrollFactor(0);
this.setValue(santer,50);


let avis=this.makeBar(140,300,0x0977FA).setScrollFactor(0);
let text3=this.add.text( 140, 300, 'Avis' ).setScrollFactor(0);
this.setValue(avis,50);

let ethique=this.makeBar(140,400,0xC309FA).setScrollFactor(0);
let text4=this.add.text( 140, 400, 'éthique' ).setScrollFactor(0);
this.setValue(ethique,50);
}, this);

}
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
update ()
{

//this.matter.add.collider(resto, player);
//this.physics.arcade.collide(resto, player);
if (this.cursors.left.isDown)
{
//player.setVelocityX(-160);
//player.body.velocity.y = -90;
this.player.x -= 5;
this.player.y -=5;

//player.anims.play('left', true);
}
else if (this.cursors.right.isDown)
{
this.player.x += 5;
this.player.y +=5;

//player.anims.play('right', true);
}
else if (this.cursors.up.isDown)
{
this.player.x += 5;
this.player.y -=5;

}
else if (this.cursors.down.isDown)
{
this.player.x -= 5;
this.player.y +=5;
}
else
{

this.player.x -= 0;
this.player.y -= 0;

//player.anims.play('turn');
}


}
}