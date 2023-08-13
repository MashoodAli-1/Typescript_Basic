type User = {
  readonly _id: string; //read-only
  name: string;
  email: string;
  isActive: boolean;
  creditCard?: number; // optional
};

var myUser: User = {
  _id: "1234",
  name: "mashood",
  email: "m@com",
  isActive: true,
};

//error
// myUser._id = "1234";

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  carddate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: string;
  };

export {};
