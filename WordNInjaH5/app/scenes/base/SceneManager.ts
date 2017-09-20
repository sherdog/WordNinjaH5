module com.dynomike {

    export class SceneManager {

        private static scenes: any = {};
        public static currentScene: com.dynomike.SceneBase;
        private static _app: PIXI.Application;
        private static _loader;
        private static _resources;

        public static set loader(value) { this._loader = value; }
        public static set resources(value) { this._resources = value }

        public static init(app: PIXI.Application) {
            this._app = app;
            this.update();
        }

        public static createScene(id: string, NewScene: new (app: PIXI.Application) => com.dynomike.SceneBase = com.dynomike.SceneBase): SceneBase {

            if (SceneManager.scenes[id]) return undefined;

            var scene = new NewScene(this._app);
            SceneManager.scenes[id] = scene;

            this._app.stage.addChild(scene);
            return scene;
        }

        private static update() {

            requestAnimationFrame(function () { com.dynomike.SceneManager.update() });

            if (!this.currentScene || this.currentScene.isPaused()) return;
            this.currentScene.update();
            this._app.renderer.render(this.currentScene);
        }

        public static gotoScene(id: string): boolean {

            if (SceneManager.scenes[id]) {
                if (SceneManager.currentScene)
                    SceneManager.currentScene.pause();

                SceneManager.currentScene = SceneManager.scenes[id];
                SceneManager.currentScene.resume();

                return true;
            }

            return false;
        }

    }
}