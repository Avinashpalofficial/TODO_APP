 const mongoose= require('mongoose')
 mongoose.connect('mongodb+srv://kadusingh881:DVIe8Q5D5pVRdBQU@cluster0.ikpl09h.mongodb.net/todos')
 const todoschema = mongoose.Schema({
    title : String,
    description: String,
    completed:Boolean
 })
const todo = mongoose.model('todos',todoschema)

module.exports={
    todo 
}
