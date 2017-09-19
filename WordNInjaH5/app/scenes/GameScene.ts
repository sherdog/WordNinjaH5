///<reference path="../../lib/pixi.d.ts" />

module Dynomike {
    export class GameScene extends Scene {


        constructor(app: PIXI.Application) {
            super(app);
            this.onSceneLoaded();
        }

        private onLoadComplete(loader, resources) {
            //Move this to the base scene class, on sceneLoade would be called after all assets were loaded.
        }

        private onSceneLoaded() {
            console.log('onSceneLoaded called in GameScene');
        }

        public update() {
            super.update();
        }

    }
}