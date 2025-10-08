async function getUser (req, res){
    res.json({
        message: `Listando o usuario ID: `
    })
}

async function getUsers (req, res){
    res.json({
        message:"Listando todos os usuários." 
    })
}

async function update(req, res) {
     res.json({
        message: `Listando o usuario ID: `
    })
}

export default{
    getUser,
    getUsers,
    update,
}