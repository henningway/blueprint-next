import { difference, filter, isEmpty, keys, length, map, pipe, toPairs } from 'ramda';

// https://github.com/sindresorhus/is-plain-obj/blob/main/index.js
function isPlainObject(value: any): boolean {
    if (Object.prototype.toString.call(value) !== '[object Object]') {
        return false;
    }

    const prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.prototype;
}

// restricted to arrays, since typescript doesn't like our plans of using length() if we allow filtered objects
const filterEmpty = (list: []) => filter((x) => !isEmpty(x), list);

type Schema = any;
type Description = {
    key: Schema;
};
type DescriptionEntry = {
    key: any;
    schema: Schema;
};
type Explain = {
    schema: Schema;
    value: any;
    errors: unknown[];
};

const schema = (s: object): Schema => {
    return s;
};

const string: Schema = schema({
    name: 'string',
    validate: (value: any) => (typeof value === 'string' ? [] : ['Type mismatch'])
});

const number: Schema = schema({
    name: 'number',
    validate: (value: any) => (typeof value === 'number' ? [] : ['Type mismatch'])
});

const greaterThan: Schema = (right: number) => {
    return schema({
        name: 'greaterThan',
        validate: (left: number) => (left > right ? [] : ['Type mismatch'])
    });
};

const and: Schema = (...args: any[]) => {
    const validate = (value: any) => map((schema: any) => schema.validate(value), args);
    return schema({ name: 'and', validate });
};

const object: Schema = (description: Description) => {
    let _closed = false;

    // list of rules in schema
    const _entries = pipe(
        toPairs,
        map((x: any[]) => ({ key: x[0], schema: x[1] }))
    )(description);

    const _validateIsPlainObject = (value: object) => (isPlainObject(value) ? [] : ['Not an object']);

    const _validateKeyPresence = (value: any) => {
        return map((entry: DescriptionEntry) => {
            return value.hasOwnProperty(entry.key) ? [] : ['Missing key: ' + entry.key];
        })(_entries);
    };

    const _validateDescription = (value: any) =>
        map((entry: DescriptionEntry) => entry.schema.validate(value[entry.key]))(_entries);

    const _validateClosed = (value: any) => {
        if (!_closed) return [];

        const diff = difference(keys(value), keys(description));

        if (length(diff) > 0) return map((key: any) => 'Extra key in closed schema: ' + key, diff);

        return [];
    };

    const validate = (value: any) => {
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

function validator(schema: Schema) {
    return {
        validate: (value: any): boolean => {
            const errors = filterEmpty(schema.validate(value));

            return errors.length === 0;
        },
        explain: (value: any): Explain | null => {
            const errors = filterEmpty(schema.validate(value));

            return length(errors) > 0 ? { schema, value, errors } : null;
        }
    };
}

function validate(schema: Schema, value: any) {
    return validator(schema).validate(value);
}

function explain(schema: Schema, value: any): Explain | null {
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
