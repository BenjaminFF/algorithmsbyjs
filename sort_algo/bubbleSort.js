//依次比较两个相邻的元素，越大的元素浮到顶端，稳定算法
//这里从小到大排序

function bubbleSort(arr) {
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
}

const arr=[2,1,3,2];

bubbleSort(arr);

console.log(arr);