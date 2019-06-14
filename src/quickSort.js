

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

/**
 * using iteration implementing quick sort
 * @param {Array} arr waiting for sorting
 */
function qSort(arr) {
    if (!Array.isArray(arr)) return arr;
    var left = 0, right = 0, mid = 0, len = arr.length, stack = [];
    
    left = 0;
    right = len - 1;

    stack.push(left);
    stack.push(right);

    while (stack.length) {
        right = stack.pop();
        left = stack.pop();

        mid = partion(arr, left, right);

        if (left < mid - 1) {
            stack.push(left);
            stack.push(mid - 1);
        }

        if (right > mid + 1) {
            stack.push(mid + 1);
            stack.push(right);
        }
    }

    return arr;
}

/**
 * sort and find the middle index
 * @param {Array} arr 
 * @param {number} left 
 * @param {number} right 
 */
function partion(arr, left, right) {
    var len = right, i = left, j = left + 1;
    mid = arr[left];
    for (; j <= len; j++) {
        if (arr[j] < mid) {
            i++;
            swap(arr, i, j)
        }
    }

    mid = i;
    if (i <= len) {
        swap(arr, left, mid);
    }
    return mid;
}


/**
 * 
 * @param {Array} arr 
 * @param {number} i 
 * @param {number} j 
 */
function swap (arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

// arr[i] = arr[i] ^ arr[j] ^ arr[i];
//     arr[j] = arr[j] ^ arr[i] ^ arr[j];