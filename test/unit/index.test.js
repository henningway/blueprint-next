const b = require('../../dist');

test('validate number', () => {
    expect(b.validate(b.number, '1')).toBe(false);
    expect(b.validate(b.number, 1)).toBe(true);
});

test('validate string', () => {
    expect(b.validate(b.string, 1)).toBe(false);
    expect(b.validate(b.string, '1')).toBe(true);
});

test('validate greater than', () => {
    expect(b.validate(b.greaterThan(1), 0)).toBe(false);
    expect(b.validate(b.greaterThan(1), 2)).toBe(true);
});

test('validate object', () => {
    expect(b.validate(b.object({ x: b.number, y: b.string }), { x: 1, y: 1 })).toBe(false); // wrong type
    expect(b.validate(b.object({ x: b.number, y: b.string }), { x: 1 })).toBe(false); // missing type
    expect(b.validate(b.object({ x: b.number, y: b.string }), null)).toBe(false); // not an object
    expect(b.validate(b.object({ x: b.number, y: b.string }), { x: 1, y: 'a' })).toBe(true);
});

test('validate with and', () => {
    expect(b.validate(b.and(b.number, b.greaterThan(1)), 'a')).toBe(false);
    expect(b.validate(b.and(b.number, b.greaterThan(1)), 1)).toBe(false);
    expect(b.validate(b.and(b.number, b.greaterThan(1)), 2)).toBe(true);
});
