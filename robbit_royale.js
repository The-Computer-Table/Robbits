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
|\                                                  \
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

Robbit Royale v0.4 Pre-Alpha Alpha

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

ARCHIVE:
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

var g;

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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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

var currentMap = 1;
var tMap1 = []; //array to hold Tile objects
var block = []; //array to hold blocked zones

//constants

const SCALE = 2;
const TILE_WIDTH = 16 * SCALE;
const WIDTH_IN_TILES = 32;
const BOARD_WIDTH = WIDTH_IN_TILES * TILE_WIDTH;
const HEIGHT_IN_TILES = 16;
const BOARD_HEIGHT = HEIGHT_IN_TILES * TILE_WIDTH;
const ERROR = 1.5;
const CHAOS = .2;
const UPSCALE = 1;

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
var enemy;
var starts = []
var b = document.getElementById("bod");
var state = inGame;
var objs = [tMap1];
var debugInfo = true;

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

loadMenu();

function chaos(ch = CHAOS){
    return 1 + (Math.random() - 0.5) * ch;
}

function loadMenu(){
    loader
        .add("Fonts/F_YSCPuKgWBcrTevy1eTgkMm.ttf.txt")
        .add("Fonts/ArcadeClassicGreen.txt")
        .load(mainMenu);
}

const TITLE_SCALE = 2 * SCALE;
function mainMenu(){
    menu([
        [2 * TILE_WIDTH - BOARD_HEIGHT / 2, "ROBBIT ROYALE", {fontName: "ArcadeClassicGreen"}, TITLE_SCALE],
        [-3 * TILE_WIDTH, "Start", {fontName: "ArcadeClassic"}, SCALE, loadGame],
        [2 * TILE_WIDTH, "Options", {fontName: "ArcadeClassic"}, SCALE, loadOpts]
    ]);
}

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

function loadOpts(){
    loader.load(options);
}

function options(){
    menu([
        [2 * TILE_WIDTH - BOARD_HEIGHT / 2, "Options", {fontName: "ArcadeClassicGreen"}, TITLE_SCALE],
        //[-4 * TILE_WIDTH, "Keybinds", {fontName: "ArcadeClassic"}, SCALE, () => {}],
        //[0 * TILE_WIDTH, "Difficulty", {fontName: "ArcadeClassic"}, SCALE, () => {}],
        [4 * TILE_WIDTH, "Return", {fontName: "ArcadeClassic"}, SCALE, mainMenu]
    ], 8 * TILE_WIDTH)
}

function centeredText(txt, style, width, height, scale = SCALE) {
    var text = new BitmapText(txt, new TextStyle(style));
    text.anchor.set(0.5);
    text.x = width / 2;
    text.y = height / 2;
    text.scale.x = text.scale.y = scale;
    return text;
}

function loadGame(){
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

function loadMaps(){
    var mapArr = resources["maplist"].data.split("\n");
    var theMap = mapArr[currentMap];
    loader.add(theMap, "map/" + theMap + ".json");
    map1 = resources[theMap];
    loader.load(startGame);
}
function startGame(){

    map1.data = testMap;
    //make tile objects
    for(var i in map1.data){
        tMap1[i] = [];
        for(var j in map1.data[i]){
            tMap1[i][j] = new Tile(i, j, map1.data[i][j]);
        }
    }

    //add robbit
    rob = new Player();
    //add other starts
    for(i in starts){
        starts[i]();
    }
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

    window.setTimeout(() => app.ticker.add((delta) => state(delta)), 500);
}

function inGame(delta){
    mainLoop(objs);
}

function mainLoop(obj){
    if(Array.isArray(obj)){
        //if(Array.isArray(func)){
        //    for(var i in obj){
        //        mainLoop(obj[i], func[i]);
        //    }
        //} else {
            for(var i in obj){
                mainLoop(obj[i]);
            }
        //}
    } else {
        notDead: {
            if(obj.dead) break notDead;
            obj.move();
        }
    }
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
                starts.push(() => {new SimpleEnemy(x * TILE_WIDTH, y * TILE_WIDTH, 1, 20, 40, 200, rob);});
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
        let onTile = tMap1[Math.floor(this.y / TILE_WIDTH + 0.5)][Math.floor(this.x / TILE_WIDTH + 0.5)];
        onTile.onStep(this);
        this.wait++;
        for(i in this.timerWaits) this.timerWaits[i]++;
        this.specMove();
        if(this.hp <= 0) this.die();
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
        this.target = target;
        this.targX = this.target.x;
        this.targY = this.target.y;
    }

    keys() {
        return {
            up: this.y > this.target.y + BOARD_HEIGHT * (chaos() - 1),
            down: this.y < this.target.y + BOARD_HEIGHT * (chaos() - 1),
            left: this.x > this.target.x + BOARD_WIDTH * (chaos() - 1),
            right: this.x < this.target.x + BOARD_WIDTH * (chaos() - 1)
        };
    }

    specMove(){
        if(this.wait >= this.reload){
            this.wait = 0;
            this.shoot(this.target.x + TILE_WIDTH / 2, this.target.y + TILE_WIDTH / 2, 0, CHAOS);
        }
    }
}

