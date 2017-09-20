var com;
(function (com) {
    var dynomike;
    (function (dynomike) {
        var AssetLoader = (function () {
            function AssetLoader() {
                this._loading = false;
                this._onLoadCompleteCallback = null;
                this._onProgressCallback = null;
            }
            Object.defineProperty(AssetLoader.prototype, "onFinished", {
                set: function (onLoadComplete) {
                    this._onLoadCompleteCallback = onLoadComplete;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AssetLoader.prototype, "onProgress", {
                set: function (progressCB) {
                    this._onProgressCallback = progressCB;
                },
                enumerable: true,
                configurable: true
            });
            AssetLoader.prototype.add = function (asset) {
                this._assetArray.push(asset);
            };
            AssetLoader.prototype.load = function () {
                if (this._assetArray.length) {
                    PIXI.loader.add(this._assetArray)
                        .on("progress", this.onLoadProgress.bind(this))
                        .load(this.onAssetsLoaded.bind(this));
                }
            };
            AssetLoader.prototype.onLoadProgress = function (loader, resource) {
                console.log('loader progress: ' + loader.progress);
            };
            AssetLoader.prototype.onAssetsLoaded = function () {
            };
            return AssetLoader;
        }());
        AssetLoader.resolution = 1;
        dynomike.AssetLoader = AssetLoader;
    })(dynomike = com.dynomike || (com.dynomike = {}));
})(com || (com = {}));
//# sourceMappingURL=AssetLoader.js.map