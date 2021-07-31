import { difference, filter, isEmpty, keys, length, map, pipe, toPairs } from 'ramda';

// https://github.com/sindresorhus/is-plain-obj/blob/main/index.js
function isPlainObject(value) {
    if (Object.prototype.toString.call(value) !== '[object Object]') {
        return false;
    }

    const prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.prototype;
}

const filterEmpty = filter((x) => !isEmpty(x));

const schema = (s) => {
    return s;
};

const string = schema({
    name: 'string',
    validate: (value) => (typeof value === 'string' ? [] : ['Type mismatch'])
});

const number = schema({
    name: 'number',
    validate: (value) => (typeof value === 'number' ? [] : ['Type mismatch'])
});

const greaterThan = (right) => {
    return schema({
        name: 'greaterThan',
        validate: (left) => (left > right ? [] : ['Type mismatch'])
    });
};

const and = (...args) => {
    const validate = (value) => map((schema) => schema.validate(value), args);
    return schema({ name: 'and', validate });
};

const object = (description) => {
    let _closed = false;

    // list of rules in schema
    const _entries = pipe(
        toPairs,
        map((x) => ({ key: x[0], schema: x[1] }))
    )(description);

    const _validateIsPlainObject = (value) => (isPlainObject(value) ? [] : ['Not an object']);

    const _validateKeyPresence = (value) => {
        return map((entry) => {
            return value.hasOwnProperty(entry.key) ? [] : ['Missing key: ' + entry.key];
        })(_entries);
    };

    const _validateDescription = (value) => map((entry) => entry.schema.validate(value[entry.key]))(_entries);

    const _validateClosed = (value) => {
        if (!_closed) return [];

        const diff = difference(keys(value), keys(description));

        if (length(diff) > 0) return map((key) => 'Extra key in closed schema: ' + key, diff);

        return [];
    };

    const validate = (value) => {
        return !isPlainObject(value)
            ? _validateIsPlainObject(value)
            : [..._validateKeyPresence(value), ..._validateDescription(value), ..._validateClosed(value)];
    };

    return schema({
        name: 'object',
        validate,
        get closed() {
            _closed = true;
            return this;
        }
    });
};

function validator(schema) {
    return {
        validate: (value) => {
            const errors = filterEmpty(schema.validate(value));

            return errors.length === 0;
        },
        explain: (value) => {
            const errors = filterEmpty(schema.validate(value));

            return errors.length > 0 ? { schema, value, errors } : null;
        }
    };
}

function validate(schema, value) {
    return validator(schema).validate(value);
}

function explain(schema, value) {
    return validator(schema).explain(value);
}

export default {
    and,
    explain,
    greaterThan,
    number,
    object,
    string,
    validate
};
