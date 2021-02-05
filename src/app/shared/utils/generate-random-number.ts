export function generateRandomNumber(min = 0, max = 9): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
