
// Класс табло
export class Tablo {
  
    #medal1 = [310, 113];
    #medal2 = [310, 158];
    #medal3 = [358, 113];
    #medal4 = [358, 158];

    #medalCurentX = 310;
    #medalCurentY = 113;

    #sourceMedal = {
        x: 0,
        y: 0,
        width: 45,
        height: 45,
    };

    #resultMedal = {
        x: 273,
        y: 640,
        width: 45,
        height: 45,
    };

    #score = 0;
    #best = 0;

    // табло
    #source = {
        x: 170,
        y: 270,
        width: 300,
        height: 120,
    };

    #result = {
        x: 260,
        y: 615,
        width: 200,
        height: 80,
    };

    constructor() {

    }

    setScore(score) {
        this.#score = score;
        if (score > 100) {
            this.#medalCurentX = this.#medal4[0];
            this.#medalCurentY = this.#medal4[1];
        } else if (score > 50) {
            this.#medalCurentX = this.#medal3[0];
            this.#medalCurentY = this.#medal3[1];

        } else if (score > 20) {
            this.#medalCurentX = this.#medal2[0];
            this.#medalCurentY = this.#medal2[1];
        } else {
            this.#medalCurentX = this.#medal1[0];
            this.#medalCurentY = this.#medal1[1];
        }

    }

    setBest(best) {
        this.#best = best;
    }

    move(ctx, img) {
        // табло
        ctx.drawImage(
            img,
            this.#source.x,
            this.#source.y,
            this.#source.width,
            this.#source.height,

            this.#result.x,
            this.#result.y,
            this.#result.width,
            this.#result.height
        );

        // медаль
        ctx.drawImage(
            img,
            this.#medalCurentX,
            this.#medalCurentY,
            this.#sourceMedal.width,
            this.#sourceMedal.height,

            this.#resultMedal.x,
            this.#resultMedal.y,
            this.#resultMedal.width,
            this.#resultMedal.height
        );
        // счет
        ctx.fillStyle = '#444';

        ctx.font = "bold 12pt Arial";
        ctx.fillText(`${this.#score}`, 378, 650)
        ctx.fillText(`${this.#best}`, 378, 680)

    }
}
