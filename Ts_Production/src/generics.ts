const score: Array<number> = [];
const name: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

// ? this is more suitable way
function identityThree<Type>(val: Type): Type {
  return val;
}

// ? T is Type
function identityFour<T>(val: T, val2: T): T[] {
  return [val, val2];
}

function identityFive<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

const val = identityFive<Bottle>({ brand: "nike", type: 20 });

console.log(val);

export {};
