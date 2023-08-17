// type User = {
//   email: string;
//   userId: number;
//   googleId?: number;
//   readonly dbId: number;
//   startTrail: () => string;
//   anotherWay(): number;
//   getCoupon(couponName: string): number;
// };

interface User {
  email: string;
  userId: number;
  googleId?: number;
  readonly dbId: number;
  startTrail: () => string;
  anotherWay(): number;
  getCoupon(couponName: string): number;
}

//? reopening interface means adding more values/method  into it
interface User {
  //! reopening of interface
  githubToken: string;
}

//? interface uses inheritance
interface Admin extends User {
  role: string;
}

const mashood: User = {
  email: "m@com",
  githubToken: "github",
  userId: 123,
  dbId: 345,
  startTrail: () => {
    return "hello";
  },
  anotherWay: () => {
    return 3;
  },
  getCoupon: (couponName) => {
    console.log(couponName);

    return 20;
  },
};

type animal = {
  name: String;
};

type dog = animal & {
  age: number;
};

export {};
