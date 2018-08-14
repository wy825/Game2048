var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GridItem = (function () {
    function GridItem(size) {
        //super();
        //this.touchEnabled = false;//不能点击
        this.size = size;
        this.radius = size / 4;
    }
    GridItem.prototype.setData = function (data) {
        this.data = data;
    };
    GridItem.prototype.createItem = function () {
        var item = new egret.Sprite();
        item.graphics.beginFill(this.data.bg, 1);
        item.graphics.drawRoundRect(0, 0, this.size, this.size, this.radius);
        item.graphics.endFill();
        item.width = this.size;
        item.height = this.size;
        // let rect = new eui.Rect();
        // // rect.graphics.beginFill(this.data.bg);
        // rect.graphics.beginFill(0xF65C3B,1);
        // rect.width = this.size;
        // rect.height = this.size;
        // rect.graphics.drawRoundRect(0, 0, this.size, this.size, this.radius);
        // rect.graphics.endFill();
        // rect.touchEnabled = false;
        if (this.data.num > 0) {
            var textLab = new eui.Label();
            textLab.size = this.data.size;
            textLab.text = '${this.data.num}';
            textLab.textColor = this.data.color;
            textLab.width = this.size;
            textLab.textAlign = egret.HorizontalAlign.CENTER;
            item.addChild(textLab);
        }
        // item.addChild(rect);
        return item;
    };
    return GridItem;
}());
__reflect(GridItem.prototype, "GridItem");
//# sourceMappingURL=GridItem.js.map