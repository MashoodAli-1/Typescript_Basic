abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getCar(): void;
  getReelTime(): number {
    console.log("do some calculation");
    return 8;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public brust: number
  ) {
    super(cameraMode, filter);
  }

  getCar(): void {
    console.log("implementation here");
  }

  //   override getReelTime(): number {
  //       return 3
  //   }
}

let mashood = new Instagram("test", "test", 4);
mashood.getReelTime();

export {};
