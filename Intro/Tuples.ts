let User: [number, string, boolean];

User = [1, "mashood", true];

let rgb: [number, number, number, number?];

rgb = [12, 255, 255];

type User = [number, string];

let user: User = [1, "mashood"];

user[1] = "ali";

user.push(123); //? what this is allowed

export {};
