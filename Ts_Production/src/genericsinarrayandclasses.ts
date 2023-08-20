// ? <Type,> comma after the type keyword is only use to inform that it is
// ? typescript generic and not a react jsx component
function getSearchProduct<T>(product: T[]): T {
  return product[3];
}

interface Database {
  connection: string;
  username: string;
  password: string;
}

function moreOnGenerics<T1, T2 extends Database>(val1: T1, val2: T2): object {
  return {
    val1,
    val2,
  };
}

moreOnGenerics(2, {
  connection: "connect",
  username: "mashood",
  password: "abc",
});

//! classes examples

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

// ? in generic classes we can handle common use
//?  cases/ functionalities of two or more classes

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}

export {};
