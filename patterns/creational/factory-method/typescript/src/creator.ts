import type { Product } from "./product.ts";
import { ConcreteProduct1, ConcreteProduct2 } from "./product.ts";

export abstract class Creator {
  abstract factoryMethod(): Product;

  someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

export class ConcreteCreator1 extends Creator {
  factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

export class ConcreteCreator2 extends Creator {
  factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}
