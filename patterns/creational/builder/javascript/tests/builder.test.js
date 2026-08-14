import assert from "node:assert/strict";
import { describe, test } from "node:test";

import { ConcreteBuilder } from "../src/builder.js";
import { Director } from "../src/director.js";

describe("Builder (JavaScript)", () => {
  test("客户端可以自由组合构造步骤", () => {
    const builder = new ConcreteBuilder();
    builder.buildPartA();
    builder.buildPartC();

    assert.deepEqual(builder.getProduct().parts, ["PartA1", "PartC1"]);
  });

  test("主管可以构造最小产品", () => {
    const builder = new ConcreteBuilder();

    new Director().buildMinimalViableProduct(builder);

    assert.deepEqual(builder.getProduct().parts, ["PartA1"]);
  });

  test("主管可以按顺序构造完整产品", () => {
    const builder = new ConcreteBuilder();

    new Director().buildFullFeaturedProduct(builder);

    assert.deepEqual(builder.getProduct().parts, ["PartA1", "PartB1", "PartC1"]);
  });

  test("取得产品会重置生成器但不改变旧结果", () => {
    const builder = new ConcreteBuilder();
    builder.buildPartA();
    const first = builder.getProduct();
    builder.buildPartB();
    const second = builder.getProduct();

    assert.deepEqual(first.parts, ["PartA1"]);
    assert.deepEqual(second.parts, ["PartB1"]);
  });

  test("具有相同步骤的对象可以复用主管配方", () => {
    const calls = [];
    const builder = {
      buildPartA: () => calls.push("A"),
      buildPartB: () => calls.push("B"),
      buildPartC: () => calls.push("C"),
    };

    new Director().buildFullFeaturedProduct(builder);

    assert.deepEqual(calls, ["A", "B", "C"]);
  });
});
