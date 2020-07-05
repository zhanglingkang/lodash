import concat from "../src/concat";
test('concat', () => {
    expect(concat([], [2, 3])).toEqual([2, 3])
});

test('concat', () => {
    expect(concat([], [2, 3], 4)).toEqual([2, 3, 4])
});

test('concat', () => {
    expect(concat([], [2, 3], 4, [[5]])).toEqual([2, 3, 4, [5]])
});