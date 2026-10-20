// 문제1. 두 수 중 큰 수을 반환하는 함수(a,b) 를 함수 선언문으로 만드세요
function max(a,b) {
// if (a<b) { // return a;  // } else { // return b; // } return > a b? a: b' }    console.log(max(3,8));
//TODO : 답 작성
console.log(max(3,8));

// 문제2. 섭씨 온도를 화씨로 바꾸는 함수 toFahrenheit 화샇표 함수로 만드세요.
// 화씨 = 섭씨 *9 /5 + 32

var toFahreheit = c => c * 9 / 5 + 32;
console.log(toFahremheit(30));

//문제3 . 점수를 받아 60점 이상이면"합격", 아니면 "불합격"을 반환하는 참수 표현식 chevkPass

var checkPass = function(n) {}
console.log(toFahremheit(score) {
return score >= 60? "합격": "불합격"

// 문제4. 인사말 항수 we lcome(name)을 함수 선연분으로 만드세요. 이름을 넘기지 않으면 "고객"을 기본값으로 씁니다

functiown welconme(name="고객") {
 return name + "님, 환영합니다!"; }
console.log(welcome() );  // 고객님, 환영합닌다!
console.log(welcome("홍길동"))  // 홍길동님, 환영합니다

// 문제5. 아래 코드를 실행하면 어떤 결과가 나올지 예상해보세요.
console.log(hello)();
var hello = function() {return "h;"   };

//var hello  변수 선언부가 호이스팅에 의해서 메모리 영역이 관련되었기 떄문에, console.log(hello)는 문제가 없음
// heool () 소괗호를 통해 해당 변수를 실행하는게 문제 -> 오류 (hello에 있는 값이 아니야!)