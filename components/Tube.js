import * as myMath from "/components/MyMath.js";
import * as Const from "/components/Const.js";

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
    // Длина трубы
    _h = 0;
    // координата Х  на поле - при движении меняется
    _X = 0;
    
    // полностью создаем трубу
    constructor(h) { 
    //   // длина трубы
    //   this._h = h;
    //   this._tubeResult.height = h;   
    //   this._tubeSource.height = h;       
    }

    //   Установка текущей координаты      
    setX(Х) {
      this._X = Х;       
    }
      //   получение текущей координаты      
      getX(Х) {
        return this._X;       
      }

    // рисуем трубу
    move(ctx,img) {        
        this._tubeResult.x = this._X,
      // сдвиг слева
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
 
  // специфика трубы сверху 
 export class TubeBehind extends Tube {  
    
    constructor(h) {
      super();
      super._h = h;
      this._tubeSource.x = 555;
      this._tubeSource.y = 400-this._h;
      this._tubeSource.width = 55;
      this._tubeSource.height = this._h;  

      this._tubeResult.x = canvas.width,  
      this._tubeResult.y = 0;  
      this._tubeResult.width = 55;
      this._tubeResult.height = this._h;                 
    }
  }

  // специфика трубы снизу
 export class TubeBelow extends Tube {
  
    constructor(h) {
      super();
      super._h = h;

      this._tubeSource.x = 500;
      this._tubeSource.y = 0;
      this._tubeSource.width = 55;
      this._tubeSource.height = this._h;       
  
      this._tubeResult.x = canvas.width,  
      this._tubeResult.y = 700-h;  

      this._tubeResult.width = 55;
      this._tubeResult.height = this._h;           
      

    }
  }
  
  