// single line loops write BigO 

//Constant time: O(1)
//Linear time: O(n)
//Polynomial time: O(n^k)

const Constant = (a, b) => {
    console.log(a+ b);
      return a+ b;
  }
  
  Constant(2,4);
  
  let arr=[1,2,3,4,5,6,7,8,9];
  
  const Linear = (array) => {
     const newArr =[];
      array.forEach(a => {if(a % 2=== 1){newArr.push(a)}});
      console.log(newArr);
      return newArr;
  }
  
  Linear(arr);
  
  let arr2=[1,2,3,4,5,6,7,8,9];
  let arr3=[1,2,3,4,5,6,7,8,9];
  
  const Polynomial = (array, array2) => {
     const newObj=[];
      array.forEach(a =>{newObj.push(newObj.map(a =>a.push(array2)) )});
      console.log(newObj);
      return newObj;
    }
  
    Polynomial(arr3,arr2);
  
