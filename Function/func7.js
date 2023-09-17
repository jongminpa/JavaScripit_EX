//기본 매개변수의 활용
function earnings(name, wage=8590, hours=40){
    console.log(`#${name} 님의 시급 정보`);
    console.log(`- 시급 : ${wage}원`);
    console.log(`- 근무시간 : ${hours}시간`);
    console.log(`- 급여 : ${wage*hours}원`);
    console.log('');
}

earnings('구름');

//최저 시급 만원
earnings('별',10000);

//시급 만원으로 52시간 일한 경우
earnings('하늘',10000,52);