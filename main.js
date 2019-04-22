var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
	    default: "arcade",
	    arcade: {
	    	gravity: {y, 300},
		debug: false
	    }
    },	
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

var platforms;

function create ()
{
	this.add.image(400, 300, "sky");
	
	platforms = this.physics.add.staticGroup();
	
	platforms.create(400, 568, 'ground').setScale(2).refreshBody();
	platforms.create(600, 400, 'ground');
}

function update ()
{
}
