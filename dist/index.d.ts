declare type Schema = any;
declare type Explain = {
    schema: Schema;
    value: any;
    errors: unknown[];
};
declare function validate(schema: Schema, value: any): boolean;
declare function explain(schema: Schema, value: any): Explain | null;
declare const _default: {
    and: any;
    explain: typeof explain;
    greaterThan: any;
    number: any;
    object: any;
    string: any;
    validate: typeof validate;
};
export default _default;
