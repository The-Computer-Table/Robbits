/***
 ___________________________________________________
 |Computer Table                                    |
 | _________________________________________________|
 |/New tab\/Robbits\ +                       - [] X |
 |https://sites.google.com/site/thecomputertable    |
 |                       |  robbit_royale.js        |
 |     Robbit Royale     |            __________    |                                          
 |       Main Menu       |           |  Comp    |   |                                  
 |                       |           |    Table |   |                                  
 |      __________       |           |__________|   |                                           
 |     |Start Game|      |           |\         \   |                                     
 |     |__________|      |           | \         \  |                                     
 |                       |           |  \_________\ |                                            
 |                       |              |         | |                                 
 |                       |              |         | |                                 
 |                       |              |         | |                                 
 |________________________________________________  |                                             
|\                                                   \
| \\|Esc|F1|F2|F3|F4|F5|F6|F7|F8|F9|F10|F11|F12|Home| \
|_ \\_____|`|1|2|3|4|5|6|7|8|9|0|-|=|<-|_______________\                                        
||  \\___|Tab|q|w|e|r|t|y|u|i|o|p|[|]|\|________________\                            
||   \\____|CapsLock|a|s|d|f|g|h|j|k|l|;|'|<--]__________\
||    \\________ |^|z|x|c|v|b|n|m|,|.|/|Shift|____________\
||     \\Ctrl|Fn|+|Alt|________________|Alt|Ctrl|<-/\/\->__\
||      \\                \            \              __    \
||       \\                \_____|______\             \_\    \
||        \\__________________________________________________\
           ||                                          ||     ||                          
           ||                                          ||     ||     
           ||                                          ||     || 

Bluh bluh license dont steal this

Robbit Royale v0.10 Pre-Alpha Beta

Changelog
4/20/2022 - v0.4 Pre-Alpha Alpha
    added chrome support
    added ASCII art
    added changelog
    added square
    limited time event for 4/20: square is green (for weed)
4/21/2022 - v0.4.1 Pre-Alpha Alpha
    added features from v0.3.3
    added firefox support
    fixed aim
    added shootable boxes that block movement
    added collision
4/25/2022 - v0.5 Pre-alpha Alpha
    fixed collision
    added more violence
    kill enemy robbits to win
4/28/2022 - v0.5.1 Pre-Alpha Alpha
    added chaos
    added health and ammo bars
5/2/2022 - v0.6 Pre-Alpha Alpha
    fixed chaos
    new collision engine!
    removed some dead code
    added dead code
5/12/2022 - v0.7 Pre-Alpha Alpha
    added main menu and "options" menu
5/12/2022 - v0.7.1 Pre-Alpha Alpha
    new tile: teleporter
5/13/2022 - v0.7.2 Pre-Alpha Alpha
    added dead code
5/16/2022 - v0.8 Pre-Alpha Alpha
    new maps!
    walls!
    more dead code!
    lag!
5/16/2022 - v0.8.1 Pre-Alpha Alpha
    bug fix: removed "this._graphics is null" error
5/17/2022 - v0.9 Pre-Alpha Alpha
    Enemies now have pathfinding ai
5/19/2022 - v0.9.1 Pre-Alpha Alpha
    New map
    Pathfinding ai now works with teleporters
    Added game over screen
5/19/2022 - v0.10 Pre-Alpha Beta
    BETA!!!!!!!!
5/24/2022 - v0.10.1 Pre-Alpha Beta
    Balance changes
        Buffs:
        Enemy health 40 -> 100
        Player damage 10 -> 30
        Nerfs:
        Enemy pathfinding no longer optimal
5/25/2022 - v0.10.2 Pre-Alpha Beta
    Balance changes
        Buffs:
        Player damage 30 -> 40
        Nerfs:
        Enemy bullets no longer go through each other


TODO: 
==========
level select
fix lag by preloading enemy paths
lore
powerups
new enemy types

ARCHIVE:
===========
robbit royale (c) 2021 computer table inc.
version 0.3.3 Pre-Alpha Alpha 2021

Version History:

    5/2/2021 - v0.1 Pre-Alpha Alpha
    Changelog:
        Rob can now move with wasd keys!

    5/3/2021 - v0.2 Pre-Alpha Alpha
    Changelog:
        Tiles! 3 types of tiles: normal, slowing, and deadly
        Rob now has 100 hp
    
    5/5/2021 - v0.3 Pre-Alpha Alpha
    Changelog:
        Rob can now shoot
    
    5/18/2021 - v0.3.1 Pre-Alpha Alpha
    Changelog:
        Fixed bug where dead rob could shoot
    
    8/26/2021 - v0.3.2 Pre-Alpha Alpha
    Changelog:
        Improved death
    
    9/10/2021 - v0.3.3 Pre-Alpha Alpha
    Changelog
        Fixed diagonal movement faster than horisontal
        Added more dead code

 */


