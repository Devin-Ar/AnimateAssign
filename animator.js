class Animator {
    constructor(spritesheet, frameData, animationData, frameDuration) {
        Object.assign(this, { spritesheet, frameData, animationData, frameDuration });

        this.elapsedTime = 0;
        this.totalTime = this.animationData.length * this.frameDuration;
    };

    drawFrame(tick, ctx, x, y, scale) {
        this.elapsedTime += tick;

        if (this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;

        const frameIndex = Math.floor(this.elapsedTime / this.frameDuration);
        const frameName = this.animationData[frameIndex];
        const frame = this.frameData[frameName];

        ctx.drawImage(this.spritesheet,
            frame.x, frame.y, frame.w, frame.h,
            x, y, frame.w * scale, frame.h * scale);
    };
}