function Min(array){
    let output = array[0];
    for(const item of array){
        //현재 output보다 더 작은 item이 있다면
        if(output>item){
            output = item;
        }
    }
    return output
}

const Array = [4,85,42,3,1,15,875];
console.log(`${Array}의 최솟값은 ${Min(Array)}입니다.`);