f = function(a) {return eval('"\\u' + a + '"'); }; s = "; console.log('f = function(a) {return eval(' + f('0027') + f('0022') + f('005c') + f('005c') + 'u' + f('0027') + ' + a + ' + f('0027') + f('0022') + f('0027') + ');}; s = ' + f('0022') + s + f('0022') + s);"; console.log('f = function(a) {return eval(' + f('0027') + f('0022') + f('005c') + f('005c') + 'u' + f('0027') + ' + a + ' + f('0027') + f('0022') + f('0027') + ');}; s = ' + f('0022') + s + f('0022') + s); 