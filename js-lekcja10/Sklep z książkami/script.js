/*
Sklep z książkami
Masz tablicę obiektów, gdzie każdy obiekt to książka (tytuł, autor, rokWydania, cena).
Napisz funkcję, która przyjmuje rok 1990 i zwraca wszystkie książki wydane po tym roku.
*/
const ksiazki = [
  { tytul: "Wiedźmin: Ostatnie życzenie", autor: "Andrzej Sapkowski", rokWydania: 1993, cena: 35 },
  { tytul: "Pan Tadeusz", autor: "Adam Mickiewicz", rokWydania: 1834, cena: 25 },
  { tytul: "Lalka", autor: "Bolesław Prus", rokWydania: 1890, cena: 30 },
  { tytul: "Harry Potter i Kamień Filozoficzny", autor: "J.K. Rowling", rokWydania: 1997, cena: 40 },
  { tytul: "Hobbit", autor: "J.R.R. Tolkien", rokWydania: 1937, cena: 45 },
  { tytul: "Metro 2033", autor: "Dmitry Glukhovsky", rokWydania: 2005, cena: 38 },
  { tytul: "Gra o tron", autor: "George R.R. Martin", rokWydania: 1996, cena: 50 },
  { tytul: "Duma i uprzedzenie", autor: "Jane Austen", rokWydania: 1813, cena: 28 },
  { tytul: "Kod Leonarda da Vinci", autor: "Dan Brown", rokWydania: 2003, cena: 42 },
  { tytul: "Zbrodnia i kara", autor: "Fiodor Dostojewski", rokWydania: 1866, cena: 32 }
];

function znajdzksiaska(rok){
   return ksiazki.filter(ksiazka => ksiazki.rokWydania > rok);
};

console.log('Ksiazki wydane po roku 1990:')
console.log(znajdzksiaska(1990))