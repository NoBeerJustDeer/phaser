var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
	this.load.image("sky", "assets/Background.png");
}

function create ()
{
	this.add.image(600, 800, "sky").setOrigin(0,0);
}

function update ()
{
}
