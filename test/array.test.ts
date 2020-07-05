import chunk from '../src/chunk';

test('chunk test', () => {
    expect(chunk(['1', '2'])).toEqual([['1'], ['2']]);
});

test('chunk test', () => {
    expect(chunk(['1', '2'], 2)).toEqual([['1', '2']]);
});

test('chunk test', () => {
    expect(chunk(['1', '2', '3'], 2)).toEqual([['1', '2'], ['3']]);
});

// test('chunk test', () => {   
//     expect(chunk(null, 2)).toEqual([['1', '2'], ['3']]);
// });  