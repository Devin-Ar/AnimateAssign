class Animated {
    constructor(game, x, y, spritesheet, spriteMetadata) {
        Object.assign(this, { game, x, y });

        const frames = spriteMetadata.frames;
        const idleAnim = spriteMetadata.animations.run;

        this.animator = new Animator(spritesheet, frames, idleAnim, 0.1);
    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 8);
    };
}