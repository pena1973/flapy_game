export class Field {

    // ФонВерх
    // [280, 0, 208, 150]
    #bgSource1 = {
        x: 280,
        y: 0,
        width: 208,
        height: 100,
    };

    // ФонНиз
    // [0, 0, 208, 150]
    #bgSource2 = {
        x: 0,
        y: 0,
        width: 208,
        height: 200,
    };
    // Счетчик частей поля
    #count = 1;

    constructor() {
    }

    move(index) {
        // сдвиг слева
        const backgroudX = -((index * SPEED) % canvas.width) - 420;
        this.#count = Math.floor(index % 208)

        // протаскиваем все части в цикле
        for (let m = 0; m < this.#count; m++) {
            let bgPartResult2 = {
                x: backgroudX + canvas.width + (208 * m),
                y: 500,
                width: 208,
                height: 200,
            };

            let bgPartResult1 = {
                x: backgroudX + canvas.width + (208 * m),
                y: 0,
                width: 208,
                height: 100,
            };

            ctx.drawImage(
                img,
                this.#bgSource2.x,
                this.#bgSource2.y,
                this.#bgSource2.width,
                this.#bgSource2.height,

                bgPartResult2.x,
                bgPartResult2.y,
                bgPartResult2.width,
                bgPartResult2.height
            );

            ctx.drawImage(
                img,
                this.#bgSource1.x,
                this.#bgSource1.y,
                this.#bgSource1.width,
                this.#bgSource1.height,

                bgPartResult1.x,
                bgPartResult1.y,
                bgPartResult1.width,
                bgPartResult1.height
            )
        }
    }
}