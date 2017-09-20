///<reference path="../../../bin/pixi.d.ts" />

module com.dynomike {
    export class SceneBase extends PIXI.Container {

        private paused: boolean = false;
        private updateCallback = function () { };

        constructor() {
            super();
        }

        public onUpdate(updateCallback: () => void) {
            this.updateCallback = updateCallback;
        }

        public update() {
            this.updateCallback();
        }

        public pause() {
            this.paused = true;
        }

        public resume() {
            this.paused = false;
        }

        public isPaused() {
            return this.paused;
        }
    }
}