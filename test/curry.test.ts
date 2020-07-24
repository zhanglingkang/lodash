import curry from "../src/curry";

test("curry", () => {
  let add = curry((num1, num2) => {
    return num1 + num2;
  });
  expect(add(1)(2)).toEqual(3);
});

test("curry", () => {
  let add = curry((num1, num2) => {
    return num1 + num2;
  });
  expect(add(1, 3)).toEqual(4);
});

test("curry", () => {
  let add = curry((num1, num2) => {
    return num1 + num2;
  });
  add(1);
  expect(add(1, 3)).toBe(4);
});

test("curry", () => {
  let add = curry((num1, num2) => {
    return num1 + num2;
  });
  let addOne = add(1);
  expect(addOne(3)).toBe(4);
  expect(addOne(4)).toBe(5);
});
