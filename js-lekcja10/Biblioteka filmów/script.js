/*
Biblioteka filmów
Masz tablicę obiektów z filmami (tytuł, gatunek, ocena).
Napisz funkcję, która zwróci nową tablicę zawierającą tylko tytuły filmów o ocenie powyżej 8.
*/

const filmy = [
  { tytul: "Incepcja", gatunek: "Sci-Fi", ocena: 8.8 },
  { tytul: "Matrix", gatunek: "Sci-Fi", ocena: 8.7 },
  { tytul: "Titanic", gatunek: "Dramat", ocena: 7.8 },
  { tytul: "Gladiator", gatunek: "Historyczny", ocena: 8.5 },
  { tytul: "Shrek", gatunek: "Animacja", ocena: 7.9 },
  { tytul: "Forrest Gump", gatunek: "Dramat", ocena: 8.8 },
  { tytul: "Interstellar", gatunek: "Sci-Fi", ocena: 8.6 },
  { tytul: "Joker", gatunek: "Dramat", ocena: 8.5 },
  { tytul: "Avengers: Endgame", gatunek: "Akcja", ocena: 8.4 },
  { tytul: "Król Lew", gatunek: "Animacja", ocena: 8.5 }
];

function filmy8Plus(){
   return filmy.filter(film => film.ocena > 8)
}

console.log(filmy8Plus())