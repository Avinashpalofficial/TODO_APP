const express = require('express')
const { creaeTodo, updateTodo } = require('./type')
const { todo } = require('./db')
const app = express()

const port = 3000
app.use(express.json())
app.post('/todo', async(req,res)=>{
     const createpayload = req.body
     const parsepayload = creaeTodo.safeParse(createpayload)
     if(!parsepayload.success){
            res.status(400).json({
                mesg : "you sent  the wrong mesg"
            })
     }
     await todo.create({
        title:createpayload.title,
        description: createpayload.description ,
        completed :false
     })
     res.json({
        mesg:"todo created"
     })

})
  
app.get('/todos' ,async (req,res)=>{
             const todos = await todo.find({})
             res.json({todos})
})


app.put('/completed', async(req,res)=>{
    const updatePayload = req.body
    const  updateParse = updateTodo.safeParse(updatePayload)
    if(!updateParse.success){
        res.status(400).json({
            mesg:"you sent the wrong inputs"
        })

    }
    await todo.update({
        _id :req.body.id
       
        
    },{
        completed:true
    })
    console.log(_id);
    
    res.json({
        mesg:"todo is complted"
    })
})

app.listen(port, (req,res)=>{
    console.log(`listening at ${port}`);
    
})