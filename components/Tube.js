// Класс труба
class Tube {
    _tubeSource = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
  
    _tubeResult = {
      x: 0,
      y: 0,
      width: 30,
      height: 0,
    };
    
    // // длина трубы
    // _high = 0;
    // // расположение на оси X
    // _location = canvas.width;
    
    constructor() { 
      // длина трубы
      let h = myMath.getRandom(100, 350);
      this._tubeResult.height = h;   
      this._tubeSource.height = h;       
    }
    
    move(index) {
      // сдвиг слева
      const backgroudX = -((index * SPEED) % canvas.width) - 420;
      // this.#count = Math.floor(index % 208)
      // меняем только x координату
        this._tubeResult.x = backgroudX + canvas.width;
          ctx.drawImage(
              img,
              this._tubeSource.x,
              this._tubeSource.y,
              this._tubeSource.width,
              this._tubeSource.height,
  
              this._tubeResult.x,
              this._tubeResult.y,
              this._tubeResult.width,
              this._tubeResult.height,
  
          );
    }
  }
  
 export class TubeBehind extends Tube {
  
    constructor() {
      super();
      this._tubeSource.x = 580;
      this._tubeSource.y = 0;
      this._tubeSource.width = 30;
      this._tubeSource.height = 380;      
    }
    set() {
      let h = myMath.getRandom(100, 350);
      
      this._tubeSource.y = 380-h;       
      this._tubeSource.height = h;       
  
      this._tubeResult.x = canvas.width,  
      this._tubeResult.y = 0;  
      this._tubeResult.height = h;           
    }
  
  }
  
 export class TubeBelow extends Tube {
  
    constructor() {
      super();
      this._tubeSource.x = 490;
      this._tubeSource.y = 0;
      this._tubeSource.width = 30;
      this._tubeSource.height = 380;      
    }
    set() {
      let h = myMath.getRandom(100, 350);
      
      this._tubeSource.y = 0;       
      this._tubeSource.height = h;       
  
      this._tubeResult.x = canvas.width,  
      this._tubeResult.y = 700-h;  
      this._tubeResult.height = h;           
    }
  }
  
  