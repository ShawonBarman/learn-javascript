// JSON is an open standard file format and data interchange format that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and arrays.
// It is used to exchange data.
// JSON requires double quotes for string values and will not work with single quotes.

obj = {name: "Shawon", age: 22};
json = JSON.stringify(obj);
console.log(json);
console.log(typeof json);
console.log(typeof obj);

parsed = JSON.parse(`{"name": "Shawon", "age": 22, a:{b:1, c:2}}`);
console.log(parsed);