"use strict";
exports.__esModule = true;
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.baz = function () {
        return this.bar();
    };
    Greeter.prototype.bar = function () {
        return this.greet();
    };
    Greeter.prototype.greet = function () {
        return "Bonjour, " + this.greeting + "!";
    };
    return Greeter;
}());
exports.Greeter = Greeter;
