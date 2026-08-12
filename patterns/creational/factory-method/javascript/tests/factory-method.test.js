import assert from "node:assert/strict";
import { describe, test } from "node:test";

import { ConcreteCreator1, ConcreteCreator2, Creator } from "../src/creator.js";
import { ConcreteProduct1, ConcreteProduct2 } from "../src/product.js";

describe("Factory Method (JavaScript)", () => {
  test("具体创建者返回对应产品", () => {
    assert.ok(new ConcreteCreator1().factoryMethod() instanceof ConcreteProduct1);
    assert.ok(new ConcreteCreator2().factoryMethod() instanceof ConcreteProduct2);
  });

  test("创建者的核心流程通过共同约定工作", () => {
    assert.match(new ConcreteCreator1().someOperation(), /ConcreteProduct1/);
    assert.match(new ConcreteCreator2().someOperation(), /ConcreteProduct2/);
  });

  test("新增创建者可以接入相同核心流程", () => {
    class AdditionalCreator extends Creator {
      factoryMethod() {
        return { operation: () => "{Result of Duck-Typed Product}" };
      }
    }

    assert.match(new AdditionalCreator().someOperation(), /Duck-Typed Product/);
  });

  test("基础创建者不能独立创建产品", () => {
    assert.throws(() => new Creator().factoryMethod(), /must implement/);
  });
});