//maps

var version = "v0.10.2 Pre-Alpha Alpha";

var map1 = [ //array with the type of each tile
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 4, 1, 1, 4, 0, 6, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 6, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 1, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0]
]; 

var testMap = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

//map1 = testMap;

//List of tiles:

//0: blank tile: does nothing
//1: slowing tile: sets speed to 1
//2: lava tile: damages robbits
//3: crate
//4: enemy spawn
//5: teleporter
//6: wall

var currentMap = window.prompt("Enter map id");
var tMap1 = []; //array to hold Tile objects
var block = []; //array to hold blocked zones

//constants

const SCALE = 2;
const TILE_WIDTH = 16 * SCALE;
const WIDTH_IN_TILES = 32;
const BOARD_WIDTH = WIDTH_IN_TILES * TILE_WIDTH;
const HEIGHT_IN_TILES = 16;
const BOARD_HEIGHT = HEIGHT_IN_TILES * TILE_WIDTH;
const TOTAL_TILES = WIDTH_IN_TILES * HEIGHT_IN_TILES;
const ERROR = 1.5;
const CHAOS = .2;
const UPSCALE = 1;

/**
 * Checks if a coordinate point is outside the board
 * @param {Number} x The x coordinate
 * @param {Number} y The y coordinate
 * @returns {Boolean} Returns true if the point is out of bounds
 */

function outBounds(x, y){
    return x < 0 || y < 0 || x > BOARD_WIDTH || y > BOARD_HEIGHT;
}

//Keyboard keys
var keyBinds = {};
keyBinds.up = 87;
keyBinds.left = 65;
keyBinds.down = 83;
keyBinds.right = 68;
var keys = {
    up: false,
    down: false,
    left: false,
    right: false
};

var rob;
var won = false;
var enemy;
var enemiesLeft = 0;
var fail = false;
var starts = []
var b = document.getElementById("bod");
var state = (delta) => {};
var doState = (delta) => state(delta);
var objs = [];
var debugInfo = true;
var debugOpts = {
    oneDirectionAStar: false,
    dontEnd: false,
    testMap: false
};
var paths = new Map(); // pointsToInt(start, goal) -> [start, p1, p2, ... goal] (optimal path)

const Application = PIXI.Application;
const loader = PIXI.Loader.shared;
const resources = loader.resources;
const Sprite = PIXI.Sprite;
const Graphics = PIXI.Graphics;
const app = new Application({width: BOARD_WIDTH, height: BOARD_HEIGHT, antialias: false});
const bump = new Bump();
const BitmapText = PIXI.BitmapText;
const TextStyle = PIXI.TextStyle;
document.body.appendChild(app.view);
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST; //prevent blur
PIXI.LoaderResource.setExtensionXhrType('fnt', PIXI.LoaderResource.XHR_RESPONSE_TYPE.TEXT); //Magically makes fonts work
const BG_COLOR = 0x000000;
app.renderer.backgroundColor = BG_COLOR;

app.ticker.add(doState);
loadMenu();

/**
 * 
 * @param {Number[]} p Array with the coordinates of the tile
 * @returns {Number} The id of the type of tile
 */

function tType(p){
    return tMap1[p[0]][p[1]].t;
}

/**
 * 
 * @param {Number} ch The degree of chaos 
 * @returns {Number} A random number between 1 - ch and 1 + ch
 */

function chaos(ch = CHAOS){
    return 1 + (Math.random() - 0.5) * ch;
}

/**
 * Loads the main menu
 * @returns {void}
 */

function loadMenu(){
    if("Fonts/ArcadeClassicGreen.txt" in resources) return mainMenu();
    loader
        .add("Fonts/F_YSCPuKgWBcrTevy1eTgkMm.ttf.txt")
        .add("Fonts/ArcadeClassicGreen.txt")
        .load(mainMenu);
}

const TITLE_SCALE = 2 * SCALE;

/**
 * The main menu
 */

function mainMenu(){
    menu([
        [2 * TILE_WIDTH - BOARD_HEIGHT / 2, "ROBBIT ROYALE", {fontName: "ArcadeClassicGreen"}, TITLE_SCALE],
        [-3 * TILE_WIDTH, "Start", {fontName: "ArcadeClassic"}, SCALE, loadGame],
        [2 * TILE_WIDTH, "Options", {fontName: "ArcadeClassic"}, SCALE, loadOpts]
    ]);
}

