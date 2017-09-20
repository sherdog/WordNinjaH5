module com.dynomike {
    export class AssetLoader {

        private _assetArray: Array<string>;
        private _loading: boolean = false;
        private _onLoadCompleteCallback: Function = null;
        private _onProgressCallback: Function = null;
        private _loader: PIXI.loaders.Loader;

        public set onFinished(onLoadComplete: Function) {
            this._onLoadCompleteCallback = onLoadComplete;
        }

        public set onProgress(progressCB: Function) {
            this._onProgressCallback = progressCB;
        }

        public static resolution: number = 1;

        constructor() {

        }
        
        public add(asset: string): void {

            this._assetArray.push(asset);

        }

        public load(): void {

            if (this._assetArray.length) {

                PIXI.loader.add(this._assetArray)
                    .on("progress", this.onLoadProgress.bind(this))
                    .load(this.onAssetsLoaded.bind(this));

            }
        }

        private onLoadProgress(loader, resource) {

            console.log('loader progress: ' + loader.progress);

        }

        private onAssetsLoaded(): void {

        }
    }
}