import express from "express"
import routerUsers from "./routers/users/users.js"
import routerProducts from "./routers/products/products.js"
import routerCategorys from "./routers/category/category.js"

const app = express()

app.use(express.json())

app.use(routerUsers)
app.use(routerProducts)
app.use(routerCategorys)

export default app