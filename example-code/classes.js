var Car1 = (function () {
    function Car1(engine) {
        this.engine = engine;
    }
    Car1.prototype.start = function () {
        return 'Started ' + this.engine;
    };
    Car1.prototype.stop = function () {
        return 'Stopped ' + this.engine;
    };
    return Car1;
})();
var Car2 = (function () {
    function Car2(engine) {
        this.engine = engine;
    }
    Car2.prototype.start = function () {
        return 'Started ' + this.engine;
    };
    Car2.prototype.stop = function () {
        return 'Stopped ' + this.engine;
    };
    return Car2;
})();
var Car3 = (function () {
    function Car3(engine) {
        this.engine = engine;
    }
    Object.defineProperty(Car3.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value === undefined)
                throw 'Supply an engine!';
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    return Car3;
})();
