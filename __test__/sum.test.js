import { sum } from "../src/utils/sum";

test("Sum function should caculate the sum of two numbers", () => {
  const result = sum(3, 3);

  //Assertion
  expect(result).toBe(6);
});
