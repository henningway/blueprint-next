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
