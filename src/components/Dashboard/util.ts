export function calculateAverageNumber(numbers: number[]): number {
  return Math.round(numbers.reduce((acc: number, value: number) => acc + value, 0) / numbers.length);
}
