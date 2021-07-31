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
    const schema = b.object({ x: b.number, y: b.string });
    expect(b.validate(schema, { x: 1, y: 1 })).toBe(false); // wrong type
    expect(b.validate(schema, { x: 1 })).toBe(false); // missing type
    expect(b.validate(schema, null)).toBe(false); // not an object
    expect(b.validate(schema, { x: 1, y: 'a' })).toBe(true);
});

test('validate open/closed', () => {
    const openSchema = b.object({ x: b.number, y: b.string });
    expect(b.validate(openSchema, { x: 1, y: 'a', z: 1 })).toBe(true);

    const closedSchema = b.object({ x: b.number, y: b.string }).closed;
    expect(b.validate(closedSchema, { x: 1, y: 'a', z: 1 })).toBe(false);
});

test('validate with and', () => {
    expect(b.validate(b.and(b.number, b.greaterThan(1)), 'a')).toBe(false);
    expect(b.validate(b.and(b.number, b.greaterThan(1)), 1)).toBe(false);
    expect(b.validate(b.and(b.number, b.greaterThan(1)), 2)).toBe(true);
});

test('explain', () => {
    expect(b.explain(b.number, 1)).toBe(null);

    expect(b.explain(b.number, '1')).toStrictEqual({
        schema: b.number,
        value: '1',
        errors: ['Type mismatch']
    });
});

test.skip('explain nested', () => {
    expect(b.explain(b.object({ x: b.number }), { x: '1' })).toStrictEqual({
        schema: b.object({ x: b.string }),
        value: { x: '1' },
        errors: ['Type mismatch']
    });
});
