//搜索过程从数组的中间元素开始，
// 如果中间元素正好是要查找的元素，则搜索过程结束；
// 如果某一特定元素大于或者小于中间元素，则在数组大于或小于中间元素的那一半中查找，而且跟开始一样从中间元素开始比较。
// 如果在某一步骤数组为空，则代表找不到。

function binarySearch(searchEL,arr) {
    let start=0,end=arr.length-1;
    while (start<=end){
        let mid=parseInt((start+end)/2);       //JS不用考虑溢位
        if(searchEL>arr[mid]){
            start=start+1;
        }else if(searchEL<arr[mid]){
            end=end-1;
        }else {
            return searchEL + "在第"+ mid + "位";
        }
    }
    return "no such an el";
}

const arr=[-4,-2,-1,0,5];

console.log(arr);

console.log(binarySearch(0,arr));

