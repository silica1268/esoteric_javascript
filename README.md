# esoteric_javascript
It is possible to write any JavaScript program using only the characters + ! \[ \] \( \). So I wrote a JavaScript to JavaScript compiler where you can input any JavaScript program and the compiler will produce a JavaScript program that does the same thing, but using only the previously mentionned characters.

**\*Warning\***: The compiled JavaScript programs might be very large and slow to execute.

0_compiler.js is the first version of the compiler, written in NodeJS
1_compressed_compiler.js is a somewhat minified version of the same compiler, written in normal JavaScript
2_compiled_compiler.js is a self-hosted compiler: the result of compiling 1_compressed_compiler.js with 0_compiler.js
3_html.html is just the html file that links to 2_compiled_compiler.js so that it can be run in a browser
