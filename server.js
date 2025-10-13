import app from "./src/app.js";
import sequelize from "./src/config/database.js";

const PORT = process.env.PORT

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}.`);
    });
}).catch (err =>{
    console.error("Não foi possível conectar ao banco de dados:", err);
});



