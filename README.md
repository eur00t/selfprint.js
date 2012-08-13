selfprint.js
=============================

A JavaScript program that prints itself

How it works
------------

The idea is to implement a JS program that prints itself on a runtime. It should use `console.log` command for output.

1. Initially a program of such a kind can have following view: `s = "<text>"; console.log('s = ' + '<"-symbol>' + s + '<"-symbol>' + s)`
   The main trick is that <text> value includes everything after second double quotes symbol: '; console.log(...' etc.
   <"-symbol> – it's representation of doublequotes symbol.  

2. TODO: describe further steps.

        b = '\\u';
        f = function(a) {
            return eval('"' + b + a + '"');
        };
        s = "; console.log('b = ' + f('0027') + f('005c') + f('005c') + 'u' + f('0027') + '; f = function(a) {return eval(' + f('0027') + f('0022') + f('0027') + ' + b + a + ' + f('0027') + f('0022') + f('0027') + ');}; s = ' + f('0022') + s + f('0022') + s);";
        console.log('b = ' + f('0027') + f('005c') + f('005c') + 'u' + f('0027') + '; f = function(a) {return eval(' + f('0027') + f('0022') + f('0027') + ' + b + a + ' + f('0027') + f('0022') + f('0027') + ');}; s = ' + f('0022') + s + f('0022') + s); 
    
