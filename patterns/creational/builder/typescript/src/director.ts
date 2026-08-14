import type { Builder } from "./builder.ts";

export class Director {
  buildMinimalViableProduct(builder: Builder): void {
    builder.buildPartA();
  }

  buildFullFeaturedProduct(builder: Builder): void {
    builder.buildPartA();
    builder.buildPartB();
    builder.buildPartC();
  }
}
