
/**
 * 
 * @param {Array} arr 
 */
function mergeSort(arr) {
    var len = arr.length;
    var gap = 1;
    var temp = new Array(len);
    while (gap < len) {
        mergePass(arr, gap, temp);
        gap *= 2;
    }
}

/**
 * 
 * @param {Array} arr 
 * @param {number} gap 
 * @param {Array} temp 
 */
function mergePass(arr, gap, temp) {
    var len = arr.length;
    var i = 0;
    while (i + 2 * gap - 1 < len) {
        merge(arr, i, i + gap - 1, i + 2 * gap - 1, temp);
        i += 2 * gap;
    }

    if (i + gap  - 1 < len) {
        merge(arr, i, i + gap - 1, len - 1, temp);
    }
    return arr;
}


/**
 * 
 * @param {Array} arr 
 * @param {number} left 
 * @param {number} mid 
 * @param {number} right 
 * @param {Array} temp 
 */
function merge(arr, left, mid, right, temp) {
    var i = left;
    var j = mid + 1;
    var k = 0;

    while( i <= mid && j <= right ) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++]
        }
    }

    while( i <= mid ) {
        temp[k++] = arr[i++];
    }
    while( j <= right ) {
        temp[k++] = arr[j++];
    } 

    k = 0;
    while (left <= right) {
        arr[left++] = temp[k++];
    }
}



/**
 * 
 * @param {Array} arr 
 */
function mergeSortRecuresive(arr) {
    var len = arr.length;
    if (len < 2) return arr;

    var mid = Math.floor(arr.length / 2);

    var left = arr.slice(0, mid);
    var right = arr.slice(mid);

    return merge(mergeSortRecuresive(left), mergeSortRecuresive(right));
}

/**
 * 
 * @param {Array} left 
 * @param {Array} right 
 */
function merge(left, right) {
    var result = [];

    while(left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift())
        }
    }

    return result.concat(left, right);
}