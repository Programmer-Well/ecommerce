import { DataTypes } from "@sequelize/core";
import sequelize from "../../config/database.js";

const Product = sequelize.define('product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false 
    },

    value: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false, 
        validate: {
            isDecimal: true,
            min: 0
        }
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: true 
    },

    status: {
        type: DataTypes.ENUM('disponivel', 'indisponivel', 'em_promocao'),
        allowNull: false,
        defaultValue: 'disponivel' 
    }
})

export default Product