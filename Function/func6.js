//매개변수의 자료형에 따라 다르게 작동하는 min() 함수
function min(first,...rests){
    //변수 선언
    let output =0;
    let items;

    if(Array.isArray(first)){
        output = first[0];
        items = first;
    }else if(typeof(first) == 'number'){
        output = first;
        items = rests;
    }

    //최솟값 구하기
    for(const item of items){
        if (output>item){
            output = item;
        }
    }
    return output;
}

console.log(`min(배열) : ${min([52,248,621,547,513,5,3])}`);
console.log(`min(숫자,...) : ${min(54,24,35,135,8,5,3)}`);