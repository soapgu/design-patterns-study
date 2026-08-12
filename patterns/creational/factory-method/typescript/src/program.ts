import { ConcreteCreator1, ConcreteCreator2, type Creator } from "./creator.ts";

function runCreator(creator: Creator): void {
  console.log(`App: Launched with ${creator.constructor.name}.`);
  console.log("Client: The concrete creator is unknown to this code.");
  console.log(creator.someOperation());
}

runCreator(new ConcreteCreator1());
console.log();
runCreator(new ConcreteCreator2());
