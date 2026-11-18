// Dag 3, del 1: Arrayer och objekt i Console.
import { meny } from './data'

// UPPGIFT 1: arrayer
// a) skapa const drycker: string[] = ["Bryggkaffe", "Latte", "Te"];
// b) lägg till "Chai" sist med push. Skriv ut listan och längden.
// c) ta bort sista med pop och skriv ut vad som togs bort.
// d) skriv ut platsen för "Latte" (indexOf) och om "Cola" finns (includes).
// e) skriv ut hela listan som en text: drycker.join(", ")
// TODO
const drycker: string[] = ['Bryggkaffe', 'Latte', 'Te']
drycker.push('Chai')
console.log(drycker, drycker.length)
drycker.pop()
console.log(drycker, drycker.length)
console.log(drycker.indexOf('Latte'))
console.log(drycker.includes('Cola'))
console.log(drycker.join(', '))

// UPPGIFT 2: objekt
// a) skapa const kopp = { namn: "Latte", pris: 45, vegetarisk: true };
// b) skriv ut kopp.namn och kopp["pris"]
// c) ändra priset till 48, och lägg till egenskapen storlek: "stor"
//    TypeScript klagar på storlek. Beskriv objektet med en interface där storlek är valfri (storlek?: string).
// d) skriv ut Object.keys(kopp)
// TODO
interface Kopp {
  namn: string
  pris: number
  vegetarisk: boolean
  storlek?: string
}

const kopp: Kopp = { namn: 'Latte', pris: 45, vegetarisk: true }
console.log(kopp.namn, kopp['pris'])
kopp.pris = 48
kopp.storlek = 'stor'
console.log(Object.keys(kopp))

// UPPGIFT 3: arrayer av objekt
// a) skriv ut hur många rätter menyn har och namnet på den första
// b) loopa med for...of och skriv ut "namn – pris kr" för varje rätt
// c) skriv ut namnet på den sista rätten utan att veta antalet (tips: length - 1)
// TODO
console.log(meny.length)
console.log(meny[0].namn)
/*
 använder [] på menyn för att få rätt index då det inte går att nå resp. del
 del i menyn om man användersig av punkt notation.
 Och jag anväder punktnotation när jag vill komma åt värdet för attributet på
 objektet som jag valt med index.
 */

for (const dish of meny) {
  console.log(`${dish.namn} - ${dish.pris} kr`)
}

console.log(meny[meny.length - 1].namn)
