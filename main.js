var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: "arcade",
        arcade: {
            gravity: {y: 300},
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
    this.load.image("ground", "assets/platform.png");
    this.load.spritesheet("ploy", "assets/play.png", { frameWidth: 64, frameHeight: 64 });
}

var platforms;
var player;
var cursor;

function create ()
{
	this.add.image(400, 300, "sky");

    platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, "ground").setScale(2).refreshBody();

    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    player =  this.physics.add.sprite(100,450, "ploy");

    player.setBounce(0.2);
    player.setCollideWorldBounds(true)

    cursor = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(player, platforms);

}

function update ()
{
    if (cursor.left.isDown)
    {
        player.setVelocityX(-160);
    }
    else if (cursor.right.isDown)
    {
        player.setVelocityX(160);
    }
    else
    {
        player.setVelocityX(0);
    }
    if (cursor.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }
    
}