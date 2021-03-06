//每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，
// 然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
// 以此类推，直到全部待排序的数据元素排完。 选择排序是不稳定的排序方法。

//这里从小到大排序

function selectionSort(arr) {
    for(let i=0;i<arr.length;i++){
        let min=arr[i];
        for(let j=i+1;j<arr.length;j++){
            if(min>arr[j]){
                let temp=arr[j];
                arr[j]=min;
                min=temp;
            }
        }
        arr[i]=min;
    }
}

const arr=[0];

selectionSort(arr);

console.log(arr);