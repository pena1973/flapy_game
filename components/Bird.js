
// Класс Птица
export class Bird {
    #canvas_width = 0;
    #SIZE = [36, 26];// размер квадратика птицы
    #Y = 100; // высота над землей

    #birdSource = {
        x: 270,
        y: 200,
        width: this.#SIZE[0],
        height: this.#SIZE[1],
    };

    #birdResult = {
        x: 300,
        y: 400,
        width: this.#SIZE[0],
        height: this.#SIZE[1],
    };

    constructor(canvas_width) {
        this.#canvas_width = canvas_width;
    }

    setStage(index) {
        this.#birdSource.x = 276;
        this.#birdSource.y = Math.floor((index % 9) / 3) * this.#SIZE[1] + 112;
        this.#birdSource.width = this.#SIZE[0];
        this.#birdSource.height = this.#SIZE[1];

        this.#birdResult.x = this.#canvas_width / 2 - this.#SIZE[0] / 2;
        this.#birdResult.y = this.#Y;
        this.#birdResult.width = this.#SIZE[0];
        this.#birdResult.height = this.#SIZE[1];
    }

    // клик - птица вверх
    up() {
        this.#Y -= 30;
    }
    getCoord() {
         return [this.#birdResult.x, this.#birdResult.y]
            }

    getSize() {
        return [this.#SIZE[0], this.#SIZE[1]]
    }
               

    move(ctx, img) {
        this.#Y += 1;
        ctx.drawImage(
            img,

            this.#birdSource.x,
            this.#birdSource.y,
            this.#birdSource.width,
            this.#birdSource.height,

            this.#birdResult.x,
            this.#birdResult.y,
            this.#birdResult.width,
            this.#birdResult.height
        );
    }

}