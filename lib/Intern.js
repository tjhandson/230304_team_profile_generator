// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = import("./Employee.js");

class Intern extends Employee {
    constructor(name, id, email, school) {
        this._school = school;

    }
    getSchool() {
        return this._school
    }
    getRole() {
        return "Intern"
    }
}

export default Intern;