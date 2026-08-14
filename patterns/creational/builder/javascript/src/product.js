export class Product {
  #parts = [];

  /** @returns {readonly string[]} */
  get parts() {
    return this.#parts.slice();
  }

  /** @param {string} part */
  add(part) {
    if (part.trim().length === 0) {
      throw new Error("A product part cannot be empty.");
    }

    this.#parts.push(part);
  }

  listParts() {
    return `Product parts: ${this.#parts.join(", ")}`;
  }
}
