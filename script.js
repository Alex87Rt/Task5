"use strict";
//1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
//Доска должна быть верно разлинована на черные и белые ячейки. Строки должны
//нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.


var chess = {
    game: document.getElementById('game'),
  
    border() {
      var strings = [0, 1, 2, 3, 4, 5, 6, 7, 8]; //строки
      var columns = [0, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; //колонки
  
      for (let i = 0; i < 9; i++) {
        var tr = document.createElement('tr');
        this.game.appendChild(tr);
  
      for (let j = 0; j < 9; j++) {
        var td = document.createElement('td');
        tr.appendChild(td);
  
      if (strings[i] == 0 && columns[j] !== 0) {
          td.innerHTML = columns[j];
        } else if (columns[j] == 0 && strings[i] !== 0) {
          td.innerHTML = strings[i].toString();
        }
      if (this.borderBlack(i, j)) {
         td.style.backgroundColor = "black";
        }
      }
      }
    },
  
    borderBlack(i, j) {
     if (i == 0 || j == 0) {
     return false;
     }
     return (i + j) % 2 == 1;
    },
  };
  
  chess.border();