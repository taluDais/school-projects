/*
Magazyn produktów
Masz tablicę obiektów z produktami (nazwa, kategoria, ilość, cena).
Napisz funkcję, która zwróci sumę wartości magazynu (ilość × cena dla wszystkich produktów).
*/

const produkty = [
  { nazwa: "Laptop", kategoria: "Elektronika", ilosc: 10, cena: 3000 },
  { nazwa: "Telefon", kategoria: "Elektronika", ilosc: 15, cena: 2000 },
  { nazwa: "Krzesło", kategoria: "Meble", ilosc: 25, cena: 150 },
  { nazwa: "Biurko", kategoria: "Meble", ilosc: 8, cena: 600 },
  { nazwa: "Mysz", kategoria: "Elektronika", ilosc: 30, cena: 100 },
  { nazwa: "Monitor", kategoria: "Elektronika", ilosc: 12, cena: 800 },
  { nazwa: "Książka", kategoria: "Kultura", ilosc: 50, cena: 40 },
  { nazwa: "Gra planszowa", kategoria: "Rozrywka", ilosc: 20, cena: 120 },
  { nazwa: "Słuchawki", kategoria: "Elektronika", ilosc: 18, cena: 250 },
  { nazwa: "Plecak", kategoria: "Odzież", ilosc: 10, cena: 180 }
];
let sumaCen = 0;
for (let i=0; i < produkty.length; i++) {
   sumaCen += produkty[i].cena * produkty[i].ilosc
};
console.log(`laczna wartosc magazynu wynosi ${sumaCen}zl`)