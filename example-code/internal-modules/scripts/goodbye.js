var Greeter;
(function (Greeter) {
    function goodbye() {
        alert('Goodbye');
    }
    Greeter.goodbye = goodbye;
})(Greeter || (Greeter = {}));
