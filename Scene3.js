class Scene3 extends Phaser.Scene {
    constructor() {
        super("Scene3");
    }

    create()
    {
        this.Game= this.add.text(550, 100, 'Bienvenue');

        this.label = this.add.text(200, 150, '').setWordWrapWidth(800) //def retour a la ligne
        this.typewriteText('L\'objectif du jeu est de maintenir le niveau de 4 statistiques: Santé (Positif : ' +
            'nourriture de bonne qualité et saine ; négatif : nourriture de mauvaise qualité) Opinion population (Positif : nourriture variée ; négatif : nourriture identique/non variée) Argent entreprise (positif : beaucoup d\'argent mais l\'alimentation n\'est pas top ; Négatif : l’inverse) Éthique (usage de pesticide/pêche industrielle/pêcheurs locaux /culture bio)\n' +
            'À un certain pourcentage (atteindre 0 % dans une stat équivaudra à un Game over) Le nombre de missions sera défini à chaque début de jour. (entre 2- 5 à voir) ' +
            'Les Jours représentent le score, plus vous allez loin, plus vous serez dans les meilleurs joueurs.' +'Êtes-vous prêt à commencer votre aventure ?');

        this.load = this.add.sprite(600,550 , "start").setInteractive({ cursor: 'pointer' });

        this.load.on('pointerover', function (event) {
            //this.setTint(0xff0000);
            this.setTexture("start_hover");
        });
        this.load.on('pointerout', function (event) {
            this.setTexture("start");
        });
        this.load.on('pointerup', function (event) {
            /*this.oui= this.add.sprite(600,275 , "ui");
            this.a=this.add.sprite(700,475 , "non").setInteractive({ cursor: 'pointer' });
            this.non = this.add.sprite(475,475 , "oui").setInteractive({ cursor: 'pointer' });
            this.non.on('pointerup', function (event) {
                this.non.destroy();
                this.oui.destroy();
                this.a.destroy();
            },this);
            let argent=this.makeBar(140,100,0x09FA09);
            this.add.text( 140, 100, 'argent' );
            this.setValue(argent,50);


            let santer=this.makeBar(140,200,0xe74c3c);
            this.add.text( 140, 200, 'santer' );
            this.setValue(santer,50);


            let avis=this.makeBar(140,300,0x0977FA);
            this.add.text( 140, 300, 'Avis' );
            this.setValue(avis,50);

            let ethique=this.makeBar(140,400,0xC309FA);
            this.add.text( 140, 400, 'éthique' );
            this.setValue(ethique,50);*/

            this.scene.start('Scene4');
            this.scene.destroy()
        }, this);
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
            delay: 5
        })
    }
    typewriteTextWrapped(text) //saut
    {
        const lines = this.label.getWrappedText(text)
        const wrappedText = lines.join('\n')

        this.typewriteText(wrappedText)
    }
}

