/*/
/*
/* Rank: 0
/* main initial
/* 
/*/

/* author:bingo */

// basic Class Function：
String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, '');
};
// Mixin method
Function.prototype.Mixin = function (givingClass) {
    if (arguments[1]) {// only give certain methods
        for (var i = 1, len = arguments.length; i < len; i++) {
            if (givingClass[arguments[i]]) {  // if this givingClass's method not null
                this.prototype[arguments[i]] = givingClass[arguments[i]];
            }
        }
    } else { // Give all methods
        for (var methodName in givingClass.prototype) {
            if (!this.prototype[methodName]) {
                this.prototype[methodName] = givingClass.prototype[methodName]
            }
        }
    }
};

// return random of from 0 to Number-1 
Number.prototype.GetRandom = function () {
    return Math.floor(Math.random() * this)
};