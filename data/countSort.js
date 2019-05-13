/*计数排序，桶排序，基数排序
计数排序 节约时间，浪费空间
循环将数组中的值放入新的hash，值作为键，数量作为值，同时找到最大值
循环hash，从0循环到最大值，如果每一项的值也就是数量不为空，则循环数量，将index传入新的数组
复杂度O(n+max)  可用于n和max比较小的排序，比快排还要快，无法对小数和负数排序
桶排序  节约空间 浪费时间 常用于明确数字范围，最大值不大的情况
已经明确的数字划分范围，按范围初始化hash，循环将数字集合装入hash每一项，然后对每一个数量大于1的项排序，最后输出hash
基数排序 节约空间 常用于最大值比较大的情况
初始化hash有9项，每一项代表一个数字
先将每个数的个位数对应hash每一项放入，然后出桶
将每个数的十位数对应hash每一项放入， 然后出桶
将每个数的百位数对应hash每一项放入， 然后出桶
。。。最大的数有几位就进几次桶，最后输出hash
*/
let arr = [0,2,1,3,56,4,67,3];
let hash = {};
let index=0;
let max = arr[index];
while(index<arr.length){
    var num = arr[index];
    if(hash[num]){
        hash[num]++;
    }else{
        hash[num] = 1;
    }
    if(num>max){
        max = num;
    }
    index++;
}
let index2=0;
let newArr=[];
while (index2 < max+1){
    var count = hash[index2];
    if(count){
        var countIndex=0;
        while(countIndex < count){
            newArr.push(index2);
            countIndex++;
        }
    }
    index2++;
}
console.log(newArr);
