//Control de blucles

let lisNum = [1, 2 ,3, 4, 5, 6, 7, 8, 9];

for(let i = 0; i < lisNum.length; i++){
    //Exclucion  de un valor
    if(lisNum[i] === 5){
        continue;
    }
    console.log(lisNum[i]);

    //Interrumpir un blucle
    if (lisNum[i] > 5){
        break;
    }
}