import { DataTypes } from "@sequelize/core";
import sequelize from "../../config/database.js"; 

const Category = sequelize.define('category', {

    name: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true    
    },

    description: {
        type: DataTypes.TEXT, 
        allowNull: true   
    }
});

export default Category;