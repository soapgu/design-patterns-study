export class Product {
  readonly #parts: string[] = [];

  get parts(): readonly string[] {
    return this.#parts.slice();
  }

  add(part: string): void {
    if (part.trim().length === 0) {
      throw new Error("A product part cannot be empty.");
    }

    this.#parts.push(part);
  }

  listParts(): string {
    return `Product parts: ${this.#parts.join(", ")}`;
  }
}
