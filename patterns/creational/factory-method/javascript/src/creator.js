import { ConcreteProduct1, ConcreteProduct2 } from "./product.js";

export class Creator {
  factoryMethod() {
    throw new Error("Subclasses must implement factoryMethod().");
  }

  someOperation() {
    const product = this.factoryMethod();
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

export class ConcreteCreator1 extends Creator {
  factoryMethod() {
    return new ConcreteProduct1();
  }
}

export class ConcreteCreator2 extends Creator {
  factoryMethod() {
    return new ConcreteProduct2();
  }
}
