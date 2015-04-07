function MyFunction(callback) {
    if (callback) {
        callback('Hello from MyFunction');
    }
}
MyFunction(function (value) {
    alert(value);
});