/**
 * A menu
 * @param {Array} texts In the form [yoff, text, style, scale, func (only if button)]
 * @param {Number} btnWidth 
 * @param {Number} btnHeight 
 * @returns 
 */

function menu(texts, btnWidth = 6 * TILE_WIDTH, btnHeight = 2 * TILE_WIDTH){ //each text is of form [yoff, text, style, scale, func (only if button)]
    var textGs = [];
    for(var i in texts){
        var yoff = texts[i][0];
        var text = texts[i][1];
        var style = texts[i][2];
        var scale = texts[i][3];
        if(texts[i].length == 4){
            textGs[i] = centeredText(text, style, BOARD_WIDTH, BOARD_HEIGHT + yoff * 2, scale);
        } else {
            textGs[i] = new Graphics();
            textGs[i].x = BOARD_WIDTH / 2 - btnWidth / 2;
            textGs[i].y = BOARD_HEIGHT / 2 + yoff;
            textGs[i]
                .lineStyle({width: scale, color: 0, alpha: 1})
                .beginFill(0x0000FF)
                .drawRect(0, 0, btnWidth, btnHeight)
                .endFill()
                .addChild(centeredText(text, style, btnWidth, btnHeight));
        }
        app.stage.addChild(textGs[i]);
        //console.log(textGs[i].y);
    }
    var checkClick = (event) => {
        if(event.button !== 0) return;
        if(Math.abs(event.clientX - BOARD_WIDTH / 2) <= btnWidth / 2){
            for(var i in textGs){
                //console.log(texts[i].length);
                if(texts[i].length == 4) continue;
                if(Math.abs(event.clientY - BOARD_HEIGHT / 2 - texts[i][0] - btnHeight / 2) <= btnHeight / 2){
                    for(var j in textGs){
                        textGs[j].destroy();
                        b.removeEventListener("click", checkClick);
                    }
                    texts[i][4]();
                }
            }
        }
    }
    b.addEventListener("click", checkClick);
    return textGs;
}

/**
 * call this when you win
 * @returns {void}
 */

function win(){
    if(debugOpts.dontEnd) return;
    won = true;
    endGame(objs);
    objs = [];
    tps = [];
    menu([
        [2 * TILE_WIDTH - BOARD_HEIGHT / 2, "You Win!", {fontName:"ArcadeClassicGreen"}, TITLE_SCALE],
        [0, "Back to Menu", {fontName: "ArcadeClassic"}, SCALE, mainMenu]
    ], 8 * TILE_WIDTH);
}

/**
 * call this when you use
 * @returns {void}
 */

function gameOver(){
    if(debugOpts.dontEnd) return;
    fail = true;
    endGame(objs);
    objs = [];
    tps = [];
    menu([
        [2 * TILE_WIDTH - BOARD_HEIGHT / 2, "Game Over", {fontName:"ArcadeClassicGreen"}, TITLE_SCALE],
        [0, "Back to Menu", {fontName: "ArcadeClassic"}, SCALE, mainMenu]
    ], 8 * TILE_WIDTH);
}

/**
 * load options menu
 */

function loadOpts(){
    loader.load(options);
}

/**
 * Options menu
 */

function options(){
    menu([
        [2 * TILE_WIDTH - BOARD_HEIGHT / 2, "Options", {fontName: "ArcadeClassicGreen"}, TITLE_SCALE],
        //[-4 * TILE_WIDTH, "Keybinds", {fontName: "ArcadeClassic"}, SCALE, () => {}],
        //[0 * TILE_WIDTH, "Difficulty", {fontName: "ArcadeClassic"}, SCALE, () => {}],
        [4 * TILE_WIDTH, "Return", {fontName: "ArcadeClassic"}, SCALE, mainMenu]
    ], 8 * TILE_WIDTH)
}

/**
 * Centers text on a box
 * @param {String} txt 
 * @param {Object} style 
 * @param {Number} width 
 * @param {Number} height 
 * @param {Number} scale 
 * @returns 
 */

function centeredText(txt, style, width, height, scale = SCALE) {
    var text = new BitmapText(txt, new TextStyle(style));
    text.anchor.set(0.5);
    text.x = width / 2;
    text.y = height / 2;
    text.scale.x = text.scale.y = scale;
    return text;
}

/**
 * Loads the game
 * @returns {void}
 */

function loadGame(){
    if("android" in resources) return startGame();
    loader
        .add("android", "Images/872px-Android_robot.svg.png")
        .add("player" ,"Images/robbit.png")
        .add("tile_default", "Images/tile-default.png")
        .add("tile_lava", "Images/tile_lava.png")
        .add("tile_slow", "Images/tile_slow.png")
        .add("bullet", "Images/bullet.png")
        .add("tile_crate", "Images/tile_crate.png")
        .add("simple_enemy", "Images/simple_enemy.png")
        .add("tile_teleporter", "Images/tile_teleporter.bmp")
        .add("tile_wall", "Images/tile_wall.png")
        .add("maplist", "map/maplist")
        .load(loadMaps);
}

