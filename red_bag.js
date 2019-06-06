

// red bag : 100 split 10 the result in 6 - 12
function run(all, len) {
    const bag31 = (avg) => Math.random() * (12 - avg) + avg
    const bag32 = (avg) => Math.random() * (6 - avg) + avg
    const bagf = (avg, base = 12) => Math.random() * (base - avg) + avg

    let arr = new Array(len).fill(0);

    let remain = all;
    let count = len;

    let bag;
    arr = arr.map(i => {
        if (count == 1) {
            return parseFloat(remain.toFixed(2))
        }
        let avg = remain / count ;

        /**
         *  20 2  2* 12 = 24 2 * 6 = 12
         *  26 3 36 > remian > 18
         * */ 

        if (((Math.random() * 10 | 0) %2)) {
            bag = bag31(avg);
        } else {
            bag = bag32(avg);
        }
        bag = parseFloat(bag.toFixed(2));

        let lot = 0.5
        if ((remain - bag > 12 * (count - 1))) {
            while((remain - bag > 12 * (count - 1))) {
                bag = bagf(avg + lot, bag);
                bag = parseFloat(bag.toFixed(2));
                if (bag > 12) { 
                    bag = 12; 
                    
                    if ( (remain - bag) - 12 * (count - 1) > 0 ) {
                        console.log('exit....', (remain - bag) - 12 * (count - 1));

                        process.exit();
                    } 
                }
                lot += 0.5;
            }
        } else {
            while((remain - bag < 6 * (count - 1))) {
                bag = bagf(avg + lot, bag);
                bag = parseFloat(bag.toFixed(2));

                if (bag < 6) bag = 6;
                lot -= 0.5;
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
    let tmp = [];
    for(var i = 0; i < n; i++) {
        tmp = run(100, 10);
        arr.push(tmp);
        tmp.forEach((j) => {
            if (j> 12 || j < 6) {
                console.warn("test failure: ", j);
            }
        })
        // console.log(tmp.reduce((a, b) => a+b, 0));
        // console.log(tmp)
    }
    return arr;
}
let t1 = Date.now();
const NUM = 100000;
test(NUM)
let t2 = Date.now();
console.log("program end!");
console.log(`for ${NUM} use time: `, t2 - t1)