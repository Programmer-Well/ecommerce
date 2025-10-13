import create from "../../services/products/createProducts.js"

async function getProduct(req, res) {

}

async function getProducts(req, res) {

}

const createProducts = async (req, res) => {
     try {
        
        const productData = req.body;

        
        if (!productData.name || !productData.value || !productData.categoryId) {
            return res.status(400).json({ message: "Nome, valor e categoryId são obrigatórios." });
        }

        const newProduct = await create(productData);

        return res.status(201).json(newProduct);

    } catch (error) {
        
        console.error("Erro ao criar produto:", error.message);
        return res.status(404).json({ message: error.message });
    }
};

async function removeProducts(req, res) {

}

async function updateProducts(req, res) {

}

export default {
    getProduct,
    getProducts,
    createProducts,
    removeProducts,
    updateProducts,
}