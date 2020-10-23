//Create global variables here

var gameState = "START";

var player;
var PlayerAnimation;
var idlePlayerImage;
var idlePlayer;
var slidingPlayer;
var slidingPlayerImage;

var ground;
var groundImage;

var invisibleGround;

var bg;

var count = 0;
var obstacle1Image;
var obstacle2Animation;
var obstacle3Animation;
var obstacle4Animation;

var startButton;
var startButtonImage;
var gameOver;
var gameOverImage;
var restart;
var restartImage;
var welcome;
var welcomeImage;

var coin1;
var coinBar = 0;
var coinGroup;

//sounds;
var afterdying;
var coin;
var jump;
var resetButtonClick;
var spawnSound;
var startButtonClick;
var themeSong;
var loseSound;

var txt;
var goal;

var info;
var infoImage;

var backButton;
var backButtonImage;

var home;
var homeImage;
var homeButtonSound;

var bullet;
var bulletImage;
var bulletGroup;

var slidingPlayerGroup;

var gunShootSound;

var ladyBugEnemyImage;
var bulletEnemyImage;
var monsterImage;

var level2Text;
var level3Text;

var skeletonAnimation;
var beastEnemyAnimation;
var peanutEnemyAnimation;

var successSound;

var goldenIdolImage;
var goldenIdol;

var playAgainButton;
var playAgainButtonImage;

