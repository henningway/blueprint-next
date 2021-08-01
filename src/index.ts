import { append, chain, difference, filter, isEmpty, keys, length, map, pipe, pluck, toPairs, values } from 'ramda';

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

type Description = { [key: string]: Schema };
type DescriptionEntry = { key: any; schema: Schema };
type Error = { type: ErrorType; schema: string; value: any; path: Path };
type Explain = { schema: string; value: any; errors: unknown[] };
type Path = unknown[];
type Schema = {
    name: string;
    validate: (value: any, path: any[]) => Error[];
    closed?: Schema;
} & Visitable &
    TreeNode;
type SchemaVisitor = {
    doForString: SchemaVisitorMethod;
    doForNumber: SchemaVisitorMethod;
    doForGreaterThan: SchemaVisitorMethod;
    doForAnd: SchemaVisitorMethod;
    doForObject: SchemaVisitorMethod;
};
type SchemaVisitorMethod = (schema: Schema) => any;
type TreeNode = { children: TreeNode[] };
type Visitable = { accept: (visitor: SchemaVisitor) => any };

const error = (type: ErrorType, schema: Schema, value: any, path: Path): Error => ({
    type,
    schema: schema.name,
    value,
    path
});

const string: Schema = {
    name: 'string',
    children: [],
    accept(visitor) {
        return visitor.doForString(this);
    },
    validate(value: any, path: Path) {
        return typeof value === 'string' ? [] : [error(ErrorType.TypeMismatch, this, value, path)];
    }
};

const number: Schema = {
    name: 'number',
    children: [],
    accept(visitor) {
        return visitor.doForNumber(this);
    },
    validate(value: any, path: Path) {
        return typeof value === 'number' ? [] : [error(ErrorType.TypeMismatch, this, value, path)];
    }
};

const greaterThan = (right: number): Schema => {
    return {
        name: 'greaterThan',
        children: [],
        accept(visitor) {
            return visitor.doForGreaterThan(this);
        },
        validate(left: number, path: Path) {
            return left > right ? [] : [error(ErrorType.TypeMismatch, this, left, path)];
        }
    };
};

const and = (...nested: Schema[]): Schema => {
    return {
        name: 'and',
        children: nested,
        accept(visitor) {
            return visitor.doForAnd(this);
        },
        validate(value: any, path: Path) {
            return map((schema: any) => schema.validate(value, path), nested);
        }
    };
};

const object = (description: Description): Schema => {
    let _closed = false;

    // list of rules in schema
    function _entries(): DescriptionEntry[] {
        return pipe(
            toPairs,
            map((x: any[]) => ({ key: x[0], schema: x[1] }))
        )(description);
    }

    function _missingKeys(value: any) {
        return listFilter((key: any) => {
            return !value.hasOwnProperty(key);
        }, pluck('key', _entries()));
    }

    function _extraKeys(value: any) {
        return _closed ? difference(keys(value), keys(description)) : [];
    }

    return {
        name: 'object',
        children: values(description),
        accept(visitor) {
            return visitor.doForObject(this);
        },
        validate(value: any, path: Path): Error[] {
            return !isPlainObject(value)
                ? [error(ErrorType.TypeMismatch, this, value, path)]
                : [
                      ...map((key) => error(ErrorType.MissingKey, this, value, append(key, path)))(_missingKeys(value)),
                      ...map((key) => error(ErrorType.ExtraKey, this, value, append(key, path)))(_extraKeys(value)),
                      ...chain(({ schema, key }: DescriptionEntry) => schema.validate(value[key], append(key, path)))(
                          _entries()
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

// post-order traversal, but results are listed in natural left-to-right-order
function traverse(fn: (node: TreeNode) => any, node: TreeNode): any {
    const childrenResult = map((s) => traverse(fn, s), node.children);
    return [fn(node), ...childrenResult];
}

export default {
    and,
    explain,
    greaterThan,
    number,
    object,
    string,
    traverse,
    validate
};
