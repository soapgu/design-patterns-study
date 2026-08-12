export interface Product {
  operation(): string;
}

export class ConcreteProduct1 implements Product {
  operation(): string {
    return "{Result of ConcreteProduct1}";
  }
}

export class ConcreteProduct2 implements Product {
  operation(): string {
    return "{Result of ConcreteProduct2}";
  }
}