function preload() {
  // loaded images , animations and sounds here

  playerAnimation = loadAnimation(
    "images/Ninja1.png",
    "images/Ninja2.png",
    "images/Ninja3.png",
    "images/Ninja4.png",
    "images/Ninja5.png",
    "images/Ninja6.png",
    "images/Ninja7.png",
    "images/Ninja8.png",
    "images/Ninja9.png",
    "images/Ninja10.png"
  );

  slidingPlayerImage = loadImage("images/slide9.png");

  groundImage = loadImage("images/ground.png");
  bg = loadImage("images/bg.png");

  startButtonImage = loadImage("images/start.png");
  idlePlayerImage = loadImage("images/idle.png");

  obstacle1Image = loadImage("images/obstacle1.png");
  obstacle2Animation = loadAnimation(
    "images/obstacle2 (1).png",
    "images/obstacle5.png"
  );
  obstacle3Animation = loadAnimation(
    "images/obstacle3.png",
    "images/obstacle4.png"
  );

  obstacle4Animation = loadAnimation("images/honey1.png", "images/honey2.png");

  restartImage = loadImage("images/restart.png");
  gameOverImage = loadImage("images/gameOver.png");
  welcomeImage = loadImage("images/welcome.png");

  coin1 = loadImage("images/coin1.png");

  afterdying = loadSound("sounds/afterDying.mp3");
  coin = loadSound("sounds/coin.mp3");
  jump = loadSound("sounds/jump.mp3");
  resetButtonClick = loadSound("sounds/resetButtonClick.mp3");
  spawnSound = loadSound("sounds/spawnSound.mp3");
  startButtonClick = loadSound("sounds/startButtonClick.mp3");
  themeSong = loadSound("sounds/themeSong.mp3");
  loseSound = loadSound("sounds/lose.mp3");
  gunShootSound = loadSound("sounds/gunshoot.mp3");
  homeButtonSound = loadSound("sounds/home button click.mp3");
  successSound = loadSound("sounds/success.mp3");

  infoImage = loadImage("images/info.png");
  backButtonImage = loadImage("images/back.png");
  homeImage = loadImage("images/Home.png");
  bulletImage = loadImage("images/bullet.png");

  bulletEnemyImage = loadImage("images/bulletEnemy.png");
  ladyBugEnemyImage = loadAnimation(
    "images/ladyBugEnemy0.png",
    "images/ladyBugEnemy1.png"
  );

  monsterImage = loadImage("images/monster.png");
  skeletonAnimation = loadAnimation(
    "images/skeleton0.png",
    "images/skeleton1.png",
    "images/skeleton2.png",
    "images/skeleton3.png",
    "images/skeleton4.png",
    "images/skeleton5.png",
    "images/skeleton6.png",
    "images/skeleton7.png",
    "images/skeleton8.png",
    "images/skeleton9.png",
    "images/skeleton10.png",
    "images/skeleton12.png"
  );

  beastEnemyAnimation = loadAnimation(
    "images/beast0.png",
    "images/beast1.png",
    "images/beast2.png",
    "images/beast3.png",
    "images/beast4.png",
    "images/beast5.png",
    "images/beast6.png",
    "images/beast7.png",
    "images/beast8.png",
    "images/beast9.png",
    "images/beast10.png",
    "images/beast11.png",
    "images/beast12.png",
    "images/beast13.png",
    "images/beast14.png",
    "images/beast15.png",
    "images/beast16.png",
    "images/beast17.png",
    "images/beast18.png",
    "images/beast19.png"
  );

  peanutEnemyAnimation = loadAnimation(
    "images/peanut1.png",
    "images/peanut2.png",
    "images/peanut3.png",
    "images/peanut4.png",
    "images/peanut5.png",
    "images/peanut6.png",
    "images/peanut7.png",
    "images/peanut8.png"
  );

  goldenIdolImage = loadImage("images/goldenIdol.png");
  playAgainButtonImage = loadImage("images/playAgain.png");
}
function setup() {
  //created canvas here
  createCanvas(800, 600);

  // created sprites and given them their properties

  player = createSprite(100, 430, 50, 50);
  player.addAnimation("running", playerAnimation);
  player.scale = 0.3;
  player.visible = false;

  player.setCollider("rectangle", 0, 0, 250, 450);

  idlePlayer = createSprite(100, 445, 50, 50);
  idlePlayer.addImage(idlePlayerImage);
  idlePlayer.scale = 0.3;
  // idlePlayer.debug = true;
  idlePlayer.setCollider("rectangle", 0, 0, 250, 450);

  ground = createSprite(400, 580, width, 50);
  ground.addImage(groundImage);
  ground.scale = 0.5;
  ground.x = ground.width / 4;

  invisibleGround = createSprite(400, 525, width, 10);
  invisibleGround.visible = false;

  startButton = createSprite(width / 2, height / 2 + 10, 20, 20);
  startButton.addImage(startButtonImage);
  startButton.scale = 0.4;
  startButton.visible = false;

  restart = createSprite(width / 2, 330, 50, 50);
  restart.addImage(restartImage);
  restart.scale = 0.4;
  restart.visible = false;

  gameOver = createSprite(width / 2, height / 2 - 100, 50, 50);
  gameOver.addImage(gameOverImage);
  gameOver.visible = false;

  welcome = createSprite(width / 2, height / 2 - 130, 50, 50);
  welcome.addImage(welcomeImage);
  welcome.scale = 0.4;
  welcome.visible = false;

  OBGroup1 = new Group();
  OBGroup2 = new Group();
  OBGroup3 = new Group();
  OBGroup4 = new Group();

  coinGroup = new Group();
  bulletGroup = new Group();
  slidingPlayerGroup = new Group();

  txt = "Press P To Play Music";
  txt.visible = false;

  goal = "Reach the Golden Idol if you dare";
  goal.visible = false;

  info = createSprite(760, 40, 50, 50);
  info.addImage(infoImage);
  info.scale = 0.8;
  info.visible = false;

  backButton = createSprite(400, 480, 50, 50);
  backButton.addImage(backButtonImage);
  backButton.scale = 1;
  backButton.visible = false;

  home = createSprite(400, 50, 50, 50);
  home.addImage(homeImage);
  home.visible = false;

  slidingPlayer = createSprite(100, 465, 50, 50);
  slidingPlayer.addImage(slidingPlayerImage);
  slidingPlayer.scale = 0.3;
  slidingPlayer.visible = false;

  level2Text = "Level 1 Completed ! Level 2 now";
  level2Text.visible = false;

  level3Text = "Level 2 Completed ! Level 3 now";
  level3Text.visible = false;

  goldenIdol = createSprite(400, 220, 50, 50);
  goldenIdol.addImage(goldenIdolImage);
  goldenIdol.scale = 0.6;

  goldenIdol.visible = false;

  playAgainButton = createSprite(400, 450, 50, 50);
  playAgainButton.addImage(playAgainButtonImage);
  playAgainButton.scale = 1.2;

  playAgainButton.visible = false;
}

