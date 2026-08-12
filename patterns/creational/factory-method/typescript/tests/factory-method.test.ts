import assert from "node:assert/strict";
import { describe, test } from "node:test";

import { ConcreteCreator1, ConcreteCreator2, Creator } from "../src/creator.ts";
import { ConcreteProduct1, ConcreteProduct2, type Product } from "../src/product.ts";

describe("Factory Method (TypeScript)", () => {
  test("具体创建者返回对应产品", () => {
    assert.ok(new ConcreteCreator1().factoryMethod() instanceof ConcreteProduct1);
    assert.ok(new ConcreteCreator2().factoryMethod() instanceof ConcreteProduct2);
  });

  test("创建者的核心流程通过产品抽象工作", () => {
    assert.match(new ConcreteCreator1().someOperation(), /ConcreteProduct1/);
    assert.match(new ConcreteCreator2().someOperation(), /ConcreteProduct2/);
  });

  test("新增创建者可以接入相同核心流程", () => {
    class AdditionalCreator extends Creator {
      factoryMethod(): Product {
        return { operation: () => "{Result of Structural Product}" };
      }
    }

    assert.match(new AdditionalCreator().someOperation(), /Structural Product/);
  });
});
