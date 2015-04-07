function myFunction(config) {
    alert('field1: ' + config.field1 + ', field2: ' + config.field2);
}
myFunction({
    field1: 'something',
    field2: 12
});