function draw() {
  background(bg);

  //added condition for gameState start

  if (gameState === "START") {
    playAgainButton.visible = false;
    goldenIdol.visible = false;
    level2Text.visible = false;
    slidingPlayer.visible = false;
    home.visible = false;
    backButton.visible = false;
    info.visible = true;
    player.visible = false;
    startButton.visible = true;
    ground.velocityX = 0;

    // if mousePressedOver startButton then startButtonSound will play and gameState will PLAY

    if (mousePressedOver(startButton)) {
      startButtonClick.play();
      gameState = "PLAY";
    }

    // if mousePressedover info button then gameState will be INFO and the rules of the game will be displayed

    if (mousePressedOver(info)) {
      gameState = "INFO";
    }

    // added styles here

    fill("cyan");
    textSize(45);
    textFont("georgia");
    text("Score: " + count, 50, 70);
    text("Coins: " + coinBar, 500, 70);
  }

  // added conditions for the gameState PLAY

  if (gameState === "PLAY") {
    playAgainButton.visible = false;
    goldenIdol.visible = false;
    level2Text.visible = false;
    home.visible = true;
    slidingPlayer.visible = false;
    backButton.visible = false;
    info.visible = false;

    // if the score will be 100 then the goal variable's text will not be visible

    if (count > 100) {
      goal.visible = false;
    }

    welcome.visible = false;
    startButton.visible = false;
    idlePlayer.visible = false;
    player.visible = true;

    // added adaptivity to the ground

    ground.velocityX = -(7 + (1 * count) / 100);

    // if spce key is pressed and player's foot is on the ground then the player can jump

    if (keyDown("space") && player.y >= 450) {
      jump.play();
      player.velocityY = -18;
    }

    // added artificial gravity to the player
    player.velocityY = player.velocityY + 1;

    // added the condition for making the ground infinite
    if (ground.x < 100) {
      ground.x = ground.width / 4;
    }

    // score will increase in this command
    count = count + Math.round(getFrameRate() / 60);

    // this two functions will create obstacles and coins at random position
    createObstacles();
    createCoins();

    // command for playing sound when "P" key is pressed
    if (keyWentUp("p")) {
      themeSong.loop();
    }

    // added condition, if the themeSong is playing and the user clicks "K" key , the themeSong will stop playing

    if (themeSong.isPlaying() && keyWentUp("k")) {
      themeSong.stop();
    }

    // if mousepressed on the home button

    if (mousePressedOver(home)) {
      // home button sound should be played
      homeButtonSound.play();

      // All obstaclesGroups,coinsGroup and bulletGroup should be destroyed
      OBGroup1.destroyEach();
      OBGroup2.destroyEach();
      OBGroup3.destroyEach();
      OBGroup4.destroyEach();
      coinGroup.destroyEach();
      bulletGroup.destroyEach();

      // coins and the score's values should be 0
      coinBar = 0;
      count = 0;

      player.visible = false;
      slidingPlayer.visible = false;
      idlePlayer.visible = true;

      // if themeSong is playing and mousePressed on home button then themeSong should be stoped

      if (themeSong.isPlaying() && mousePressedOver(home)) {
        themeSong.stop();
      }

      // then the gameState should be start
      gameState = "START";
    }

    //  if keyPressed down Arrow then player should be invisible and the slidingPlayer should be visible

    if (keyDown(DOWN_ARROW)) {
      player.visible = false;
      slidingPlayer.visible = true;
    }

    // if keyPressed right Arrow and slidingPlayer is visible and coinBar is greater than 1 :-
    if (keyWentUp(RIGHT_ARROW) && slidingPlayer.visible === true) {
      if (coinBar >= 1) {
        // gun shoot sound should be played
        gunShootSound.play();

        // coinBar's values should be decreased
        coinBar--;

        // created a sprite called bullet and given the properties
        bullet = createSprite(100, 500, 10, 10);
        bullet.addImage(bulletImage);
        bullet.velocityX = 15;
        // bullet's y position shoul be in the player's y position
        bullet.y = slidingPlayer.y;
        bullet.scale = 1;
        bullet.lifetime = 400;

        // added the bullet sprite to the bulletGroup
        bulletGroup.add(bullet);
      }
    }

    // BELOW THE SAME THING IN THE ABOVE ONE

    if (keyWentUp("s") && player.visible === true) {
      if (coinBar >= 1) {
        gunShootSound.play();
        coinBar--;
        bullet = createSprite(100, 500, 10, 10);
        bullet.addImage(bulletImage);
        bullet.velocityX = 15;
        bullet.y = player.y;
        bullet.scale = 1;
        bullet.lifetime = 400;
        bulletGroup.add(bullet);
      }
    }

    // if the player is touching the obstacle's group then themeSong should stop , the gameState should be END

    if (player.visible === true && OBGroup1.isTouching(player)) {
      themeSong.stop();
      gameState = "END";
      loseSound.play();
      afterdying.loop();
    } else if (player.visible === true && OBGroup2.isTouching(player)) {
      themeSong.stop();
      gameState = "END";
      loseSound.play();
      afterdying.loop();
    } else if (player.visible === true && OBGroup3.isTouching(player)) {
      themeSong.stop();
      gameState = "END";
      loseSound.play();
      afterdying.loop();
    } else if (player.visible === true && OBGroup4.isTouching(player)) {
      themeSong.stop();
      gameState = "END";
      loseSound.play();
      afterdying.loop();
    }

    // BELOW THE SAME THING IN THE ABOVE ONE except slidingPlayer

    if (slidingPlayer.visible === true && OBGroup1.isTouching(slidingPlayer)) {
      themeSong.stop();
      gameState = "END";
      loseSound.play();
      afterdying.loop();
    } else if (
      slidingPlayer.visible === true &&
      OBGroup2.isTouching(slidingPlayer)
    ) {
      themeSong.stop();
      gameState = "END";
      loseSound.play();
      afterdying.loop();
    } else if (
      slidingPlayer.visible === true &&
      OBGroup3.isTouching(slidingPlayer)
    ) {
      themeSong.stop();
      gameState = "END";
      loseSound.play();
      afterdying.loop();
    } else if (
      slidingPlayer.visible === true &&
      OBGroup4.isTouching(slidingPlayer)
    ) {
      themeSong.stop();
      gameState = "END";
      loseSound.play();
      afterdying.loop();
    }

    // if the bulletGroup is touching the obstacle's group then obstacle groups will be destroyed and also bulletGroups will be destroyed

    if (bulletGroup.isTouching(OBGroup1)) {
      OBGroup1.destroyEach();
      bulletGroup.destroyEach();
    } else if (bulletGroup.isTouching(OBGroup2)) {
      OBGroup2.destroyEach();
      bulletGroup.destroyEach();
    } else if (bulletGroup.isTouching(OBGroup3)) {
      OBGroup3.destroyEach();
      bulletGroup.destroyEach();
    } else if (bulletGroup.isTouching(OBGroup4)) {
      OBGroup4.destroyEach();
      bulletGroup.destroyEach();
    }

    // if score is greater than 400 level 2 text will be visible
    if (count > 400 && count < 450) {
      // there will be level 2
      fill("cyan");
      textSize(45);
      strokeWeight(7);
      stroke("black");
      textFont("helvetica");
      level2Text.visible = true;
      text(level2Text, 80, 200);
    }

    // if score > 450 then level 2 text should be invisible
    if (count > 450) {
      level2Text.visible = false;
    }

    // if score > 800 level3 text should be visible
    if (count > 800 && count < 850) {
      strokeWeight(1.5);
      stroke("black");
      fill("#2554C7");
      textSize(45);
      textFont("helvetica");
      level3Text.visible = true;
      text(level3Text, 80, 200);
    }

    // if score > 850 then level 3 text should be invisible
    if (count > 850) {
      level3Text.visible = false;
    }

    // if score > 1300 then the gameState should be WIN
    if (count > 1400) {
      themeSong.stop();
      gameState = "WIN";
      successSound.play();
    }

    // added styles here
    fill("cyan");
    textSize(45);
    textFont("georgia");
    text("Score: " + count, 50, 70);
    text("Coins: " + coinBar, 500, 70);
  }

  // added the condition below that if gameState is END
  if (gameState === "END") {
    playAgainButton.visible = false;
    goldenIdol.visible = false;
    level2Text.visible = false;
    gameOver.visible = true;
    restart.visible = true;
    player.visible = false;
    idlePlayer.visible = true;
    slidingPlayer.visible = false;

    // ground's velocity should be 0
    ground.velocityX = 0;

    // all the obstacle group's,coin group's and bullet group's velocityX should be 0

    OBGroup1.setVelocityXEach(0);
    OBGroup2.setVelocityXEach(0);
    OBGroup3.setVelocityXEach(0);
    OBGroup4.setVelocityXEach(0);
    coinGroup.setVelocityXEach(0);
    bulletGroup.setVelocityXEach(0);

    // given all the group's lifeTime -1 so that in the gameState all the groups should be visible

    OBGroup1.setLifetimeEach(-1);
    OBGroup2.setLifetimeEach(-1);
    OBGroup3.setLifetimeEach(-1);
    OBGroup4.setLifetimeEach(-1);
    bulletGroup.setLifetimeEach(-1);

    // destroyed the coins group
    coinGroup.destroyEach();

    // given the player's y velocity to 0
    player.velocityY = 0;

    if (mousePressedOver(restart)) {
      resetButtonClick.play();
      reset();
      afterdying.stop();
    }

    fill("cyan");
    textSize(45);
    textFont("georgia");
    text("Score: " + count, 50, 70);
    text("Coins: " + coinBar, 500, 70);
  }

  if (player.visible === true && player.isTouching(coinGroup)) {
    coin.play();
    coinGroup.destroyEach();
    coinBar++;
  }

  player.collide(invisibleGround);

  if (gameState === "WIN") {
    var congratulationText = "👏 Congratulations,YOU WIN 👏";
    var goldenIdolText = "Golden Idol";
    level2Text.visible = false;
    gameOver.visible = false;
    restart.visible = false;
    player.visible = false;
    idlePlayer.visible = true;
    slidingPlayer.visible = false;

    OBGroup1.setVelocityXEach(0);
    OBGroup2.setVelocityXEach(0);
    OBGroup3.setVelocityXEach(0);
    OBGroup4.setVelocityXEach(0);
    coinGroup.setVelocityXEach(0);
    bulletGroup.setVelocityXEach(0);

    OBGroup1.destroyEach();
    OBGroup2.destroyEach();
    OBGroup3.destroyEach();
    OBGroup4.destroyEach();
    bulletGroup.destroyEach();

    coinGroup.destroyEach();
    player.velocityY = 0;
    ground.velocityX = 0;

    fill("#EC381F");
    strokeWeight(2);
    stroke("black");
    textSize(45);
    textFont("helvetica");
    text(congratulationText, 70, 80);

    home.visible = false;

    goldenIdol.visible = true;
    playAgainButton.visible = true;

    fill("green");
    textSize(35);
    textFont("helvetica");
    text(goldenIdolText, 300, 380);

    if (mousePressedOver(playAgainButton)) {
      successSound.stop();
      goldenIdol.visible = false;
      congratulationText.visible = false;
      playAgainButton.visible = false;
      count = 0;
      coinBar = 0;
      spawnSound.play();
      gameState = "PLAY";
    }
  }

  if (gameState === "INFO") {
    background("black");
    player.visible = false;
    idlePlayer.visible = false;
    welcome.visible = false;
    startButton.visible = false;
    ground.visible = false;
    level2Text.visible = false;

    fill("magenta");
    strokeWeight(7);
    stroke("black");
    textSize(60);
    textFont("helvetica");
    text("Rules", 330, 100);
    textSize(30);
    textFont("georgia");
    fill("cyan");
    strokeWeight(1.5);
    stroke("black");
    text("1. Welcome Ninja, your quest is to find the Golden Idol", 35, 200);
    text("2. Along the way, gather coins and avoid obstacles ", 35, 240);
    text("3. To jump press spaceBar,to slide press the down arrow ", 35, 280);
    text("4. To shoot the obstacle while standing , press S key ", 35, 320);
    text("5. To shoot while sliding, press Right arrow key", 35, 360);

    info.visible = false;
    backButton.visible = true;

    if (mousePressedOver(backButton)) {
      idlePlayer.visible = true;
      welcome.visible = true;
      startButton.visible = true;
      ground.visible = true;
      gameState = "START";
    }
  }

  drawSprites();

  //add styles here

  if (gameState === "START") {
    // text("Welcome");
    welcome.visible = true;
    textSize(32);
    text(txt, 260, 470);
  }

  if (gameState === "PLAY" && count < 100) {
    goal.visible = true;
    textSize(45);
    strokeWeight(7);
    textFont("helvetica");
    fill("magenta");
    text(goal, 80, 200);
  }
}

