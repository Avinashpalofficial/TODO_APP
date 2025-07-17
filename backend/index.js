const express = require('express')
const app = express()

const port = 3000

app.post('/todo', (req,res)=>{


})
  
app.get('/todos' ,(req,res)=>{
             
})

app.put('/completed', (req,res)=>{

})

app.listen(port, (req,res)=>{
    console.log(`listening at ${port}`);
    
})