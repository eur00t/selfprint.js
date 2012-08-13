selfprint.js
=============================

A JavaScript program that prints itself

How it works
------------

The idea is to implement a JS program that prints itself on a runtime. It should use `console.log` command for output.

1. Initially a program of such a kind can have following view: `s = "<text>"; console.log('s = ' + '<"-symbol>' + s + '<"-symbol>' + s)`
   The main trick is that <text> value includes everything after second double quotes symbol: '; console.log(...' etc.
   We can't use double quotes in <text> value. If we try to escape those, it won't lead us to expected result: <text> string will include escaped values, but printed output wouldn't include characters used in escaping. So we can
   t use doublequote charater at any position after enclosing qoute of s="<text>" and inside <text> (which is the same characters sequense).
   
2. The answer is to use unicode escaped characters in strings, " - \u0022, ' - \u0027, \ - \u005c. This will help us to avoid issue related to nested quotes of the same type. But this don't solve the other problem - output of slash character.

3. Let f() be the function that outputs any unicode character from given code. f('0022') -> ", f('005c') -> \, etc. The f's body uses eval itself to process character code.

        f = function(a) {
            return eval('"\\u' + a + '"');
        };

4. The program will have following view: `f = function(a) {...}; s = <text>; console.log('<f-output> s = ' + f('0022') + s + f('0022') + s')`.
   
        <f-output> = f = function(a) {return eval(' + f('0027') + f('0022') + f('005c') + f('005c') + 'u' + f('0027') + ' + a + ' + f('0027') + f('0022') + f('0027') + ');};
   
5. Finally, <text> value should be specified.
        
        <text> = ; console.log('f = function(a) {return eval(' + f('0027') + f('0022') + f('005c') + f('005c') + 'u' + f('0027') + ' + a + ' + f('0027') + f('0022') + f('0027') + ');}; s = ' + f('0022') + s + f('0022') + s);
   
6. Formated text of program. New line characters should be removed.

        f = function(a) {
            return eval('"\\u' + a + '"');
        };
        s = "; console.log('f = function(a) {return eval(' + f('0027') + f('0022') + f('005c') + f('005c') + 'u' + f('0027') + ' + a + ' + f('0027') + f('0022') + f('0027') + ');}; s = ' + f('0022') + s + f('0022') + s);";
        console.log('f = function(a) {return eval(' + f('0027') + f('0022') + f('005c') + f('005c') + 'u' + f('0027') + ' + a + ' + f('0027') + f('0022') + f('0027') + ');}; s = ' + f('0022') + s + f('0022') + s);
 
    