function createObstacles() {
  if (frameCount % 45 === 0) {
    var rand = Math.round(random(1, 4));
    switch (rand) {
      case 1:
        OB1();
        break;

      case 2:
        OB2();
        break;

      case 3:
        OB3();
        break;

      case 4:
        OB4();
        break;

      default:
        break;
    }
  }
}

function OB1() {
  var obstacle1 = createSprite(820, 485, 10, 10);
  obstacle1.velocityX = -(13 + (2 * count) / 100);
  obstacle1.addAnimation("OBG5", obstacle1Image);
  obstacle1.addAnimation("OBG0", ladyBugEnemyImage);
  obstacle1.addAnimation("OBGG", skeletonAnimation);
  obstacle1.scale = 0.3;
  obstacle1.lifetime = 400;
  invisibleGround.depth = obstacle1.depth;
  invisibleGround.depth = invisibleGround.depth + 1;
  OBGroup1.add(obstacle1);

  // for level 2
  if (count > 400) {
    obstacle1.y = 495;
    obstacle1.changeAnimation("OBG0", ladyBugEnemyImage);
    obstacle1.scale = 1.3;
  }

  // for level 3
  if (count > 800) {
    obstacle1.y = 485;
    obstacle1.changeAnimation("OBGG", skeletonAnimation);
    obstacle1.scale = 0.1;
  }
}

