
/**
 * head = {data: 1, after: ''}
 * head.after = {data: 2, after: ''};
 * head.after.after = {data: 3, after: ''}
 */

 function List(data) {
    this.head = {
        data: data, after: null
    };
    this.current = this.head;
 }

 List.prototype.hasNext = function(node) {
    return node && node.after
 }
 List.prototype.add = function(data) {
     if (!this.head) return this;

     this.current.after = {
         data: data, after: null
     };
     this.current = this.current.after;
     return this;
 }

 List.prototype.reverse = function() {
    var c = this.head;
    var tmp = 1;
    var tmp1;
    var tmp2;
    while (c) {
        if (!tmp) {
            break;
        }
        if (tmp && tmp != 1) {
            tmp1 = tmp;
            tmp2 = tmp.after;
            tmp.after = c;
            c = tmp1;
            tmp = tmp2;
        } else {
            if (!c.after) break;
            tmp = c.after.after;
            c.after.after = c;
            tmp1 = c.after;
            c.after = null;
            c = tmp1;
        }
    }
    this.current = this.head;
    this.head = c;
    return this;
 }

 /**
  * transform to double linked list
  */
 List.prototype.reverseToDouble = function() {
    var c = this.head;
    while (c && c.after) {
        c.after.before = c;
        c = c.after;
    }
    this.current = this.head;
    this.head = c;
    return this;
 }

 List.prototype.print = function() {
    var s = this.head;
    var arr = [];
    while(s) {
        arr.push(s.data);
        s = s && s.after;
    }
    console.log(arr);
 }


/**
 * 数组反转
 * @param {Array} arr
 */
function arrayReverse(arr) {
    if (!Array.isArray(arr)) return arr;
    var len = arr.length;
    var i = 0, j = len - 1, tmp;
    while(i < j) {
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
        i++;
        j--;
    }
    return arr;
}