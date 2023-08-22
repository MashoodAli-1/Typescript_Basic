// ? typeof is also called type guard

function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("please provide the id");
    return;
  }
  id?.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: Admin | User) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  } else {
    return false;
  }
}

//! instanceof and type predicates
function logValue(val: Date | string) {
  if (val instanceof Date) {
    console.log(val.toUTCString());
  } else {
    console.log(val.toLowerCase());
  }
}

type Fish = { swim: () => {} };
type Bird = { fly: () => {} };

function canSwim(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (canSwim(pet)) {
    console.log(pet);
    return "fish food";
  } else {
  }
}

interface Circle {
  kind: "circle";
  radius: number; // Radius of the circle, measured in meters.
}

interface Square {
  kind: "square";
  sideLength: number; // Side length of a square, measured in meters.
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    // return shape. * shape.sideLength;
  }
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.sideLength * shape.sideLength;
    case "rectangle":
      return shape.height * shape.width;

    default:
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
}

export {};
