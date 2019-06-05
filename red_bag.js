

// red bag : 100 split 10 the result in 6 - 12
function run() {
    const bag31 = (avg) => Math.random() * (12 - avg) + avg
    const bag32 = (avg) => Math.random() * (6 - avg) + avg

    let arr = new Array(10).fill(0);

    let remain = 100;
    let count = 10;

    let bag;
    arr = arr.map(i => {
        if (count == 1) {
            return remain;
        }
        let avg = remain / count ;
        if (avg > 10) {
            bag = bag31(avg);
        } else {
            bag = bag32(avg);
            while(remain - bag > 12 * (count - 1)) {
                bag = bag32(avg);
            }
        }
        remain = remain - bag;
        count--;
        return bag;
    })
    // console.log(arr);
    return arr;
}
function test(n = 10) {
    let arr = [];
    for(var i = 0; i < n; i++) {
        arr.push(run());
    }
    arr.forEach(k => {
        k.forEach((j) => {
            if (j> 12 || j < 6) {
                console.warn("test failure: ", j, k);
            }
        })
    })
    return arr;
}
let t1 = Date.now();
test(5000000)
let t2 = Date.now();
console.log("program end!");
console.log('for 1000000 use time: ', t2 - t1)