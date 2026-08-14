/**
 * @typedef {object} Builder
 * @property {() => void} buildPartA
 * @property {() => void} buildPartB
 * @property {() => void} buildPartC
 */

export class Director {
  /** @param {Builder} builder */
  buildMinimalViableProduct(builder) {
    builder.buildPartA();
  }

  /** @param {Builder} builder */
  buildFullFeaturedProduct(builder) {
    builder.buildPartA();
    builder.buildPartB();
    builder.buildPartC();
  }
}
