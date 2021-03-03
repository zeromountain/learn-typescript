// @ts-check

/**
 * jsDOC
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */
function sum(a, b) {
  return a + b;
}
// ts와 다르게 타입 오류가 발생하지 않는다.
// ts-check 사용 시 오류가 발생하게 할 수 있음
sum(10, "20");
var result = sum(5, 10);
result.toLocaleString();
