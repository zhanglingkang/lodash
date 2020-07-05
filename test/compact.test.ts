import compact from '../src/compact'
test('compact test', () => {
    expect(compact([1, 2, 0, 3])).toEqual([1, 2, 3])
});

test('compact test', () => {
    expect(compact([1, 2, '', 0, 3])).toEqual([1, 2, 3])
});

test('compact test', () => {
    expect(compact([1, false, '', 0, 3])).toEqual([1, 3])
});

test('compact test', () => {
    expect(compact([1, false, '', undefined, 3])).toEqual([1, 3])
});

test('compact test', () => {    
    expect(compact([1, false, '', null, 3])).toEqual([1, 3])
});

test('compact test', () => {
    expect(compact([1, false, '', {}, 3])).toEqual([1, {}, 3])
});