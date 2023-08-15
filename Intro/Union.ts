let score: number | string = 33;

score = "45";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let mashood: User | Admin = { name: "mashood", id: 1234 };

mashood = { username: "admin", id: 4523 };

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else if (typeof id === "number") {
    id += 2;
  }
  console.log(`db id  = ${id}`);
}

getDbId(123);
getDbId("123");

const arr1: number[] = [1, 2, 3, 4];
const arr2: string[] = ["1", "2", "3"];
const arr3: (string | number)[] = [1, "2", 3, "4"];

let pi: 3.14 = 3.14;

let seatAllotment: "aisle" | "middle" | "window" | "none" = "none";

seatAllotment = "aisle";
// seatAllotment = "crew"  //!error

export {};
