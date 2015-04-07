var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        return 'Started ' + this.engine;
    };
    Car.prototype.stop = function () {
        return 'Stopped ' + this.engine;
    };
    return Car;
})();
