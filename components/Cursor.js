// Класс курсор
export class Cursor {
    #countShow = 0;
    #cursorSource = {
        x: 74,
        y: 345,
        width: 30,
        height: 40,
    };

    #cursorResult = {
        x: 0,
        y: 0,
        width: 30,
        height: 40,
    };
    
    constructor() {
    
    }
    
    set(x,y){
        this.#countShow = 10;
        this.#cursorResult.x = x;
        this.#cursorResult.y = y;
}

    move(ctx, img) {  
        this.#countShow -=1;
        if (this.#countShow>0) 
        {this.#countShow -=1;
        ctx.drawImage(
            img,
            this.#cursorSource.x,
            this.#cursorSource.y,
            this.#cursorSource.width,
            this.#cursorSource.height,

            this.#cursorResult.x,
            this.#cursorResult.y,
            this.#cursorResult.width,
            this.#cursorResult.height
        );}
    }
  }
