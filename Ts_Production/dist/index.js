"use strict";
console.log("Hello");
console.log("hello2");
// ? Classes in typeScript
// ? by default public
class User {
    constructor(name, email) {
        this.city = "";
        this._countCourse = 1;
        this.name = name;
        this.email = email;
    }
    deleteUser() {
        console.log("user deleted");
    }
    /*
     * @setter getter
     */
    get getEmail() {
        return this.email;
    }
    get getCourseCount() {
        return this._countCourse;
    }
    set setEmail(email) {
        this.email = email;
    }
}
const user1 = new User("mashood", "mashood@com");
