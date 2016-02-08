'use strict';

String.prototype.count = function (s1) {

    return (this.length - this.replace(new RegExp(s1, "g"), '').length) / s1.length;
};

String.prototype.repeat = function (n) {
  n = n || 1;

  return Array(n + 1).join(this);
};

String.prototype.reverse = function () {

    return this.split("").reverse().join("");
};
