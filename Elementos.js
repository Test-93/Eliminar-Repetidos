let arrMinToMax=[1,1,1,1,2,2,3,3,4];
let arrMixed=[1,2,1,1,3,4,3,1,2]


function repMinToMax(){
  let arr=arrMinToMax;
  let auxArr=[];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]!==arr[i+1]) {
      auxArr.push(arr[i]);
    }
  }
  //document.write(auxArr);
  return((auxArr))
}