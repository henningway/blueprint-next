declare enum ErrorType {
    TypeMismatch = "TypeMismatch",
    MissingKey = "MissingKey",
    ExtraKey = "ExtraKey"
}
declare type Description = {
    [key: string]: Schema;
};
declare type Error = {
    type: ErrorType;
    schema: string;
    value: any;
    path: Path;
};
declare type Explain = {
    schema: string;
    value: any;
    errors: unknown[];
};
declare type Path = unknown[];
declare type Schema = {
    name: string;
    validate: (value: any, path: any[]) => Error[];
    closed?: Schema;
} & Visitable & TreeNode;
declare type SchemaVisitor = {
    doForString: SchemaVisitorMethod;
    doForNumber: SchemaVisitorMethod;
    doForGreaterThan: SchemaVisitorMethod;
    doForAnd: SchemaVisitorMethod;
    doForObject: SchemaVisitorMethod;
};
declare type SchemaVisitorMethod = (schema: Schema) => any;
declare type TreeNode = {
    children: TreeNode[];
};
declare type Visitable = {
    accept: (visitor: SchemaVisitor) => any;
};
declare function validate(schema: Schema, value: any): boolean;
declare function explain(schema: Schema, value: any): Explain | null;
declare function traverse(fn: (node: TreeNode) => any, node: TreeNode): any;
declare const _default: {
    and: (...nested: Schema[]) => Schema;
    explain: typeof explain;
    greaterThan: (right: number) => Schema;
    number: Schema;
    object: (description: Description) => Schema;
    string: Schema;
    traverse: typeof traverse;
    validate: typeof validate;
};
export default _default;
