b = '\\u'; f = function(a) {return eval('"' + b + a + '"');}; s = "; c = 'b = ' + f('0027') + f('005c') + f('005c') + 'u' + f('0027') + '; f = function(a) {return eval(' + f('0027') + f('0022') + f('0027') + ' + b + a + ' + f('0027') + f('0022') + f('0027') + ');}; s = ' + f('0022') + s + f('0022') + s;"; c = 'b = ' + f('0027') + f('005c') + f('005c') + 'u' + f('0027') + '; f = function(a) {return eval(' + f('0027') + f('0022') + f('0027') + ' + b + a + ' + f('0027') + f('0022') + f('0027') + ');}; s = ' + f('0022') + s + f('0022') + s;