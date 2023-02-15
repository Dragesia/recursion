function mergeSort(arr) {
    if (arr.length == 1) return arr;

    const mid = Math.ceil(arr.length / 2);
    const first = arr.splice(0, mid);   
    const second = arr.splice(-mid);

    const sortedFirst = mergeSort(first);
    const sortedSecond = mergeSort(second);
    let i = 0, j = 0, k = 0;
    result = [];

    while (i < sortedFirst.length && j < sortedSecond.length) {
        if (sortedFirst[i] < sortedSecond[j]) {
            result[k++] = sortedFirst[i++];
        } else {
            result[k++] = sortedSecond[j++];
        }
    }
    while (i < sortedFirst.length) {
        result[k++] = sortedFirst[i++]
    }
    while (j < sortedSecond.length) {
        result[k++] = sortedSecond[j++];
    }

    return result;
}   

const arr = [143, 5234, 232, 763, 445, 6345, 6758, 457];
console.log(mergeSort(arr));
