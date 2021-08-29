const arr = [1, 3, 4, 5, 6, 7, 8, 9, 10];


const search = (list = arr, item = 6) => {
    let start = 0
    let end = list.length
    let middle;
    let found = false
    let position = -1
    while (found === false && start <= end) {
        middle = Math.floor((start + end) / 2);
        if (list[middle] === item) {
            found = true
            position = middle
            return position;
        }
        if (item < list[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position;
}

console.log(search())
