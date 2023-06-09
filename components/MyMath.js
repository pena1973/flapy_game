// Служебные функции
/////////////////////////

// Генератор случайных чисел в диапазоне
export function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    // The maximum is inclusive and the minimum is inclusive
}

// Есть ли координата в диапазоне
export function Range(coord, min, max) {
    if (min <=coord &&coord<=max) return true
    else return false
}