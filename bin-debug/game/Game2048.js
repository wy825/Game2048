var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Game2048 = (function (_super) {
    __extends(Game2048, _super);
    function Game2048() {
        var _this = _super.call(this) || this;
        _this.items = [[], [], [], []];
        _this.once(egret.Event.ADDED_TO_STAGE, _this.toStage, _this);
        return _this;
    }
    Game2048.prototype.toStage = function () {
        this.maxWidth = 1080;
        this.ratio = 1080 / 1920;
        this.minWidth = 240;
        this.scoreWidth = 90;
        var width = this.stage.stageWidth;
        if (width > this.maxWidth) {
            width = this.maxWidth;
        }
        else if (width < this.minWidth) {
            width = this.minWidth;
        }
        var height = width / this.ratio;
        this.stage.width = width;
        this.stage.height = height;
        //console.info("stage.width:" + this.stage.width + "\t stage.height:" + this.stage.height);
        this.createBg();
        this.createTopTitle();
        this.createScoreRect("最佳", this.stage.width - (this.scoreWidth + 20));
        this.createScoreRect("分数", this.stage.width - (this.scoreWidth * 2 + 20 + 10));
        this.createGridArea();
        this.createGridItem();
    };
    //创建背景
    Game2048.prototype.createBg = function () {
        var bgInfo = new egret.Shape();
        bgInfo.graphics.clear();
        bgInfo.graphics.beginFill(0xF6F6EA, 1);
        bgInfo.graphics.drawRect(0, 0, this.stage.width, this.stage.height);
        bgInfo.graphics.endFill();
        this.addChild(bgInfo);
    };
    //创建头部titile
    Game2048.prototype.createTopTitle = function () {
        //2048 title
        this.title = new egret.TextField();
        this.title.size = 60;
        this.title.textColor = 0x7C736A;
        this.title.text = "2048";
        this.title.x = 50;
        this.title.y = 20;
        this.title.textAlign = egret.HorizontalAlign.LEFT;
        this.addChild(this.title);
        //游戏描述
        var intro = new egret.TextField();
        intro.size = 24;
        intro.textColor = 0x7C736A;
        intro.text = "Play 2048 Game Online \nJoin the numbers and get to the 2048 title!";
        intro.x = 50;
        intro.y = 20 + this.title.height + 10;
        intro.textAlign = egret.HorizontalAlign.LEFT;
        this.addChild(intro);
        //new Game buttom
        this.newBtn = new eui.Button();
        this.newBtn.label = "新游戏";
        this.addChild(this.newBtn);
        this.newBtn.x = this.stage.width - this.newBtn.width - 20;
        this.newBtn.y = intro.y + intro.height - this.newBtn.height;
        this.newBtn.width = 90;
        this.newBtn.height = 40;
        this.newBtn.skinName = "gameBtnskin";
        var introBottomY = intro.y + intro.height;
        var newBtnBottomY = this.newBtn.y + this.newBtn.height;
        this.topAreaHeight = introBottomY > newBtnBottomY ? introBottomY : newBtnBottomY;
    };
    //分数区域
    Game2048.prototype.createScoreRect = function (intro, x) {
        var scoreRect = new egret.DisplayObjectContainer();
        scoreRect.width = this.scoreWidth;
        scoreRect.height = this.title.height;
        scoreRect.x = x;
        scoreRect.y = 20;
        var bg = new egret.Shape();
        bg.graphics.beginFill(0xBBADA0, .8);
        bg.graphics.drawRoundRect(0, 0, scoreRect.width, scoreRect.height, 20);
        bg.graphics.endFill();
        scoreRect.addChild(bg);
        var introText = new egret.TextField();
        introText.size = 18;
        introText.textColor = 0xffffff;
        introText.text = intro;
        introText.width = this.scoreWidth;
        introText.textAlign = egret.HorizontalAlign.CENTER;
        introText.x = 0;
        introText.y = 5;
        scoreRect.addChild(introText);
        this.bestScoreText = new egret.TextField();
        this.bestScoreText.size = 18;
        this.bestScoreText.textColor = 0x000000;
        this.bestScoreText.text = "0";
        this.bestScoreText.width = scoreRect.width;
        this.bestScoreText.textAlign = egret.HorizontalAlign.CENTER;
        //+15 间距
        this.bestScoreText.y = introText.height + 15;
        scoreRect.addChild(this.bestScoreText);
        this.addChild(scoreRect);
        //console.info("scoreRect:width:" + scoreRect.width + "\t height:" + scoreRect.height);
        //console.info("scoreRect:x:" + scoreRect.x + "\t y:" + scoreRect.y);
    };
    //创建九宫格区域
    Game2048.prototype.createGridArea = function () {
        var gridContainer = new egret.Sprite();
        gridContainer.graphics.beginFill(0xB8AF9D, 1);
        gridContainer.graphics.drawRoundRect(20, this.topAreaHeight + 20, this.stage.width - 40, this.stage.width - 40, 40);
        gridContainer.graphics.endFill();
        this.addChild(gridContainer);
    };
    Game2048.prototype.createGridItem = function () {
        var itemSize = (this.stage.width - 40 - (10 * 5)) / 4;
        console.info("itemSize:" + itemSize + "\t itemSize/4:" + itemSize / 4);
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                var item = new GridItem(itemSize);
                item.setData(Uitls.numStyle[0]);
                this.items[i][j] = item;
                var rect = item.createItem();
                this.addChild(rect);
                rect.x = 20 + 10 + 10 * j + j * itemSize;
                rect.y = this.topAreaHeight + 20 + 10 + 10 * i + i * itemSize;
                console.info("i:" + i + "\t j:" + j + "rect.x:" + rect.x + "\t rect.y" + rect.y + "\t width:" + rect.width);
            }
        }
    };
    return Game2048;
}(egret.DisplayObjectContainer));
__reflect(Game2048.prototype, "Game2048");
//# sourceMappingURL=Game2048.js.map