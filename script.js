import { Field } from "/components/Field.js";
import * as Const from "/components/Const.js";
import * as myMath from "/components/MyMath.js";
import { TubeBehind, TubeBelow } from "/components/Tube.js";
import { Bird } from "/components/Bird.js";
import { RestartButton } from "/components/RestartButton.js";
import { Tablo } from "/components/Tablo.js";
import { Cursor } from "/components/Cursor.js";
import { CrushBird } from "/components/CrushBird.js";

export const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");

const img = new Image();
img.src = 'sprite.png';

const SPEED = 1.1;

// стартовый интервал между трубами 
let between = 0;
// массив труб на поле
let tubes = [];
// состояние игры 0-инит 1-игра 2-фалл
let gameStage = 0;
// результат
let score = 0;
// лучший результат
let best = 0;
// поле
const field = new Field();
// птица
let bird = new Bird(canvas.width);
// рестарт
let restartButton = new RestartButton();
// табло
let tablo = new Tablo();
// курсор
let cursor = new Cursor();
// итератор
let index = 0;

// проверка столкновения c трубами и землей
function crush (bird, tubes) {
  let [birdX, birdY] = bird.getCoord();
  let [birdW, birdH] = bird.getSize();

  // земля
  if (birdY + birdH >= 600) return true

  // трубы 
  for (let ind = 0; ind < tubes.length; ind++) {
    const tube = tubes[ind];
    let [tubeX, tubeY] = tube.getCoord();
    let [tubeW, tubeH] = tube.getSize();

    // проверяю горизонтальное вхождение  птицы в диапазон координат трубы    
    if (myMath.Range(birdX + birdW, tubeX, tubeX + tubeW)
      || myMath.Range(birdX, tubeX, tubeX + tubeW)) {
      //если есть горизонтальное соприкосновение, проверяю вертикальное
      if (myMath.Range(birdY + birdH, tubeY, tubeY + tubeH)
        || myMath.Range(birdY, tubeY, tubeY + tubeH)) {
        return true
      }
    };
   }
    return false
 
};

// проверка пролета
function flyBetween(bird, tubes, iterator) {
  let [birdX, birdY] = bird.getCoord();
  let [birdW, birdH] = bird.getSize();
  // трубы 
  for (let ind = 0; ind < tubes.length; ind++) {
    const tube = tubes[ind];
    let tubeX = tube.getX();
    // проверяю только по оси X и только одну координару переднего края в промежутке двойной сдвиг (труба+ птица навстречу)
    // (краш перед этим уже проверили)
    //  при пересечении первой же трубы посередине по переднему краю возаращаемся c истиной
    if (myMath.Range(birdX + birdW, tubeX+36, tubeX + iterator*2+36)){ 
      return true
    }
  };
  return false
}

const render = () => {

  index += 0.3;
  ctx.clearRect(0, 0, canvas.width, canvas.height - 254)

  // Сдвиг от края
  const shift = (index * SPEED) % canvas.width;
  // Обновили поле
  field.move(index, shift, ctx, img);

  // прорисовали кнопку запуска
  restartButton.move(ctx, img);

  // прорисовали табло
  tablo.move(ctx, img);

  // если горизонтальный интервал межу трубами наступил ставим новую пару труб
  between -= 0.3;
  if (between < 0) {
    // поставили две трубы  c такой длинной чтоб был интервал между ними рамер птицы в высоту(26)*5 + 100  (100-  нижнее пространство где табло)
    // длина трубы
    let h = myMath.getRandom(100, 350);
    const tubeBehind = new TubeBehind(h);
    tubeBehind.setX(canvas.width);
    const tubeBelow = new TubeBelow(canvas.height - 230 - h);
    tubeBelow.setX(canvas.width);
    tubes.push(...[tubeBehind, tubeBelow]);

    // получили новый интервал между трубами по горизонтали
    between = myMath.getRandom(100,150);
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

  // прорисовали птицу
  bird.setStage(index);
  bird.move(ctx, img);

  //Если есть столкновение птицы с препятствием
  if (crush(bird, tubes)) {
    gameStage = 2;
    if (score > best)
      best = score;
    localStorage.setItem('best', best);
    tablo.setBest(best);
    
    const crushBird = new CrushBird(bird,tubes);
    crushBird.crush(index, shift, ctx, img, canvas,field, restartButton,tablo,tubes,bird);

    return;
    // если пролет между трубами
  } else if (flyBetween(bird, tubes, 0.3)) {
    score += 1;
    tablo.setScore(score);
  }

  // прорисовали кнопку запуска
  restartButton.move(ctx, img);

  // прорисовали табло
  tablo.move(ctx, img);

  // прорисовали курсор если нужно
  if (gameStage != 1)
    cursor.move(ctx, img);

  if (gameStage == 1)
    window.requestAnimationFrame(render);
};

const init = () => {
 
  score = 0;
  between = 0;
  tubes = [];
  bird = new Bird(canvas.width);
  tablo = new Tablo();

  ctx.clearRect(0, 0, canvas.width, canvas.height - 254)
  // Обновили поле
  field.move(200, 200, ctx, img);
  // прорисовали кнопку запуска
  restartButton.move(ctx, img);
  // прорисовали табло
  if (!(!localStorage.getItem('best'))) {
    best = localStorage.getItem('best');
  }
  tablo.setBest(best);
  tablo.setScore(score);
  tablo.move(ctx, img);
};

Const.img.onload = init;

// слушаю события на поле  смотря куда кликнут
canvas.addEventListener("click", function (ev) {
  // текущие координаты тычка курсора
  let canvX = ev.clientX - (window.innerWidth - canvas.width) / 2 - 10;
  let canvY = ev.clientY - 90;
  let [birdX, birdY] = bird.getCoord();

  // Если кнопка старт   
  if (22 < canvX && canvX < 100
    && 630 < canvY && canvY < 655) {
    if (gameStage == 0) {
      gameStage = 1;
      render();
    }
    else if (gameStage == 2) {
      gameStage = 0;
      init();
    }

  } // остальное птица вверх
  else if (gameStage == 1) {
    cursor.set(birdX, birdY)
    cursor.move(ctx, img);
    bird.up();
  }
})
