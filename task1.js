// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів.
// За допомогою засобів Dom доступитись до усіх елементів списку та отримати текст в черговості
// перший елемент - змінна firstEl
// останній елемент - змінна lastEl
// другий елемент - змінна secondEl
// четвертний елемент - змінна fourthEl
// третій елемент - змінна thirdEl


//Твій код має бути тут
const list = document.body.firstElementChild;
const firstEl = list.children[0].textContent;
const lastEl = list.children[4].textContent;
const secondtEl = list.children[1].textContent;
const fourthEl = list.children[3].textContent;
const thirdtEl = list.children[2].textContent;
//Не видаляй наступні рядки, вони потрібні для запуску тестів
module.exports = {
  firstEl,
  lastEl,
  secondtEl,
  fourthEl,
  thirdtEl,
};
