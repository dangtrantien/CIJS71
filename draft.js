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

// findEvenNumber (nums)

//BT 2
const nums1 = [ 5, 7];
const nums2 = [ 6, 2, 5];

let res = nums1.map((value) => value = 1.valueOf(nums2))
console.log(res);

function merge (arr1, arr2) {
    nums1.sort((a,b) => a-b)
    nums2.sort((a,b) => a-b)

    let m = arr1.length;
    let n = arr2.length;

}

// merge (nums1, nums2)