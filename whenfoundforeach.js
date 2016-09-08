// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
    arr.forEach(function(item, i) {
        if (item == "Waldo") {
            found(i); // execute callback
        }
    })
}


function actionWhenFound(position) {
    console.log("Found him! At position: " + position);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
