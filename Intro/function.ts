function addTwo(num: number): number {
  return num + 2;
}

function upperCase(name: string) {
  return name.toUpperCase();
}

function logIn(name: string, email: string, isPaid: boolean = false) {}

const signIn = (email: string): string => {
  return "";
};

logIn("Mashood", "<EMAIL>");

let num = addTwo(1);
upperCase("mashood");

const hero: string[] = ["spiderman", "superman"];
hero.map((hero): string => {
  return `hero = ${hero}`;
});

function consoleError(err: string): void {
  console.log(err);
}

function handleError(err: string): never {
  throw new Error(err);
}

function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

export {};
