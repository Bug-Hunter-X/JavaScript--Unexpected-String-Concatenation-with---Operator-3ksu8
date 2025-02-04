# JavaScript Bug: Unexpected String Concatenation

This repository demonstrates a subtle bug in JavaScript related to the unexpected behavior of the `+` operator when dealing with numbers and strings.  The loose typing of JavaScript can lead to implicit type coercion, resulting in string concatenation instead of the expected arithmetic addition.

## Bug Description
The primary issue lies in the lack of explicit type checking and the way JavaScript handles the `+` operator. When one operand is a number and the other is a string, JavaScript converts the number to a string and performs string concatenation. This behavior can be unexpected and lead to errors if not carefully handled.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js`.
3. Run the code using a JavaScript interpreter (e.g., Node.js).
4. Observe the unexpected output when a number is added to a string.