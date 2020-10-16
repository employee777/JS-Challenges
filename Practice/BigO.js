// single line loops write BigO 

//Constant time: O(1)
//Linear time: O(n)
//Polynomial time: O(n^k)

const Constant = (a, b) => {
      return a+ b;
  }
  
  let arr2=[1,2,3,4,5,6,7,8,9];
  let arr=[1,2,3,4,5,6,7,8,9];
  
  const Linear = (array, array2) => {
     const newArr=[];
      array.forEach(num =>{
        newArr.push(array2);
        });
      return newArr;  
    }
  
   const DDArr = Linear(arr,arr2);
  

const Polynomial = (arrTwoD) => {
  let i = 0;
  let sum = 0;
  while(i< arrTwoD.length){
    console.log(1);
    arrTwoD.forEach(function(number) {
      console.log("----");
        if (number % 2 !== 0){
            sum += number;
            console.log(2);  
        }})
        i++
        console.log("-------");
  }
  console.log(sum);
}
Polynomial(DDArr);