function sumAll(a,b){
    let output=0;   
    let Max = Math.max(a,b);
    let Min = Math.min(a,b);
    for(let i=Min;i<=Max;i++){
        output+=i;
    }
    return output;
}

console.log(`1~100까지의 수의 합 = ${sumAll(100,1)}`);
console.log(`2~40까지의 수의 합 = ${sumAll(40,2)}`);