function max(first,...rests){
    let output;
    let items;

    if(Array.isArray(first)){
        output = first[0];
        items = first;
    }else if (typeof(first) === 'number'){
        output = first
        items = rests;
    }

    for(const item of items){
        if(output<item){
            output = item;
        }
    }
    return output;
}

console.log(`${max([1,2,3,4])}`);
console.log(`${max(1,2,3,4)}`);