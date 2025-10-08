import express from 'express'
import usersControllers from '../../controllers/users/usersControllers.js'

const routerUsers = express.Router()

routerUsers.get("/users", usersControllers.getUsers)
routerUsers.get("/users/:id", usersControllers.getUser)
routerUsers.put("/users/update/:id", usersControllers.update)
routerUsers.delete("/users/remove/:id", usersControllers.remove)

export default routerUsers;


