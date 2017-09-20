///<reference path="base/SceneBase.ts" />
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
        var FakeScene = (function (_super) {
            __extends(FakeScene, _super);
            function FakeScene() {
                return _super.call(this) || this;
            }
            FakeScene.prototype.update = function () {
                _super.prototype.update.call(this);
            };
            return FakeScene;
        }(com.dynomike.SceneBase));
        dynomike.FakeScene = FakeScene;
    })(dynomike = com.dynomike || (com.dynomike = {}));
})(com || (com = {}));
//# sourceMappingURL=FakeScene.js.map