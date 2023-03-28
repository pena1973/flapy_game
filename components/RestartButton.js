  // Класс рестарт
  export class RestartButton {
    #buttonSource = {
        x: 245,
        y: 400,
        width: 180,
        height: 80,
    };

    #buttonResult = {
        x: 30,
        y: 640,
        width: 180,
        height: 80,
    };
    
    constructor() {
    
    }

    move(ctx, img) {  
        ctx.drawImage(
            img,
            this.#buttonSource.x,
            this.#buttonSource.y,
            this.#buttonSource.width,
            this.#buttonSource.height,

            this.#buttonResult.x,
            this.#buttonResult.y,
            this.#buttonResult.width,
            this.#buttonResult.height
        );
    }
  }
