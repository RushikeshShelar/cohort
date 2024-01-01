const z = require('zod');

const createTodo = z.object({
    title: z.string().min(4).max(30),
    description: z.string().min(4).max(100)
})

const updateTodo = z.object({
    id: z.string()
})

module.exports = {
    createTodo,
    updateTodo
}