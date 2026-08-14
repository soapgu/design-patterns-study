import { Product } from "./product.js";

export class ConcreteBuilder {
  #product = new Product();

  reset() {
    this.#product = new Product();
  }

  buildPartA() {
    this.#product.add("PartA1");
  }

  buildPartB() {
    this.#product.add("PartB1");
  }

  buildPartC() {
    this.#product.add("PartC1");
  }

  getProduct() {
    const result = this.#product;
    this.reset();
    return result;
  }
}
