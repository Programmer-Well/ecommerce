import sequelize from "../config/database.js";
import User from "./users/Users.js";
import Product from "./products/Products.js";
import Category from "./category/Category.js";

Category.hasMany(Product, {
    foreignKey: 'categoryId'
});

Product.belongsTo(Category, {
    foreignKey: 'categoryId'
});

sequelize.sync({
    force: false,
    alter: true
}).then(() => {
    console.log("Todas as tabelas foram sincronizadas com sucesso.")
})

export default {
    User,
    Product,
    Category,
}