function OB2() {
  var obstacle2 = createSprite(820, 480, 10, 10);
  obstacle2.velocityX = -(13 + (2 * count) / 100);
  obstacle2.addAnimation("obgA", obstacle2Animation);
  obstacle2.addAnimation("OBG10", bulletEnemyImage);
  obstacle2.addAnimation("OBG11", beastEnemyAnimation);
  obstacle2.scale = 0.4;
  obstacle2.lifetime = 400;
  invisibleGround.depth = obstacle2.depth;
  invisibleGround.depth = invisibleGround.depth + 1;
  OBGroup2.add(obstacle2);

  // for level 2
  if (count > 400) {
    obstacle2.y = 440;
    obstacle2.changeAnimation("OBG10", bulletEnemyImage);
    obstacle2.setCollider("rectangle", 0, 0, 200, 170);
    obstacle2.scale = 0.3;
  }

  // for level 3
  if (count > 800) {
    obstacle2.y = 475;
    obstacle2.changeAnimation("OBG11", beastEnemyAnimation);
    obstacle2.scale = 0.2;
  }
}

function OB3() {
  var obstacle3 = createSprite(820, 480, 10, 10);
  obstacle3.velocityX = -(13 + (2 * count) / 100);
  obstacle3.addAnimation("obgA", obstacle3Animation);
  obstacle3.addAnimation("obg18", monsterImage);
  obstacle3.addAnimation("peanutEnemy", peanutEnemyAnimation);
  obstacle3.scale = 0.4;
  obstacle3.lifetime = 400;
  invisibleGround.depth = obstacle3.depth;
  invisibleGround.depth = invisibleGround.depth + 1;
  OBGroup3.add(obstacle3);

  // for level 2
  if (count > 400) {
    obstacle3.y = 475;
    obstacle3.changeAnimation("obg18", monsterImage);
    obstacle3.scale = 0.1;
  }

  // for level 3
  if (count > 800) {
    obstacle3.y = 475;
    obstacle3.changeAnimation("peanutEnemy", peanutEnemyAnimation);
    obstacle3.scale = 0.2;
  }
}

