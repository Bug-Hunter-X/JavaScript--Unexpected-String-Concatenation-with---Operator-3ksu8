function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; 
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10

// Uncommon bug: Unexpected behavior with NaN
console.log(foo(NaN, 5)); // Output: NaN  <-- This is expected
console.log(foo(5, NaN)); // Output: NaN  <-- This is also expected
console.log(foo(NaN, NaN)); // Output: NaN <-- This is expected

// The unexpected part is the following
console.log(foo(5, '5')); //Output: 55  <-- Unexpected String concatenation instead of type error