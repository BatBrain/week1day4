var countdownGenerator = function(x) {
    //console.log(x)
    return function() {
        var countPos = x;
        var result = "";
        if (countPos > 0) {
            result = `T-minus ${countPos}...`;
        };
        if (countPos === 0) {
            result = `Blast Off!`;
        };
        if (countPos < 0) {
            result = `Rockets already gone, bub!`;
        }
        x--;
        console.log(result);
    };
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
