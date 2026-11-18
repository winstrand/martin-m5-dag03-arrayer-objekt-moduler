import { formateraPris } from './pris'

// Returnerar priset minus studentrabbat på 10%
export function studentPris(pris: number): number {
  return formateraPris(pris * 0.9)
}
