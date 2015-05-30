function Object() {
    this.property = {};
    this.property.propertieS = {};
    
    this.property.propertieS.method = function(num) {
        return Math.PI * Math.sqrt(num);
    };

    this.outerMethod = function(num) {
        return this.property.propertieS.method(5) * num;
    };
}

var obj = new Object();
var output = obj.property.propertieS.method(5);
obj.outerMethod(output);

function Anewobject() {
    this.newProperty = "foo"
}

Anewobject.prototype = new Object();
var newObj = new Anewobject();

newObj.fib = function(n) {
    var a = 0, b = 1, c = 1;
    for(var i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};

newObj.aNewMethod = function() {
    var output = [];
    for(var i in arguments) {
        i += 5;
        i = this.fib(i);
        output.push(this.outerMethod(i));
    }
    return output;
};

newObj.aNewMethod(1, 2, 3, 4, 5);