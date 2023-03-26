import { Field } from "/components/Field.js";
import * as Const from "/components/Const.js";
import * as myMath from "/components/MyMath.js";
import { TubeBehind, TubeBelow } from "/components/Tube.js";


export const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");

const imgURL = "sprite.png";
const img = new Image();
img.src = imgURL;

// // const SPEED = 3.1;
const SPEED = 1.1;
// const SIZE = [51, 36];// размер квадратика птицы

// интервал между трубами инишиал
let between = 0;
// массив труб на поле
let tubes = [];

// Размеры
//  X,Y,width,height
// Птица
// ТрубаСверху
// ТрубаСнизу
// КнопкаЗапуска
// ФонСверху
// Табло
// Медаль1
// Медаль2
// Медаль3
// Медаль4


const field = new Field();

let index = 0;
//render - одна итерация  за цикл которой счетчик увеличивается на 0.3
// за это время последовательно ствигается два куска исходного рисунка (фон) на небольшое расстояние 
// в какойто момент  счетчик доходит до состояния когда 
// Math.floor((index % 9) / 3) будет равно 2 и 3 и в этот момент координата  исходного участка птицы сдвигается на размер птицы вниз
// и таким образом в цикле 3 состояния
const render = () => {
  index += 0.3;
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // Сдвиг от края
  const shift = (index * SPEED) % canvas.width;
  // Обновили поле
   field.move(index, shift, ctx, img);

  // если горизонтальный интервал межу трубами наступил ставим новую пару труб
  between -= 0.3;
  if (between < 0) {
    // поставили две трубы  c такой длинной чтоб был интервал между ними 200
    // длина трубы
    let h = myMath.getRandom(100, 350);
    const tubeBehind = new TubeBehind(h);
    tubeBehind.setX(canvas.width);
    const tubeBelow = new TubeBelow(canvas.height - 200 - h);
    tubeBelow.setX(canvas.width);
    tubes.push(...[tubeBehind, tubeBelow]);
 
    // получили новый интервал между трубами
     between = myMath.getRandom(50, 200);
  }

   // проверим трубы и удалим отработанные (за экраном)
    tubes = tubes.filter(tube => tube.getX() > -55);
    // рисуем и сдвигаем все трубы в каждой итерации
    tubes.forEach(tube => {
    // перерисуем
    tube.move(ctx, img);
    // сдвигаем координату трубы трубы по индексу  
    tube.setX(tube.getX() - 0.8);
    });


  window.requestAnimationFrame(render);
};

Const.img.onload = render;