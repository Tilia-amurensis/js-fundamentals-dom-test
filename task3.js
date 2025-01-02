// Допишіть скрипт у функцію applyStyles(), який за допомогою засобів DOM створить таку структуру з тегів і їх атрибутів.
//
//   <main class="mainClass check item">
//      <div id="myDiv">
//          <p>First paragraph</p>
//      </div>
//  </main>
//
// Цю розмітку потрібно вставити у існуючий html елемент із класом "create_elements"

function applyStyles() {
  const elem = document.getElementsByClassName("create_elements");
  const main = document.createElement("main");
  main.className = "mainClass check item";
  const div = document.createElement("div");
  div.setAttribute("id", "myDiv");
  const p = document.createElement("p");
  p.innerHTML = "First paragraph";

  document.elem.prepend(main);
  main.prepend(div);
  div.prepend(p);
}

//Не видаляй наступні рядки, вони потрібні для запуску тестів
applyStyles();
module.exports = applyStyles;
