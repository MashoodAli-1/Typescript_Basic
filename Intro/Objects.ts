const user = {
  name: "mashood",
  age: 22,
  job: "ASE",
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "mashood", isPaid: true });

function createCourse(): { name: string; price: number } {
  return { name: "react.js", price: 500 };
}

//! bad behaviour of typescript objects
createUser({ name: "mashood", isPaid: true, email: "abc@com" }); //? error

let newUser = { name: "mashood", isPaid: true, email: "abc@com" };

createUser(newUser); //? now it is not giving error

export {};
