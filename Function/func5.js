//나머지 매개변수를 사용한 함수 만들기
function Min(...items){
    let output = items[0];
    for(const item of items){
        if(output > item){
            output = item
        }
    }
    return output;
}

console.log('min(5,486,421,54,8,3,1,2,568)');
console.log(` = ${Min(5,486,421,54,8,3,1,2,568)}`);