// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = import("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this._officeNumber = officeNumber;

    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this._officeNumber
    }
}

export default Manager;