type Size = "" | "S" | "M" | "L" | "XL" | "XXL";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  isProductReady(): boolean {
    // No DRY
    // if (this.name.length <= 0) throw new Error("Name is empty");
    // if (this.price <= 0) throw new Error("Price is zero or less");
    // if (this.size.length <= 0) throw new Error("size is empty");

    for( const key in this ) {
      // console.log(key, typeof this[key]);
      switch ( typeof this[key] ) {
        case 'string':
          if ((<string><unknown>this[key]).length <= 0) throw new Error(`${key} is empty`);
          break;

        case 'number':
          if ((<number><unknown>this[key]) <= 0) throw new Error(`${key} is zero or less`);
          break;
          
        default:
          throw new Error(`${key} is not supported`);
          break;
      }
    }

    return true;
  }

  toString() {
    if ( !this.isProductReady() ) return;
    return `Product: ${this.name} (${this.price}), size: ${this.size})`;
  }
}

(() => {
  const bluePants = new Product("Blue large pants", 100, "L");
  console.log(bluePants.toString());
})();
