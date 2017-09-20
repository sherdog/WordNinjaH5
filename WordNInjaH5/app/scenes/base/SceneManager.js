var com;
(function (com) {
    var dynomike;
    (function (dynomike) {
        var SceneManager = (function () {
            function SceneManager() {
            }
            Object.defineProperty(SceneManager, "loader", {
                set: function (value) { this._loader = value; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SceneManager, "resources", {
                set: function (value) { this._resources = value; },
                enumerable: true,
                configurable: true
            });
            SceneManager.init = function (app) {
                this._app = app;
                this.update();
            };
            SceneManager.createScene = function (id, NewScene) {
                if (NewScene === void 0) { NewScene = com.dynomike.SceneBase; }
                if (SceneManager.scenes[id])
                    return undefined;
                var scene = new NewScene(this._app);
                SceneManager.scenes[id] = scene;
                this._app.stage.addChild(scene);
                return scene;
            };
            SceneManager.update = function () {
                requestAnimationFrame(function () { com.dynomike.SceneManager.update(); });
                if (!this.currentScene || this.currentScene.isPaused())
                    return;
                this.currentScene.update();
                this._app.renderer.render(this.currentScene);
            };
            SceneManager.gotoScene = function (id) {
                if (SceneManager.scenes[id]) {
                    if (SceneManager.currentScene)
                        SceneManager.currentScene.pause();
                    SceneManager.currentScene = SceneManager.scenes[id];
                    SceneManager.currentScene.resume();
                    return true;
                }
                return false;
            };
            return SceneManager;
        }());
        SceneManager.scenes = {};
        dynomike.SceneManager = SceneManager;
    })(dynomike = com.dynomike || (com.dynomike = {}));
})(com || (com = {}));
//# sourceMappingURL=SceneManager.js.map