// Допишіть функцію applyStyles, щоб простилізувати елементи як показано на картинці task2.png

function applyStyles() {
     const title =  document.getElementById("title");
     const myDiv = document.getElementById("myDiv");
     const myList = document.getElementById("myList");
     const lastEl = document.querySelector("div > span")
     title.style.backgroundColor = 'lightgreen';
     myDiv.children[0].style.fontWeight = '700';
     myDiv.children[1].style.color = 'red';
     myDiv.children[2].style.textDecoration = 'underline';
     myDiv.children[3].style.fontStyle = 'italic';
     const text = Array.from(myList.children)
     .map(item => item.textContent)
     .join('');
     myList.textContent = text;
     lastEl.style.display = 'none';
     myList.style.listStyle = 'none';
     myList.style.display = 'flex';



}


//Не видаляй наступні рядки, вони потрібні для запуску тестів
applyStyles()
module.exports = applyStyles;
