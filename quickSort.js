

/**
 * quick sort using recursion 
 * @param {Array} arr 
 */
function quickSort(arr) {
    if (!Array.isArray(arr)) return [];
    var len = arr.length;
    if (len < 2) return arr;
    var left = [], right = [], mid = arr[0];

    for(var i = 1; i < len; i++) {
        if (arr[i] > mid) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }

    return quickSort(left).concat([mid], quickSort(right));
}


