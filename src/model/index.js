import sequelize from "../config/database.js";
import User from "./users/Users.js";

sequelize.sync({
    force: false,
    alter: true
}).then(() => {
    console.log("Todas as tabelas foram sincronizadas com sucesso.")
})

export default{
    User,
}