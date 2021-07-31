import { all, difference, identity, keys, map, pipe, length, toPairs } from 'ramda';

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

const and = (...args) => {
    const validate = (value) => {
        return all(
            identity,
            map((schema) => schema.validate(value), args)
        );
    };
    return { name: 'and', validate };
};

const object = (description) => {
    let _closed = false;

    // list of rules in schema
    const _entries = pipe(
        toPairs,
        map((x) => ({ key: x[0], schema: x[1] }))
    )(description);

    const _validateDescription = (value) => {
        return pipe(
            map((entry) => value.hasOwnProperty(entry.key) && entry.schema.validate(value[entry.key])),
            all(identity)
        )(_entries);
    };

    const _validateClosed = (value) => {
        return !_closed || length(difference(keys(value), keys(description))) === 0;
    };

    const validate = (value) => {
        return isPlainObject(value) && _validateDescription(value) && _validateClosed(value);
    };

    return {
        name: 'object',
        validate,
        get closed() {
            _closed = true;
            return this;
        }
    };
};

function validate(schema, value) {
    return schema.validate(value);
}

export default {
    and,
    greaterThan,
    number,
    object,
    string,
    validate
};
