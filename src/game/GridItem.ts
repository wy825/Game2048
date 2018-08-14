class GridItem {

    public data: { num, color, bg, size };
    private _num: number;
    private size: number;
    private radius: number;


    public constructor(size: number) {
        //super();
        //this.touchEnabled = false;//不能点击
        this.size = size;
        this.radius = size / 4;
    }


    public setData(data: { num, color, bg, size }): void {
        this.data = data;
    }


    public createItem(): egret.Sprite {
        let item = new egret.Sprite();
        item.graphics.beginFill(this.data.bg, 1);
        item.graphics.drawRoundRect(0, 0, this.size, this.size, this.radius);
        item.graphics.endFill();
        item.width = this.size;
        item.height = this.size;

        if (this.data.num > 0) {
            let textLab = new eui.Label();
            textLab.size = this.data.size;
            textLab.text = '${this.data.num}'
            textLab.textColor = this.data.color;
            textLab.width = this.size;
            textLab.textAlign = egret.HorizontalAlign.CENTER;

            item.addChild(textLab);
        }
        // item.addChild(rect);
        return item;
    }
}