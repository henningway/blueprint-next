const { treeUtil } = require('../dist');

test.skip('reduce tree', () => {
    const tree = {
        value: 3,
        children: [{ value: 2 }, { value: 1 }]
    };

    expect(treeUtil.reduce((acc, node) => acc + node.value, 0, tree)).toBe(6);
});

test.skip('map tree', () => {
    const tree = {
        value: 1,
        children: [{ value: 2 }, { value: 3 }]
    };

    expect(treeUtil.map((x) => ({ ...x, value: x.value * 2 }), tree)).toStrictEqual({
        value: 2,
        children: [{ value: 4 }, { value: 6 }]
    });
});