/**
 * Loads the maps
 */

function loadMaps(){
    var mapArr = resources["maplist"].data.split("\n");
    var theMap = mapArr[currentMap];
    loader.add(theMap, "map/" + theMap + ".json");
    map1 = resources[theMap];
    loader.load(startGame);
}

/**
 * Starts the game
 */

function startGame(){

    enemiesLeft = 0;
    won = false;
    fail = false;

    if(debugOpts.testMap) map1.data = testMap;
    //make tile objects
    for(var i in map1.data){
        tMap1[i] = [];
        for(var j in map1.data[i]){
            tMap1[i][j] = new Tile(i, j, map1.data[i][j]);
        }
    }

    objs.push(tMap1);

    //add robbit
    rob = new Player();
    //add other starts
    for(i in starts){
        starts[i]();
    }

    starts = [];
    //add listeners
    b.addEventListener("keydown", (event) => {
        //console.log(event.keyCode);
        switch(event.keyCode){
            case keyBinds.up:
                keys.up = true;
                break;
            case keyBinds.down:
                keys.down = true;
                break;
            case keyBinds.left:
                keys.left = true;
                break;
            case keyBinds.right:
                keys.right = true;
                break;
            default:
                break;
        }
    });
    
    b.addEventListener("keyup", (event) => {
        switch(event.keyCode){
            case keyBinds.up:
                keys.up = false;
                break;
            case keyBinds.down:
                keys.down = false;
                break;
            case keyBinds.left:
                keys.left = false;
                break;
            case keyBinds.right:
                keys.right = false;
                break;
            default:
                break;
        }
    });

    b.addEventListener("click", (event) => {
        //console.log(event);
        if(event.button == 0 && rob.wait >= rob.reload) {
            rob.shoot(event.clientX, event.clientY);
            rob.wait = 0;
        }
    });

    if(debugInfo){
        document.getElementById("debugInfo").style = "visibility: visible;"
    }

    state = inGame;

    app.ticker.remove(doState);

    window.setTimeout(() => app.ticker.add(doState), 500);
}

/**
 * Game loop
 * @param {Number} delta 
 */

function inGame(delta){
    mainLoop(objs);
}

/**
 * Calls o[func]() for all objects in obj
 * @param {Object} obj 
 * @param {String} func 
 */

function doToAll(obj, func){
    if(Array.isArray(obj)){
        for(var i in obj){
            doToAll(obj[i], func);
        }
    } else if(obj !== undefined && !obj.dead){
        obj[func]();
    }
}

/**
 * The main game loop
 * @param {Array} obj 
 */

function mainLoop(obj){
    doToAll(obj, "move");
}

/**
 * 
 * @param {*} obj 
 */

function endGame(obj){
    doToAll(obj, "die");
}

class StatusBar extends Graphics{
    constructor(fillColor, lineStyle, x, y, width, height, status, parent=null){
        super();
        this.fillCol = fillColor;
        this.lineS = lineStyle;
        this.x = x;
        this.y = y;
        this.widthE = width;
        this.heightE = height;
        this.status = status;
        this.dead = false;
        if(parent !== null){
            this.parentE = parent;
            this.offsetX = this.x - this.parentE.x;
            this.offsetY = this.y - this.parentE.y;
        }
        objs.push(this);
        this.move();
        app.stage.addChild(this);
    }

    move(){
        this.refresh();
        if("parentE" in this){
            this.x = this.offsetX + this.parentE.x;
            this.y = this.offsetY + this.parentE.y;
            if(this.parentE.dead){
                this.die();
            }
        }
        if(this.dead) return;
        this.lineStyle({width: 0, color: 0, alpha: 0})
            .beginFill(0x858585)
            .drawRect(0, 0, this.widthE, this.heightE)
            .endFill()
            .beginFill(this.fillCol)
            .drawRect(0, 0, this.widthE * this.status, this.heightE)
            .endFill()
            .lineStyle(this.lineS)
            .beginFill(0, 0)
            .drawRect(0, 0, this.widthE, this.heightE)
            .endFill()
    }

    refresh(){}

    die(){
        this.dead = true;
        this.visible = false;
    }
}

