
/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
function findLength(arr1, arr2) {

    var max = 0;
    var len1 = arr1.length;
    var len2 = arr2.length;
    var result = [];

    if (len1 < len2) {
        return findLength(arr2, arr1);
    }


    
}


/**
 * abcde
 * deabc
 * 
 */

 
 function findMax(arr1, arr2) {
    if (arr1.length > arr2.length) return findMax(arr2, arr1);
    var t = 0;
    var len = 0;
    var index = 0;
    var k = 0;

    var _count = 0;

    for (var i = 0; i < arr1.length; i++) {

        for (var j = 0; j < arr2.length; j++) {
            
            if (arr2[j] == arr1[i]) {
                
                k = i;
                t = 1;
                while (arr2[++j] === arr1[++k]) {
                    t++;
                    _count++;
                }
                if (len < t) {
                    index = i;
                    len = t;
                }
                t = 0;
                j--;
            } else {
                _count++;
            }
        }
    }

    console.log('_count: ', _count)
    
    return len > 0 ? {index: index, len: len, str: Array.isArray(arr1) ? arr1.slice(index, index + len).join() : arr1.substr(index, len)} : {len: len};
 }


 