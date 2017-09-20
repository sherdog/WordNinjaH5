///<reference path="../../bin/pixi.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var com;
(function (com) {
    var dynomike;
    (function (dynomike) {
        var GameScene = (function (_super) {
            __extends(GameScene, _super);
            function GameScene() {
                var _this = _super.call(this) || this;
                console.log('Created a game scene');
                return _this;
            }
            GameScene.prototype.update = function () {
                _super.prototype.update.call(this);
            };
            return GameScene;
        }(com.dynomike.SceneBase));
        dynomike.GameScene = GameScene;
    })(dynomike = com.dynomike || (com.dynomike = {}));
})(com || (com = {}));
//# sourceMappingURL=GameScene.js.map