module.exports = function reverse (n) {
    let arr = n.toString().split('');
    let newArr=[];
    for (let i=arr.length-1; i>=0 ; i--) {
        if (arr[i] == '-') 
            continue
        else 
            newArr.push(arr[i]);
    }
    let res = +newArr.join('');
    return res
}
