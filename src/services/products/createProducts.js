import { Product, Category } from "../../models/index.js"; 

const create = async (productData) => {
    const { name, value, description, status, categoryId } = productData;
    const categoryExists = await Category.findByPk(categoryId);
    
    if (!categoryExists) {
       
        throw new Error("Categoria não encontrada. Não é possível criar o produto.");
    }

    const newProduct = await Product.create({
        name,
        value,
        description,
        status,
        categoryId 
    });

    return newProduct;
};

export default create;