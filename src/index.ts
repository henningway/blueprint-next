import { append, difference, filter, flatten, isEmpty, keys, length, map, pipe, pluck, toPairs } from 'ramda';

// https://github.com/sindresorhus/is-plain-obj/blob/main/index.js
function isPlainObject(value: any): boolean {
    if (Object.prototype.toString.call(value) !== '[object Object]') {
        return false;
    }

    const prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.prototype;
}

// restricted to arrays, since typescript doesn't like our plans of using length() if we allow filtered objects
const listFilter: (predicate: any, list: any[]) => any = (predicate, list) => filter(predicate, list);
const filterEmpty = (list: any[]) => listFilter((x: any) => !isEmpty(x), list);

enum ErrorType {
    TypeMismatch = 'TypeMismatch',
    MissingKey = 'MissingKey',
    ExtraKey = 'ExtraKey'
}

type Schema = { name: string; validate: (value: any, path: any[]) => Error[]; closed?: Schema };
type Path = unknown[];
type Description = { key: Schema };
type DescriptionEntry = { key: any; schema: Schema };
type Explain = { schema: string; value: any; errors: unknown[] };
type Error = { type: ErrorType; schema: string; value: any; path: Path };

const error = (type: ErrorType, schema: Schema, value: any, path: Path): Error => ({
    type,
    schema: schema.name,
    value,
    path
});

const string = {
    name: 'string',
    validate(value: any, path: Path) {
        return typeof value === 'string' ? [] : [error(ErrorType.TypeMismatch, this, value, path)];
    }
};

const number = {
    name: 'number',
    validate(value: any, path: Path) {
        return typeof value === 'number' ? [] : [error(ErrorType.TypeMismatch, this, value, path)];
    }
};

const greaterThan = (right: number): Schema => {
    return {
        name: 'greaterThan',
        validate(left: number, path: Path) {
            return left > right ? [] : [error(ErrorType.TypeMismatch, this, left, path)];
        }
    };
};

const and = (...args: any[]): Schema => {
    return {
        name: 'and',
        validate(value: any, path: Path) {
            return map((schema: any) => schema.validate(value, path), args);
        }
    };
};

const object = (description: Description): Schema => {
    let _closed = false;

    // list of rules in schema
    const _entries: DescriptionEntry[] = pipe(
        toPairs,
        map((x: any[]) => ({ key: x[0], schema: x[1] }))
    )(description);

    const _missingKeys = (value: any) => {
        return listFilter((key: any) => {
            return !value.hasOwnProperty(key);
        }, pluck('key', _entries));
    };

    const _extraKeys = (value: any) => {
        return _closed ? difference(keys(value), keys(description)) : [];
    };

    return {
        name: 'object',
        validate(value: any, path: Path): Error[] {
            return !isPlainObject(value)
                ? [error(ErrorType.TypeMismatch, this, value, path)]
                : [
                      ...map((key) => error(ErrorType.MissingKey, this, value, append(key, path)))(_missingKeys(value)),
                      ...map((key) => error(ErrorType.ExtraKey, this, value, append(key, path)))(_extraKeys(value)),
                      ...flatten(
                          map(({ schema, key }: DescriptionEntry) => schema.validate(value[key], append(key, path)))(
                              _entries
                          )
                      )
                  ];
        },
        get closed(): Schema {
            _closed = true;
            return this;
        }
    };
};

function validator(schema: Schema) {
    return {
        validate: (value: any): boolean => {
            const errors = filterEmpty(schema.validate(value, []));

            return length(errors) === 0;
        },
        explain: (value: any): Explain | null => {
            const errors = filterEmpty(schema.validate(value, []));

            return length(errors) > 0 ? { schema: schema.name, value, errors } : null;
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
