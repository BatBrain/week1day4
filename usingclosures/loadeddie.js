var loadedDie = (function() {
    var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    var rollNum = -1;
    //debugger;
    return function() {
        rollNum += 1;
        return list[rollNum];
    };
})();

console.log(loadedDie()); // 5
console.log(loadedDie()); // 4
console.log(loadedDie()); // 6
