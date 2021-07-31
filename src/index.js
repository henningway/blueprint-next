import { all, identity, map, pipe, toPairs } from 'ramda';

// https://github.com/sindresorhus/is-plain-obj/blob/main/index.js
function isPlainObject(value) {
    if (Object.prototype.toString.call(value) !== '[object Object]') {
        return false;
    }

    const prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.prototype;
}

const string = (() => {
    const validate = (value) => typeof value === 'string';
    return { name: 'string', validate };
})();

const number = (() => {
    const validate = (value) => typeof value === 'number';
    return { name: 'number', validate };
})();

const greaterThan = (right) => {
    const validate = (left) => left > right;
    return { name: 'greaterThan', validate };
};

const object = (description) => {
    // list of rules in schema
    const entries = pipe(
        toPairs,
        map((x) => ({ key: x[0], schema: x[1] }))
    )(description);

    const validate = (value) => {
        if (!isPlainObject(value)) return false;

        return pipe(
            map((entry) => {
                if (!value.hasOwnProperty(entry.key)) return false;
                return entry.schema.validate(value[entry.key]);
            }),
            all(identity)
        )(entries);
    };

    return { name: 'object', validate };
};

function validate(schema, value) {
    return schema.validate(value);
}

export default {
    greaterThan,
    number,
    object,
    string,
    validate
};
