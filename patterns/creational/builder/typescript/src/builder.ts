import { Product } from "./product.ts";

export interface Builder {
  buildPartA(): void;
  buildPartB(): void;
  buildPartC(): void;
}

export class ConcreteBuilder implements Builder {
  #product = new Product();

  reset(): void {
    this.#product = new Product();
  }

  buildPartA(): void {
    this.#product.add("PartA1");
  }

  buildPartB(): void {
    this.#product.add("PartB1");
  }

  buildPartC(): void {
    this.#product.add("PartC1");
  }

  getProduct(): Product {
    const result = this.#product;
    this.reset();
    return result;
  }
}