class HappinesBar extends StatusBar{
    constructor(parent, offsetX, offsetY, attr, maxattr, color) {
        super(color, {width: SCALE, color: 0, alpha: 1}, parent.x + offsetX, parent.y + offsetY, TILE_WIDTH, TILE_WIDTH / 4, parent.hp / parent.maxhp, parent);
        this.attr = attr;
        this.maxattr = maxattr;
    }  
    refresh(){
        this.status = this.parentE[this.attr] / this.parentE[this.maxattr];
        if(this.status > 1) this.status = 1;
    }
}

class GameObject extends Sprite{
    constructor(imgId){
        super(resources[imgId].texture);
        this.dead = false;
        this.scale.x = SCALE;
        this.scale.y = SCALE;
    }

    //draw(ctx){
    //    ctx.drawImage(this.sprite, Math.floor(this.x), Math.floor(this.y));
    //}

    move(){
        if("hp" in this && this.hp <= 0) this.die();
    }

    die(){
        this.dead = true;
        this.visible = false;
    }

    checkCollision(obj){
        if(Array.isArray(obj)){
            for(var i in obj){
                this.checkCollision(obj[i]);
            }
            return false;
        } else if(!obj.dead && bump.hit(this, obj)){
            this.onHit(obj);
            return true;
        }
    }

    onHit(r){}
}

var tps = [];

class Tile extends GameObject{

    constructor(y, x, t = 0){
        switch(t){
            case 4:
                starts.push(() => {new SimpleEnemy(x * TILE_WIDTH, y * TILE_WIDTH, 1, 100, 40, 200, rob);});
                t = 0;
            case 0:
                super("tile_default");
                this.onStep = function(r){
                    r.reset();
                }
                break;
            case 1:
                super("tile_slow");
                this.slow = 0.5 * chaos();
                this.onStep = function(r){
                    r.speed = r.og.speed * this.slow;
                }
                break;
            case 2:
                super("tile_lava");
                this.onStep = function(r){
                    r.hp -= chaos();
                }
                break;
            case 3:
                super("tile_crate");
                this.hp = 30 * chaos();
                this.under = new Tile(y, x, 0);
                this.isBlock = true;
                this.block = block.push((r, s = r.speed, width = TILE_WIDTH) => {
                    bump.hit(r, this, true);
                }) - 1;
                this.die = function(){
                    tMap1[this.y / TILE_WIDTH][this.x / TILE_WIDTH] = this.under;
                    this.visible = false;
                    block[this.block] = () => {};
                }
                this.onStep = () => {}
                break;
            case 5:
                super("tile_teleporter");
                this.tpId = tps.length;
                tps.push(this);
                this.cooldown = 80;
                this.onStep = function(r){
                    if("tpWaitId" in r){
                        if(r.timerWaits[r.tpWaitId] <= r.timerLengths[r.tpWaitId])
                            return;
                    } else {
                        r.tpWaitId = r.timerWaits.push(0);
                        r.timerLengths[r.tpWaitId] = this.cooldown
                    }
                    var target = tps[!this.tpId + 0]; //dont ask
                    r.x = target.x;
                    r.y = target.y;
                    r.timerWaits[r.tpWaitId] = 0;
                }
                break;
            case 6:
                super("tile_wall");
                this.hp = Infinity;
                this.isBlock = true;
                this.block = block.push((r, s = r.speed, width = TILE_WIDTH) => {
                    bump.hit(r, this, true);
                }) - 1;
                this.die = function(){
                    tMap1[this.y / TILE_WIDTH][this.x / TILE_WIDTH] = this.under;
                    this.visible = false;
                    block[this.block] = () => {};
                }
                this.onStep = () => {}
                break;
            default:
                super("tile_default");
        }
        this.ty = y;
        this.tx = x;
        this.t = t;
        this.x = x * TILE_WIDTH;
        this.y = y * TILE_WIDTH;
        app.stage.addChild(this);
    }
}

class Bullet extends GameObject{
    constructor(dmg, dx, dy, x, y, shooter, speed = 10){
        super("bullet");
        this.circular = true;
        this.dmg = dmg * chaos();
        this.speed = speed * SCALE * chaos();
        let sped = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
        this.dx = dx * speed / sped;
        this.dy = dy * speed / sped;
        this.x = x;
        this.y = y;
        this.shooter = shooter;
        app.stage.addChild(this);
        objs.push(this);
    }

    move(){
        if(this.dead) return;
        if(outBounds(this.x, this.y)) this.die();
        this.x += this.dx;
        this.y += this.dy;
        this.checkCollision(objs);
    }

    onHit(r){
        if(r === this.shooter || this.dead || r.hp === undefined) return;
        if(r.robbitType === this.shooter.robbitType) return this.die();
        r.hp -= this.dmg;
        //if(r.hp <= 0) r.die();
        this.die();
    }
}

