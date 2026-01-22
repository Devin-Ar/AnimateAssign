const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

const spriteData = DATA.spritesheets.hero_sheet;

ASSET_MANAGER.queueDownload(spriteData.url);

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

    const heroSheet = ASSET_MANAGER.getAsset(spriteData.url);

    const myHero = new Animated(gameEngine, 100, 100, heroSheet, spriteData);

    gameEngine.addEntity(myHero);

    gameEngine.init(ctx);

	gameEngine.start();
});