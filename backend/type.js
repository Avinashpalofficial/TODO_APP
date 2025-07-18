
const zod = require('zod')

const creaeTodo = zod.object({
    title:zod.string(),

    description: zod.string()

})

const updateTodo= zod.object({
    id: zod.string()
})


module.exports={
    creaeTodo:creaeTodo,
    updateTodo:updateTodo 
}