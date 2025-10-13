import express from "express"
import routerUsers from "./routers/users/users.js"

const app = express()

app.use(express.json())
app.use(routerUsers)

export default app