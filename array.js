//creation of array:
var arr=[10,20,30,40,50]  //Homogeneous type of data
console.log(arr)
console.log(typeof(arr))


var arr1=[10,true,'Kodnest',null] //Heterogeneous type of data
console.log(arr1)
console.log(typeof(arr1))


//Replace the 0th index value with 100 in the given array-arr1
arr1[0]=100
console.log(arr1)

//push()-Appends new elements at the end of an array and return the new length of an array
arr1.push("Hello")
console.log(arr1)

//unshift()-Appends new elements at 0th index(at starting of an array) and return new length of an array
arr1.unshift("Start")
console.log(arr1)

//pop()-Remove the last element of an array
arr1.pop()
console.log(arr1)

//shift()-Remove first element from an array and return it,
arr1.shift()
console.log(arr1)

//splice()- Used to add or delete the element from an array.
//(used to overwrites the original array) 
   arr1=[100,200,300,400,500]
   console.log(arr1)
   arr1.splice(2,2)
   console.log(arr1) //[100, 200, 500]

   arr1.splice(2,0,'k',true,null,false)
   console.log(arr1) // [100, 200, 'k', true, null, false, 500]

   arr1.splice(1,2,1000,2000)
   console.log(arr1) // [100, 1000, 2000, true, null, false, 500]

   var arr3=[10,20,30,40,50,60]
   console.log(arr3)
   arr3.splice(3,1,'k',true,300,null)
   console.log(arr3)

   var arr4=[10,20,30,40]
   console.log(arr4)
   arr4.splice(3,0,'k',true,300,null)
   console.log(arr4)

   