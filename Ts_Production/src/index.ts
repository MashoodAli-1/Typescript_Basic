console.log("Hello");

console.log("hello2");

// ? Classes in typeScript
// ? by default public
class User {
  public name: string;
  email: string;
  private city: string = "";
  private _countCourse: number = 1;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  private deleteUser() {
    console.log("user deleted");
  }

  /*
   * @setter getter
   */

  get getEmail(): string {
    return this.email;
  }

  get getCourseCount(): number {
    return this._countCourse;
  }

  set setEmail(email: string) {
    this.email = email;
  }
}

const user1 = new User("mashood", "mashood@com");
