 export function Todo({todo}){
    return <div>
            {
                todo.map(function(item){
                    return  <div>
                                <h1>{item.title}</h1>
                                 <h2>{item.description}</h2>
                                 <button>{todo.completed== true ?"completed": "Mark as completed"}</button>
                    </div>
                   
                })
            } 
            

             
    </div>
 }