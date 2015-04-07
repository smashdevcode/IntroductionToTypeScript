var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Parent = (function () {
    function Parent(parentName) {
        this.parentName = parentName;
    }
    return Parent;
})();
var Child = (function (_super) {
    __extends(Child, _super);
    function Child(childName, parentName) {
        this.childName = childName;
        _super.call(this, parentName);
    }
    return Child;
})(Parent);
var child = new Child('Sam', 'Bob');
