let arrMinToMax=[1,1,1,1,2,2,3,3,4];
let arrMixed=[1,2,1,1,3,4,3,1,2]

function MetodoMinToMax(arr){
  let auxArr=[];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]!==arr[i+1]) {
      auxArr.push(arr[i]);
    }
  }
  //document.write(auxArr);
  return((auxArr));
}

<<<<<<< HEAD
document.write(RepeMinToMax(arrMinToMax));
//test
=======
//document.write(MetodoMinToMax(arrMinToMax));

function MetodoIndexOf(arr){
    let auxArr=[];
    for (let i = 0; i < arr.length; i++) {      
      if (auxArr.indexOf(arr[i])===-1){
          auxArr.push(arr[i]);
        }
      }
  return(auxArr);
}
//document.write("<br>",MetodoIndexOf(arrMixed));



function MetodoSet(arr){
  let setArr=new Set(arr);
  setArr=[...setArr];
  return(setArr);
}

//document.write("<br>",MetodoSet(arrMixed));
>>>>>>> AgregandoFuncion2
