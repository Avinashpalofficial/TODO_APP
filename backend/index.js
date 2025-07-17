const express = require('express')
const { creaeTodo } = require('./type')
const app = express()

const port = 3000
app.use(express.json())
app.post('/todo', (req,res)=>{
     const createpayload = req.body
     const parsepayload = creaeTodo.safeParse(createpayload)
     if(!parsepayload.succes){
        
     }

})
  
app.get('/todos' ,(req,res)=>{
             
})

app.put('/completed', (req,res)=>{

})

app.listen(port, (req,res)=>{
    console.log(`listening at ${port}`);
    
})