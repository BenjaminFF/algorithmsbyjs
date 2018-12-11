//插入排序的基本操作就是将一个数据插入到已经排好序的有序数据中，
// 从而得到一个新的、个数加一的有序数据，算法适用于少量数据的排序，
// 时间复杂度为O(n^2)。是稳定的排序方法。
//这里以从小到大排序为例
function insertionSort(arr) {
    for(let i=0;i<arr.length;i++){
        let insertionEL=arr[i];
        let j=i-1
        for(;j>=0;j--){
            if(insertionEL<arr[j]){        //insertionEL小于arr[j],就让arr[j]向后挪动
                arr[j+1]=arr[j];
            }else {
                break;
            }
        }
        arr[j+1]=insertionEL;
    }
}

const arr=[0,-1,2,-2,1,5,-5];

insertionSort(arr);

console.log(arr);