var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Uitls = (function () {
    function Uitls() {
    }
    Uitls.numStyle = {
        "0": { "num": 0, "color": 0x7c736a, "bg": 0xcdc1b4, "size": 65 },
        "2": { "num": 2, "color": 0x7c736a, "bg": 0xeee4da, "size": 65 },
        "4": { "num": 4, "color": 0x7c736a, "bg": 0xede0c8, "size": 65 },
        "8": { "num": 8, "color": 0xfff7eb, "bg": 0xf2b179, "size": 65 },
        "16": { "num": 16, "color": 0xfff7eb, "bg": 0xf59563, "size": 62 },
        "32": { "num": 32, "color": 0xfff7eb, "bg": 0xf57c5f, "size": 62 },
        "64": { "num": 64, "color": 0xfff7eb, "bg": 0xf65d3b, "size": 62 },
        "128": { "num": 128, "color": 0xfff7eb, "bg": 0xedce71, "size": 60 },
        "256": { "num": 256, "color": 0xfff7eb, "bg": 0xedcc61, "size": 60 },
        "512": { "num": 512, "color": 0xfff7eb, "bg": 0xecc850, "size": 60 },
        "1024": { "num": 1024, "color": 0xfff7eb, "bg": 0xedc53f, "size": 50 },
        "2048": { "num": 2048, "color": 0xfff7eb, "bg": 0xeec22e, "size": 50 },
        "4096": { "num": 4096, "color": 0xfff7eb, "bg": 0x3d3a33, "size": 50 },
        "8192": { "num": 8192, "color": 0xfff7eb, "bg": 0x0c0b0a, "size": 50 },
        "16384": { "num": 16384, "color": 0xfff7eb, "bg": 0x0fbcbc, "size": 40 },
    };
    return Uitls;
}());
__reflect(Uitls.prototype, "Uitls");
//# sourceMappingURL=Uitls.js.map