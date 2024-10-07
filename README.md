# CALCULATOR-project
TestCase
Here are a few corner cases for your `calculator` function:

1. **Empty input**:
   - Input: `""` (empty string)
   - Expected behavior: It should catch the error and display `"Error"`.

2. **Multiple operators at the end**:
   - Input: `"5++"` or `"3*-"` 
   - Expected behavior: It should catch the invalid expression and display `"Error"`.

3. **Division by zero**:
   - Input: `"5/0"`
   - Expected behavior: `eval` will return `Infinity`, but this might be unexpected, so you may want to handle this case and display `"Error"` instead.

4. **Non-numeric characters**:
   - Input: `"abc+123"`
   - Expected behavior: It should catch the error and display `"Error"`.

5. **Invalid decimal placement**:
   - Input: `"5..3+2"`
   - Expected behavior: It should catch the error and display `"Error"`.

To handle these cases more robustly, consider improving validation before using `eval`, such as checking the input for valid mathematical expressions.