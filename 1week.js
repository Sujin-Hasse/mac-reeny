  // 조건문
  // 불러주는 정수 두개가 입력으로 들어오면 큰수 - 작은수의 값을 출력하세요
    const a = prompt("첫번째 정수를 입력해주세요");  //입력 
    const b = prompt("두번째 정수를 입력해주세요");  //입력
    
    if (Number(a)>Number(b)){
      alert(Number(a) - Number(b)); 
    }
    else if (Number(a)<Number(b)){
      alert(Number(b) - Number(a));
    } 

    // 반복문
    // 2중 반복문
  for(let i = 0; i<3; i++) { // 조건문이 참이면 반복
	  console.log("Hello Likelion");
	  for(let j = 0; j<3; j++) {
		  console.log("Hello 2Week");
	}
}