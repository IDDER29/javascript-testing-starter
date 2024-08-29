// Lesson: Writing your first tests
export function max(a, b) {
  if (a > b) return a;
  else if (b > a) return b;
  return a;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}

export function calculateAverage(arr) {
  if (arr.length === 0) return NaN;
  return arr.reduce((a, b) => a + b) / arr.length;
}


export function calculateFactorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('Input must be a non-negative integer');
  }
  if (n === 0 || n === 1) return 1;
  return n * calculateFactorial(n - 1);
}