function OB4() {
  var obstacle4 = createSprite(820, 363, 10, 10);
  obstacle4.velocityX = -(18 + (2 * count) / 100);
  obstacle4.addAnimation("obgA", obstacle4Animation);
  obstacle4.scale = 1;
  obstacle4.lifetime = 400;
  invisibleGround.depth = obstacle4.depth;
  invisibleGround.depth = invisibleGround.depth + 1;
  OBGroup4.add(obstacle4);
}

function reset() {
  gameState = "PLAY";
  gameOver.visible = false;
  restart.visible = false;
  OBGroup1.destroyEach();
  OBGroup2.destroyEach();
  OBGroup3.destroyEach();
  OBGroup4.destroyEach();
  bulletGroup.destroyEach();
  idlePlayer.visible = false;
  player.visible = true;
  count = 0;
  coinBar = 0;
  spawnSound.play();
}

function createCoins() {
  if (frameCount % 150 === 0) {
    var coins = createSprite(800, 300, 20, 20);
    coins.velocityX = -8;
    var rand = Math.round(random(1, 1));

    switch (rand) {
      case 1:
        coins.addImage(coin1);
        break;

      default:
        break;
    }
    coins.scale = 0.9;
    coins.lifetime = 400;
    //adjusted the depth of the player and coins

    player.depth = coins.depth;
    player.depth = player.depth + 1;
    coinGroup.add(coins);
  }
}

/* -------------------------------------------------------------------------- */
/*                         DEVELOPED BY SWAYAM SAI KAR                        */
/* -------------------------------------------------------------------------- */
