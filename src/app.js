import express from "express"
import users from "./routers/users/users.js"

const app = express()

app.use(express.json())
app.use(users)

export default app