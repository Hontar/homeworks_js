function sortArray(sourseArray){
    function __valueOf(__var){
        if (Number(__var + 1)) return Number(__var)
        function converToNumber (item){
            return Number(item + 1) ? 
            Number(item) : String(item).Length > 0 ? 
            String(item).charCodeAt(0) : 0
        }
        function convertToArray(obj){
            var res = [0]
            for (var x in obj) 
                res.push(convertToNumber(obj[x]))
            return res
        }
        var res = convertToArray(__var)
        return eval(res.join("+")) / res.length
    }
    var resArray = [sourseArray.shift()]
    while (sourseArray.length > 0){
        var elem = sourseArray.shift()
        for (var x of resArray){
            if (__valueOf(elem) < __valueOf(x))
                resArray.splice(resArray.indexOf(x), 0, elem)
                elem = null
                break
        }
        elem ? resArray.push(elem) : null
    }
    return resArray
}

sortArray([
    [5,8,2],
    ["5",4,1],
    {},
    [],
    8,
    "google",
    false,
    {a: 1, b: 0, c: 1},
    ["google", 0, 1],
    {x: null, y: indefined, c: NaN}
])

sortArray([
    {name: "user", age: 25},
    {name: "", age: 40},
    {name: "Petya", age: null},
    {name: "Vasya", age: 30},
])

// function sortArray(arr){
//     for (var num of arr){
//         var elem = arr[num]
//         if(Array.isArray(elem)){
//             elem.valueOf = function(){
//                 var result = 0
//                 for (var x of elem){
//                     result += Number(x) ? x : null
//                 }
//                 return result / elem.length
//             } 
//         } 
//     }  
//     var resArr = [arr.pop()]
//     while(arr.length > 0){
//         var elem = arr.pop()
//         for (var x of resArr){
//             if(elem < x){
//                 resArr.splice(resArr.indexOf(x), 0, elem)
//                 elem = null
//             }  
//         }
//         x ? resArr.push(x) : null
//     }
//     return resArr
// }

// sortArray(arr)