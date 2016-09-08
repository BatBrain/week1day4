var uid = -1;

var id = (function () {
uid += 1
return uid
});

console.log(id()); // 0
console.log(id()); // 1
console.log(id()); // 2
console.log(id()); // 3