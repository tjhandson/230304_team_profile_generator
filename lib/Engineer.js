// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = import("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        this._github = github;

    }
    getGithub() {
        return this._github:
    }
    getRole() {
        return "Engineer";
    }
}

export default Engineer;