// <-- 코딩 할때 추가 설명을 쓰고 싶으면, 앞에 이렇게 slash 두번 해주던가 
/* 여러줄일때는 
요렇게 감싸주면
전체가 다 주석 처리 됨 */

// 콘솔에 메세지 출력 할때는 요렇게.. 디버깅 할때 유용하죠.
console.log('테스팅!! 테스팅!! 하나둘셋!!!');
console.log('지금 시각은 ' + Date());

var x = 1; // 변수 지정은 요렇게
var y = 2, z = 3; // 변수 여러개 한꺼번에 지정할때는 콤마(,)를 써요.

console.log('x+y+z=' + (x+y+z));

// 숫자는 그냥 숫자. Integer 나 Float이 구분되지는 않아요.
var num = 123.99;
var str = '텍스트는 싱글 쿼트로 감싸주던가'; // ' <-- 싱글
var str2 = "이렇게 더블 쿼트로 감싸줘요"; // " <-- 더블


// function 만들기
function display(word) {
    console.log(word);
}

// function 부르기
display("안녕하세요");

// 특이한 함수 사용법. C 에서 쓰는 펑션 포인터 같이
// 함수 이름을 파라미터로 쓸수 있어요.
function execute(someFunction, value) {
    someFunction(value);
}

// 이렇게 하면 display("안녕하세요"); 가 실행 되죠.
execute(display, "안녕하세요");

// 아니면 아예 이런식으로 함수를 통째로 파라미터 안에서 지정할 수도 있어요.
execute(function(word){ console.log(word) }, "안녕하세요");