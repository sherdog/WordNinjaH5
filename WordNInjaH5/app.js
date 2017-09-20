window.onload = function () {
    var sceneManager = com.dynomike.SceneManager;
    var loader = PIXI.loader;
    var resources = PIXI.loader.resources;
    //Create Application
    var app = new PIXI.Application(1170, 768, { backgroundColor: 0x000000 });
    document.body.appendChild(app.view);
    var meter = new FPSMeter();
    var tick = new PIXI.ticker.Ticker();
    tick.add(onTick);
    tick.start();
    //pass the app to the scenemanager.
    sceneManager.init(app);
    initializeAssets();
    //preload assets
    function onTick() {
        meter.tickStart();
        meter.tick();
    }
    function initializeAssets() {
        loader.add('sheet', "assets/img/1x/gameAssets0.json").load(onAssetsLoaded);
        loader.onProgress.add(onAssetsLoadProgress);
    }
    function onAssetsLoadProgress() {
        console.log('progress: ' + loader.progress);
    }
    function onAssetsLoaded(loader, resources) {
        sceneManager.loader = loader;
        sceneManager.resources = resources;
        console.log('On Assets Loaded');
        var game = sceneManager.createScene('game', com.dynomike.GameScene);
        var blank = sceneManager.createScene('fake', com.dynomike.FakeScene);
        var intro = sceneManager.createScene('intro'); //update this to show the intro scene
        sceneManager.gotoScene('game');
    }
};
//# sourceMappingURL=app.js.map