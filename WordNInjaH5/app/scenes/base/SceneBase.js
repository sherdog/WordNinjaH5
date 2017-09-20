///<reference path="../../../bin/pixi.d.ts" />
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
        var SceneBase = (function (_super) {
            __extends(SceneBase, _super);
            function SceneBase() {
                var _this = _super.call(this) || this;
                _this.paused = false;
                _this.updateCallback = function () { };
                return _this;
            }
            SceneBase.prototype.onUpdate = function (updateCallback) {
                this.updateCallback = updateCallback;
            };
            SceneBase.prototype.update = function () {
                this.updateCallback();
            };
            SceneBase.prototype.pause = function () {
                this.paused = true;
            };
            SceneBase.prototype.resume = function () {
                this.paused = false;
            };
            SceneBase.prototype.isPaused = function () {
                return this.paused;
            };
            return SceneBase;
        }(PIXI.Container));
        dynomike.SceneBase = SceneBase;
    })(dynomike = com.dynomike || (com.dynomike = {}));
})(com || (com = {}));
//# sourceMappingURL=SceneBase.js.map