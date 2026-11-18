// Dag 3, del 2: Funktioner som arbetar med menyn. Gör alla tester gröna på tests.html.
// Använd filter, map, find, reduce och sort där det passar.
// Typerna (Ratt, OrderRad) finns i typer.ts. Röda understrykningar tills du skrivit return är normalt.
import { formateraPris } from './pris'
import type { Ratt, OrderRad } from './typer'

// 1. Alla vegetariska rätter (filter). Returnerar en ny array.
export function vegetariskaRatter(meny: Ratt[]): Ratt[] {
  // TODO
  // Skriva en metod som returerar alla vegetarisaka rätter i listan som
  // skickas in. I denna metod är det best att använda sig av filter...
  return meny.filter((ratt) => ratt.vegetarisk === true)
}

// 2. Bara namnen, som en array av text (map). ["Kardemummabulle", ...]
export function rattNamn(meny: Ratt[]): string[] {
  // TODO
  // Skapa en (ny)lista med bara rätt-namnen.
  // Ett utmärkt ställe att använda sig av map-metoden
  return meny.map((ratt) => ratt.namn)
}

// 3. En prislista som text: "Kardemummabulle – 35 kr" (map + formateraPris)
export function prislista(meny: Ratt[]): string[] {
  // TODO
  // Skall göra en lista med alla rätters namn och deras pris.
  // Även i denna metod är det bra att använda sig av map-metoden

  //return meny.map((ratt) => `${ratt.namn} – ${formateraPris(ratt.pris)}`)
  return meny.map((ratt) => `${ratt.namn} - ${formateraPris(ratt.pris)}`)
}

// 4. Hitta en rätt via id (find). Returnerar objektet, eller undefined om det saknas.
export function hittaRatt(meny: Ratt[], id: number): Ratt | undefined {
  // TODO
  return meny.find((ratt) => ratt.id === id)
}

// 5. Den billigaste rätten (reduce). Returnerar objektet. Tom lista ger undefined.
export function billigast(meny: Ratt[]): Ratt | undefined {
  // TODO
  return [...meny].sort((a, b) => a.pris - b.pris)[0]
}

// 6. Sortera efter pris, billigast först. Returnerar en NY array.
//    Den ursprungliga listan får INTE ändras (sort ändrar originalet, så kopiera först).
export function sorteraEfterPris(meny: Ratt[]): Ratt[] {
  // TODO
  return [...meny].sort((a, b) => a.pris - b.pris)
}

// 7. Totalpris för en order. order = [{ id: 1, antal: 2 }, { id: 5, antal: 1 }]
//    Slå upp priset för varje id i menyn. Okända id räknas som 0 kr.
export function totalPris(order: OrderRad[], meny: Ratt[]): number {
  // TODO
  /*
	let summa: number = 0

  for (const rows of order) {
    const ratt = hittaRatt(meny, rows.id)
    summa += (ratt ? ratt.pris : 0) * rows.antal
  }
	return summa
	*/
  // eller om man vill ha en one-liner
  return order.reduce((summa, rad) => {
    const ratt = hittaRatt(meny, rad.id)
    return summa + (ratt ? ratt.pris : 0) * rad.antal
  }, 0)
}

// 8. Antal rätter per kategori som ett objekt: { bakverk: 3, dryck: 2, lunch: 3 } (reduce)
export function perKategori(meny: Ratt[]): Record<string, number> {
  // TODO
  return meny.reduce((summa, ratt) => {
    summa[ratt.kategori] = (summa[ratt.kategori] || 0) + 1
    return summa
  }, {})
}

// 9. En kopia av rätten med nytt pris. Originalet får INTE ändras (spread: { ...ratt }).
export function medNyttPris(ratt: Ratt, nyttPris: number): Ratt {
  // TODO
  return { ...ratt, pris: nyttPris }
}
