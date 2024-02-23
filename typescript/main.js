// function myFunction(){
//     return () => "hello";
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var isBeginner = true;
var total = 0;
var names = "seyha";
var sentence = "My name is seyha.";
var object = { names: "seyha" };
var n = null;
var u = undefined;
console.log(isBeginner);
console.log(total);
console.log(names);
console.log(sentence);
console.log(object);
console.log(n);
console.log(u);
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: "Seyha",
    lastName: "Oeurn"
};
fullName(p);
// class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.eName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.eName));
    };
    return Employee;
}());
var emp1 = new Employee("seyha");
console.log(emp1.eName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager deletgating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Seyha manager");
console.log("Inherite from classe Employee");
console.log(m1.eName);
m1.greet();
m1.delegateWork();
