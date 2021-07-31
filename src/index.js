const string = (() => {
    const validate = (value) => typeof value === 'string';
    return { validate };
})();

const number = (() => {
    const validate = (value) => typeof value === 'number';
    return { validate };
})();

const greaterThan = (rightValue) => {
    const validate = (leftValue) => leftValue > rightValue;
    return { validate };
};

function validate(schema, value) {
    return schema.validate(value);
}

export default {
    greaterThan,
    number,
    string,
    validate
};
