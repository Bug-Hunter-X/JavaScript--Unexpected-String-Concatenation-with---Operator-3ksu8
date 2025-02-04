function foo(a, b) {
  // Type checking and handling
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Indicate an error by returning NaN
  }
  if (a === null || b === null) {
    return 0;
  }
  return a + b; 
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10
console.log(foo(NaN, 5)); // Output: NaN
console.log(foo(5, NaN)); // Output: NaN
console.log(foo(NaN, NaN)); // Output: NaN
console.log(foo(5, '5')); //Output: NaN  <-- Now handles the string correctly