class Robbit extends GameObject{
    constructor(x, y, imgId, s, maxhp = 100, hp = maxhp, dmg = 10, reload = 0, k = keys){
        super(imgId);
        this.circular = true;
        this.id = imgId;
        this.x = x;
        this.y = y;
        this.speed = s * chaos() * SCALE;
        let hpChaos = chaos();
        this.maxhp = maxhp * hpChaos;
        this.hp = hp * hpChaos;
        this.dmg = dmg * chaos();
        this.og = {speed: this.speed};
        this.reload = reload * chaos();
        this.k = k;
        this.wait = 0;
        this.timerLengths = [this.reload];
        this.timerWaits = [0];
        app.stage.addChild(this);
        objs.push(this);
        this.healthbar = new HappinesBar(this, 0, TILE_WIDTH + SCALE, "hp", "maxhp", 0xFF0000);
        this.reloadbar = new HappinesBar(this, 0, this.healthbar.offsetY + this.healthbar.heightE + SCALE, "wait", "reload", 0x00FF00);
    }

    keys() {
        return this.k;
    }

    move(k = this.keys(), s = this.speed){
        if(this.dead) return;
        if(k.up != k.down && k.left != k.right) s *= 0.71 //approx sqrt(2)/2 to keep diagonal speed the same as horisontal
        if(k.up) this.y -= s;
        if(k.down) this.y += s;
        if(k.left) this.x -= s;
        if(k.right) this.x += s;
        if(this.x < 0) this.x = 0;
        if(this.x > BOARD_WIDTH - TILE_WIDTH) this.x = BOARD_WIDTH - TILE_WIDTH;
        if(this.y < 0) this.y = 0;
        if(this.y > BOARD_HEIGHT - TILE_WIDTH) this.y = BOARD_HEIGHT - TILE_WIDTH;
        for(var i in block){
            block[i](this);
        }
        let onTile = tMap1[this.tileID(this.y)][this.tileID(this.x)];
        onTile.onStep(this);
        this.wait++;
        for(i in this.timerWaits) this.timerWaits[i]++;
        this.specMove();
        if(this.hp <= 0) this.die();
    }

    tileID(y) {
        return Math.floor(y / TILE_WIDTH + 0.5);
    }

    centerOfTile(id) {
        return id * TILE_WIDTH + TILE_WIDTH / 2;
    }

    specMove() {}

    reset(){
        for(var i in this.og){
            this[i] = this.og[i];
        }
    }

    shoot(x, y, type=0, aim=0){
        if(this.dead) return;
        var b;
        const offset = 8 * SCALE;
        const offset2 = 12 * SCALE;
        const dx = (x - this.x - offset2) * chaos(aim);
        const dy = (y - this.y - offset2) * chaos(aim);
        switch(type){
            case 0:
                b = new Bullet(this.dmg, dx, dy, this.x + offset, this.y + offset, this);
                break;
            default:
        }
    }

    die(){
        this.dead = true;
        this.visible = false;
    }
}

class SimpleEnemy extends Robbit {
    constructor(x, y, speed, hp, dmg, reload, target){
        super(x, y, "simple_enemy", speed, hp, hp, dmg, reload);
        this.robbitType = "SimpleEnemy"
        this.target = target;
        this.targX = this.target.x;
        this.targY = this.target.y;
        this.makePath();
        this.rePath = 30;
        enemiesLeft++;
    }

    makePath(){
        this.path = aStar([this.tileID(this.y), this.tileID(this.x)], [this.tileID(this.targY), this.tileID(this.targX)]);
        this.rePathWait = 0;
    }

    keys() {
        var k = {up: false, down: false, left: false, right: false};
        if(this.tileID(this.x) === this.tileID(this.targX) && this.tileID(this.y) === this.tileID(this.targY)) return k;
        var coords = [this.tileID(this.y), this.tileID(this.x)];
        if(arrEq(coords, this.path[0])) this.path.shift();
        if(this.path.length === 0) this.makePath();
        var targCoords = this.path[0];
        var ky = targCoords[0] - coords[0];
        var kx = targCoords[1] - coords[1];
        if(ky === 0) ky = coords[0] * TILE_WIDTH - this.y;
        if(kx === 0) kx = coords[1] * TILE_WIDTH - this.x;
        k.up = ky < 0;
        k.down = ky > 0;
        k.left = kx < 0;
        k.right = kx > 0;
        return k;
    }

    specMove(){
        if(this.wait >= this.reload){
            this.wait = 0;
            var targ = this.target;
            if(tType(this.path[0]) === 3) targ = {y: this.path[0][0] * TILE_WIDTH, x: this.path[0][1] * TILE_WIDTH};
            this.shoot(targ.x + TILE_WIDTH / 2, targ.y + TILE_WIDTH / 2, 0, CHAOS);
        }
        if(this.rePathWait >= this.rePath){
            this.targX = this.target.x;
            this.targY = this.target.y;
            this.makePath();
        }
        this.rePathWait++;
    }

