import { ConcreteBuilder } from "./builder.js";
import { Director } from "./director.js";

const director = new Director();
const builder = new ConcreteBuilder();

console.log("Standard basic product:");
director.buildMinimalViableProduct(builder);
console.log(builder.getProduct().listParts());

console.log();
console.log("Standard full featured product:");
director.buildFullFeaturedProduct(builder);
console.log(builder.getProduct().listParts());

console.log();
console.log("Custom product without a director:");
builder.buildPartA();
builder.buildPartC();
console.log(builder.getProduct().listParts());
