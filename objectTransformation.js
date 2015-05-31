function Object() {
    this.property = {};
    this.property.propertieS = {
        method: function(num) {
            return Math.PI * Math.sqrt(num);
        }
    };
}

Object.prototype.outerMethod = function(num) {
    return this.property.propertieS.method(num) * num;
};

function ANewObject() {
    this.newProperty = "foo";
}

ANewObject.prototype = new Object();

ANewObject.prototype.fib = function(n) {
    var a = 0, b = 1, c = 1;
    for(var i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};

ANewObject.prototype.aNewMethod = function() {
    var output = [];
    for(var i in arguments) {
        i += 5;
        i = this.fib(i);
        output.push(this.outerMethod(i));
    }
    return output;
};

var newObj = new ANewObject();
newObj.aNewMethod(1, 2, 3, 4, 5);