    die(){
        this.visible = false;
        this.dead = true;
        if(fail) return;
        enemiesLeft--;
        if(enemiesLeft === 0){
            win();
        }
    }
}

function reconstructPath(cameFrom, current, goesTo){
    var totalPath = [intToPoint(current)];
    var ogCurrent = current;
    while(cameFrom.has(current)){
        current = cameFrom.get(current);
        if(current === -1) break;
        totalPath.unshift(intToPoint(current));
    }
    current = ogCurrent;
    while(goesTo.has(current)){
        current = goesTo.get(current);
        if(current === -1) break;
        totalPath.push(intToPoint(current));
    }
    return totalPath;
}

function heuristic(p1, p2){
    return dist(p1, p2) * costOfTile(p1) * costOfTile(p2);
}

function onPath(path, target, special = -1){
    var current = special;
    do{
        current = path.get(current);
        if(current === target) return true;
    } while(current !== special)
    return false;
}

function aStar(start, goal, h = heuristic){
    start = pointToInt(start);
    goal = pointToInt(goal);
    var openSet = [start];
    var cameFrom = new Map();
    var gScore = new Map([[start, 0]]); //pointToInt(p) -> cost of path from start to p
    var fScore = new Map([[start, h(start, goal)]]); //pointToInt(p) -> heuristic from p to goal
    var fLess = (a, b) => fScore.get(a) < fScore.get(b);
    var current = start
    var endSet = [goal];
    var goesTo = new Map();
    var endGScore = new Map([[goal, 0]]);
    var endFScore = new Map([[goal, h(goal, start)]]);
    var endfLess = (a, b) => endFScore.get(a) < endFScore.get(b);
    var endCurrent = goal;
    var loopCount = 0;
    var loopMax = 1000;
    while(openSet.length > 0 && endSet.length > 0){
        current = openSet[0];
        if(cameFrom.has(endCurrent)) return reconstructPath(cameFrom, endCurrent, goesTo);
        MinHeap.remove(openSet, fLess);
        for(var n of neighbors(current)){
            var tentativeGScore = gScore.get(current) + cost(current, n);
            if(!gScore.has(n) || tentativeGScore < gScore.get(n)){
                //console.log(tentativeGScore);
                cameFrom.set(n, current);
                gScore.set(n, tentativeGScore);
                fScore.set(n, tentativeGScore + h(n, goal));
                if(!(openSet.includes(n))) MinHeap.insert(openSet, n, fLess);
            }
        }
        loopCount++;
        if(loopCount >= loopMax) throw new Error("oof");
        if(debugOpts.oneDirectionAStar) continue;
        endCurrent = endSet[0];
        if(goesTo.has(current)) return reconstructPath(cameFrom, current, goesTo);
        MinHeap.remove(endSet, endfLess);
        for(var n of neighbors(endCurrent)) {
            var tentativeGScore = endGScore.get(endCurrent) + cost(endCurrent, n);
            if(!endGScore.has(n) || tentativeGScore < gScore.get(n)){
                goesTo.set(n, endCurrent);
                endGScore.set(n, tentativeGScore);
                endFScore.set(n, tentativeGScore + h(n, start));
                if(!(endSet.includes(n))) MinHeap.insert(endSet, n, endfLess);
            }
        }
        //console.log(intToPoint(current), intToPoint(endCurrent));
    }
    throw new Error("Failed!");
}

function pointToInt(p){
    if(typeof p === "number") return p;
    return +p[0] * WIDTH_IN_TILES + +p[1];
}

function intToPoint(p){
    if(typeof p === "object") return p;
    var x = p % WIDTH_IN_TILES;
    return [(p - x) / WIDTH_IN_TILES, x];
}

function dist(p1, p2){
    p1 = intToPoint(p1);
    p2 = intToPoint(p2);
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
}

function cost(p1, p2){
    var extraMult = 0;
    p1 = intToPoint(p1);
    p2 = intToPoint(p2);
    if(p1[0] !== p2[0] && p1[1] !== p2[1]) extraMult = costOfTile([p1[0], p2[1]]) + costOfTile([p2[0], p1[1]])
    return costOfTile(p1) * costOfTile(p2) * (1 + 0.001 * extraMult);
}

function costOfTile(t){
    t = intToPoint(t);
    if(t[0] > HEIGHT_IN_TILES) console.log(t[0] > HEIGHT_IN_TILES);
    const tp = tMap1[t[0]][t[1]];
    switch(tp.t){
        case 1: return 2
        case 2: return 100
        case 3: return 10
        case 6: return 99999
        default: return 1
    }
}

