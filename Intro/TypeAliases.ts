type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return user; //returning the same object passed as parameter.
}

createUser({ name: "", email: "", isActive: true });

export {};
