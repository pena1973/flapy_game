// Класс крушение птицы
export class CrushBird {
   

    constructor(bird) {
   
    }

  
    crush(index, shift, ctx, img, canvas,field, restartButton,tablo,tubes,bird) {

       let intervalID = setInterval(() => {

            if (bird. getCoord()[1] < 568) {                
               ctx.clearRect(0, 0, canvas.width, canvas.height - 254)
                // Обновили поле
                field.move(index, shift, ctx, img);
                // прорисовали кнопку запуска
                  restartButton.move(ctx, img);
                 // прорисовали табло
                  tablo.move(ctx, img);

                // рисуем  все трубы 
                  tubes.forEach(tube => {
                  tube.move(ctx, img);
                  });
                 // прорисовали птицу
                //   bird.setStage(index);
                  bird.fall(ctx, img ); 

            } else    clearTimeout(intervalID);
        }, 100);


    }

}