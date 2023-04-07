import productSchema from "./product.schema";

class ProductService {
  async createProduct(data) {
    try {
      const newProduct = await productSchema.create(data);
      return newProduct;
    } catch (error) {
      console.error("Error creating product: ", error);
    }
  }

  async findAllProducts() {
    try {
      const productsFound = await productSchema.find();
      return productsFound;
    } catch (error) {
      console.error("Error finding products: ", error);
    }
  }

  async findProduct(id) {
    try {
      const product = await productSchema.findById(id);
      return product;
    } catch (error) {
      console.error("Error finding user: ", error);
    }
  }

  async deleteProduct(id) {
    try {
      const product = await productSchema.findByIdAndDelete(id);
      return product;
    } catch (error) {
      console.error("Error deleting user: ", error);
    }
  }

  async updateProduct(id: any, data: any) {
    try {
      const productToUpdate = await productSchema.findByIdAndUpdate(
        id,
        {
          name: data.name,
          quantity: data.quantity,
          price: data.price,
        },
        { new: true }
      );
      return productToUpdate;
    } catch (error) {
        console.error("Error updating product: ", error);
    }
  }
}

export default new ProductService();