function arrEq(arr1, arr2){
    if(arr1.length !== arr2.length) return false;
    for(i in arr1){
        if(arr1[i] !== arr2[i]) return false;
    }
    return true;
}

function neighbors(tileCoords, width = WIDTH_IN_TILES, height = HEIGHT_IN_TILES){ //[y, x]
    var neigh = [];
    if(typeof tileCoords == "number") tileCoords = intToPoint(tileCoords);
    const y = tileCoords[0];
    const x = tileCoords[1];
    nTop = y > 0;
    nBot = y < height - 1;
    nLeft = x > 0;
    nRight = x < width - 1;
    if(nBot)            neigh.push(pointToInt([y + 1, x    ]));
    if(nBot && nRight)  neigh.push(pointToInt([y + 1, x + 1]));
    if(nRight)          neigh.push(pointToInt([y    , x + 1]));
    if(nRight && nTop)  neigh.push(pointToInt([y - 1, x + 1]));
    if(nTop)            neigh.push(pointToInt([y - 1, x    ]));
    if(nTop && nLeft)   neigh.push(pointToInt([y - 1, x - 1]));
    if(nLeft)           neigh.push(pointToInt([y    , x - 1]));
    const T = tMap1[y][x];
    if(nLeft && nBot)   neigh.push(pointToInt([y + 1, x - 1]));
    if(T.t === 5) neigh.push(pointToInt([(g = tps[!T.tpId + 0]).ty, g.tx]));
    return neigh;
}

function pointsToInt(p){
    if(typeof p === "number") return p;
    return pointToInt(p[0]) * TOTAL_TILES + pointToInt(p[1]);
}

function intToInts(p){
    var p0, p1;
    if(typeof p === "number") {
        p1 = p % TOTAL_TILES;
        p0 = (p - p1) / TOTAL_TILES;
    } else {
        p0 = pointToInt(p[0]);
        p1 = pointToInt(p[1]);
    }
    return [p0, p1];
}

function intToPoints(p){
    var p0, p1;
    if(typeof p === "number") {
        p1 = p % TOTAL_TILES;
        p0 = (p - p1) / TOTAL_TILES;
    } else {
        p0 = p[0];
        p1 = p[1];
    }
    return [intToPoint(p0), intToPoint(p1)];
}

class MinHeap {
    static parent(i){
        return Math.ceil(i / 2 - 1);
    }

    static leftChild(i){
        return i * 2 + 1;
    }

    static rightChild(i){
        return i * 2 + 2;
    }

    static insert(arr, val, less = (a, b) => a < b){
        if(val === undefined){throw new Error("bruh")}
        arr.push(val);
        var i = arr.length - 1;
        var p = MinHeap.parent(i);
        while(p >= 0 && less(arr[i], arr[p])){
            swap(arr, i, p);
            i = p;
            p = MinHeap.parent(i);
        }
        return arr;
    }

    static remove(arr, less = (a, b) => a < b){
        if(arr.length === 1) return arr.splice(0);
        arr[0] = arr.splice(arr.length - 1)[0];
        var current = 0;
        if(arr.length === 2){
            if(less(arr[1], arr[0])) swap(arr, 0, 1);
            return arr[0];
        }
        var leftC = MinHeap.leftChild(current);
        var rightC = MinHeap.rightChild(current);
        while(leftC in arr && rightC in arr && (less(arr[leftC], arr[current]) || less(arr[rightC], arr[current]))){
            if(less(arr[leftC], arr[rightC])){
                rightC = leftC;
            }
            swap(arr, current, rightC);
            current = rightC;
            leftC = MinHeap.leftChild(current);
            rightC = MinHeap.rightChild(current);
        }
        if(!(rightC in arr) && leftC in arr && less(arr[leftC], arr[current])) swap(arr, current, leftC);
        return(arr[0]);
    }
}

function swap(arr, i1, i2){
    var temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
    return arr;
}

class Player extends Robbit {
    constructor(){
        super(BOARD_WIDTH / 2, BOARD_HEIGHT - 2 * TILE_WIDTH, "player", 1.5, 100, 100, 40, 40);
        this.robbitType = "Player";
    }

    specMove(){
        document.getElementById("debugInfo").innerHTML = `
            hp: ` + this.hp + `<br>
            x: ` + this.x + `<br>
            y: ` + this.y + `<br>
            speed: ` + this.speed + `<br>
            dmg: ` + this.dmg + `
        `;
    }

    die(){
        this.visible = false;
        this.dead = true;
        if(won) return;
        state = (delta) => {}
        gameOver();
    }
}
