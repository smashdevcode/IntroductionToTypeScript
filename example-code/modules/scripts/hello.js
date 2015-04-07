var Greeter;
(function (Greeter) {
    function hello() {
        alert('Hello');
    }
    Greeter.hello = hello;
})(Greeter || (Greeter = {}));
