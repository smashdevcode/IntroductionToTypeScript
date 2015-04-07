
// The type can be inferred.
var numberValue1 = 2;

// Or you can specify the type explicitly.
var numberValue2: number = 3;

// If you don't specify the type and don't assign a value, then the type will
// default to "any".
var anyValue;

// If you don't specify the type, then TypeScript will coerce the types in
// order to produce a value. In this case, the "numberValue1" number will be
// coerced to a string and then concatenated with the 'some string' literal.
var stringValue = numberValue1 + 'some string';

// If we explicitly specify the type as "number", then TypeScript will
// not allow this operation.
//var newNumberValue: number = numberValue1 + 'some string';
