import { curry } from 'ramda';

function hasChildren(node) {
    return typeof node === 'object' && typeof node.children !== 'undefined' && node.children.length > 0;
}

export const treeUtil = {
    reduce: curry(function reduce(reducerFn, initial, node) {
        const acc = reducerFn(initial, node);
        if (!hasChildren(node)) return acc;
        return node.children.reduce(treeUtil.reduce(reducerFn), acc);
    }),
    map: curry(function map(mapFn, node) {
        const newNode = mapFn(node);
        if (!hasChildren(node)) return newNode;
        newNode.children = node.children.map(treeUtil.map(mapFn));
        return newNode;
    })
};
