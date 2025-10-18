import  Model from "../../model/index.js";

const creatorCategory = async (category) => {
    try{
        const create = await Model.Category.create({
            name: category.name,
            description: category.description
        })

        if (!create){
            return false;
        }
        return create
    } catch (error) {
        return false
    }
}

export default creatorCategory;