import {Field} from "./components/Field";

import myMath from "./components/MyMath";
import {TubeBehind,TubeBelow} from "./components/Tube";
const imgURL = "sprite.png";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = imgURL;

// const SPEED = 3.1;
const SPEED = 1.1;
const SIZE = [51, 36];// размер квадратика птицы
// случайный интервал между трубами
let between = myMath.getRandom(50, 250);

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
const tubeBehind = new TubeBehind();
const tubeBelow = new TubeBelow();

let index = 0;
//render - одна итерация  за цикл которой счетчик увеличивается на 0.3
// за это время последовательно ствигается два куска исходного рисунка (фон) на небольшое расстояние 
// в какойто момент  счетчик доходит до состояния когда 
// Math.floor((index % 9) / 3) будет равно 2 и 3 и в этот момент координата  исходного участка птицы сдвигается на размер птицы вниз
// и таким образом в цикле 3 состояния
const render = () => {
  index += 0.3;
  field.move(index);
  //  const backgroudX = -((index * SPEED) % canvas.width);

  // //  результирующая точка итерации
  //   const bgPartOneResult = {
  //     x: backgroudX + canvas.width,
  //     y: 0,
  //     width: 210,
  //     height: 150,   
  //   };

  // //  результирующая точка второй части
  //     const bgPartTwoResult = {
  //     x: backgroudX + canvas.width+210,
  //     y: 0,
  //     width: 210,
  //     height: 150
  //   };

  //   // протаскивание части исходного изображения из одной точки в другую
  //   // проташили сначала первую
  //   ctx.drawImage(
  //     img,

  //     bgSource.x,
  //     bgSource.y,
  //     bgSource.width,
  //     bgSource.height,

  //     bgPartOneResult.x,
  //     bgPartOneResult.y,
  //     bgPartOneResult.width,
  //     bgPartOneResult.height
  //   );

  //   // по окончании первой проташили вторую
  //   ctx.drawImage(
  //     img,

  //     bgSource.x,
  //     bgSource.y,
  //     bgSource.width,
  //     bgSource.height,

  //     bgPartTwoResult.x,
  //     bgPartTwoResult.y,
  //     bgPartTwoResult.width,
  //     bgPartTwoResult.height
  //   );

  // // птица
  // const birdSource =  {
  //   x: 432,
  //   y: Math.floor((index % 9) / 3) * SIZE[1],
  //   width: SIZE[0],
  //   height: SIZE[1],
  // };

  // const birdResult = {
  //   x: canvas.width / 2 - SIZE[0] / 2,
  //   y: 200,
  //   width: SIZE[0],
  //   height: SIZE[1],
  // };

  // ctx.drawImage(
  //   img,

  //   birdSource.x,
  //   birdSource.y,
  //   birdSource.width,
  //   birdSource.height,

  //   birdResult.x,
  //   birdResult.y,
  //   birdResult.width,
  //   birdResult.height
  // );

  window.requestAnimationFrame(render);
};

img.onload = render;