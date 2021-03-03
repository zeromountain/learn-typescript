// parameter: type, return type
function add(a: number, b: number): number {
  return a + b;
}

var ts_result = add(5, 10);
// number 타입의 메소드를 자동완성으로 사용할 수 있다
ts_result.toLocaleString();
add(10, 20); // 30
add("10", "20") // 오류