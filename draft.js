//BT 1
const nums = [ 12, 345, 2, 6, 7896 ];

function findEvenNumber (arr) {
    let count = 0;

    for (let num of arr) {
        let digit = 0;

        //ĐẾM SỐ LƯỢNG CỦA MỖI PHẦN TỬ
        while (num > 0) {
            digit++;
            num = parseInt(num / 10);
        }

        //COUNT EVEN NUMBER OF DIGIT
        if (digit % 2 === 0) {
            count++;
            console.log(count);
        }
    }

    return count;
}

findEvenNumber (nums)

//BT 2