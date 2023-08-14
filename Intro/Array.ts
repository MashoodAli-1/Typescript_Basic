const superHeros: string[] = [];
const heroPower: Array<number> = [];
type User = {
  name: string;
  isActive: boolean;
};
const user: Array<User> = [];
const MLModel: number[][] = [[]];
const readonlyArr: ReadonlyArray<string> = ["mashood", "ali"];

superHeros.push("spiderman");
heroPower.push(10);
// readonlyArr.push("ali"); // cannot push in readonly array

user.push({ name: "mashood", isActive: true });

export {};
