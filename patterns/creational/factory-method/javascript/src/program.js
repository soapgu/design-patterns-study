import { ConcreteCreator1, ConcreteCreator2 } from "./creator.js";

/**
 * 运行只依赖创建者抽象的客户端流程。
 *
 * @param {import("./creator.js").Creator} creator
 */
function runCreator(creator) {
  console.log(`App: Launched with ${creator.constructor.name}.`);
  console.log("Client: The concrete creator is unknown to this code.");
  console.log(creator.someOperation());
}

runCreator(new ConcreteCreator1());
console.log();
runCreator(new ConcreteCreator2());
