const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { Todo } = require('./db');
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors());

// Routes

// GET /todos
app.get('/todos',async (req, res) => {
   //Find and Return All the todos
   const todos = await Todo.find({});
   res.json(todos);
})

// POST /todos
app.post('/todo', async (req, res) => {
     //Validate the Input 
     const createPayload = req.body;
     const parsedPayload = createTodo.safeParse(createPayload);
 
     if(!parsedPayload.success){
         return res.status(411).json({
             msg: "You sent the wrong Input"
         })
     }
 
     // Put in MongoDb
     await Todo.create({
         title: createPayload.title,
         description: createPayload.description,
         completed: false
     })
 
     res.json({
         msg: "Todo Created"
     })
    
});

// PUT 
app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success){
        return res.status(411).json({
            msg: "You sent the wrong Input"
        })
    }

    // Update in MongoDb
    await Todo.updateOne({
        _id: req.body.id,
    }, {
        completed: true
    })

    return res.json({
        msg: "Todo marked as Completed"
    })

});


app.listen(3000, () => {
    console.log('Server Runing');
})