function reconstructPath(cameFrom, current){
    var totalPath = [intToPoint(current)];
    while(current in cameFrom){
        current = cameFrom[current];
        totalPath.unshift(intToPoint(current));
    }
    return totalPath;
}

function aStar(start, goal, h = (p) => dist(p, goal)){
    start = pointToInt(start);
    goal = pointToInt(goal);
    var openSet = [start];
    var cameFrom = new Map();
    var gScore = new Map([[start, 0]]); //pointToInt(p) -> cost of path from start to p
    var fScore = new Map([[start, h(start)]]); //pointToInt(p) -> heuristic from p to goal
    var hLess = (a, b) => h(a) < h(b);
    var current;
    while(openSet.length > 0){
        current = openSet[0];
        if(current === goal) return reconstructPath(cameFrom, current);
        MinHeap.remove(openSet, hLess);
        for(var n of neighbors(current)){
            var tentativeGScore = gScore.get(current) + cost(current, n);
            if(!gScore.has(n) || tentativeGScore < gScore.get(n)){
                console.log(tentativeGScore);
                cameFrom.set(n, current);
                gScore.set(n, tentativeGScore);
                fScore.set(n, tentativeGScore + h(n));
                if(!(openSet.includes(n))) MinHeap.insert(openSet, n, hLess);
            }
        }
    }
    throw new Error("Pi failed big time!");
}

function pointToInt(p){
    if(typeof p === "number") return p
    return p[0] * HEIGHT_IN_TILES + p[1];
}

function intToPoint(p){
    if(typeof p === "object") return p;
    var x = p % HEIGHT_IN_TILES;
    return [(p - x) / HEIGHT_IN_TILES, x];
}

function dist(p1, p2){
    p1 = intToPoint(p1);
    p2 = intToPoint(p2);
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
}

function cost(p1, p2){
    p1 = intToPoint(p1);
    p2 = intToPoint(p2);
    var mult = 1;
    const tP2 = tMap1[p2[0]][p2[1]];
    switch(tP2.t){
        case 1:
            mult *= 2;
            break;
        case 2:
            mult *= 10;
            break;
        case 3:
            mult *= 99999;
            break;
        case 4:
            mult *= 99999;
    }
    return mult * dist(p1, p2);
}

function neighbors(tileCoords, width = WIDTH_IN_TILES, height = HEIGHT_IN_TILES){ //[y, x]
    var neigh = [];
    const y = tileCoords[0];
    const x = tileCoords[1];
    nTop = y > 0;
    nBot = y < height - 1;
    nLeft = x > 0;
    nRight = x < width - 1;
    if(nBot)            neigh.push([y + 1, x    ]);
    if(nBot && nRight)  neigh.push([y + 1, x + 1]);
    if(nRight)          neigh.push([y    , x + 1]);
    if(nRight && nTop)  neigh.push([y - 1, x + 1]);
    if(nTop)            neigh.push([y - 1, x    ]);
    if(nTop && nLeft)   neigh.push([y - 1, x - 1]);
    if(nLeft)           neigh.push([y    , x - 1]);
    if(nLeft && nBot)   neigh.push([y + 1, x - 1]);
    return neigh;
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
        if(!(rightC in arr) && leftC in arr && less(arr[leftC], arr[current])) swap(arr, current, rightC);
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
        super(BOARD_WIDTH / 2, BOARD_HEIGHT - 2 * TILE_WIDTH, "player", 1.5, 100, 100, 10, 40);
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
}
