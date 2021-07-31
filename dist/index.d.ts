declare enum ErrorType {
    TypeMismatch = "TypeMismatch",
    MissingKey = "MissingKey",
    ExtraKey = "ExtraKey"
}
declare type Schema = {
    name: string;
    validate: (value: any, path: any[]) => Error[];
    closed?: Schema;
};
declare type Path = unknown[];
declare type Description = {
    key: Schema;
};
declare type Explain = {
    schema: string;
    value: any;
    errors: unknown[];
};
declare type Error = {
    type: ErrorType;
    schema: string;
    value: any;
    path: Path;
};
declare function validate(schema: Schema, value: any): boolean;
declare function explain(schema: Schema, value: any): Explain | null;
declare const _default: {
    and: (...args: any[]) => Schema;
    explain: typeof explain;
    greaterThan: (right: number) => Schema;
    number: {
        name: string;
        validate(value: any, path: Path): Error[];
    };
    object: (description: Description) => Schema;
    string: {
        name: string;
        validate(value: any, path: Path): Error[];
    };
    validate: typeof validate;
};
export default _default;
