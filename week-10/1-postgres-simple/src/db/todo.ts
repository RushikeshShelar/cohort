import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {

    const query = `
        INSERT INTO todos (user_id ,title ,description) VALUES ($1, $2, $3) RETURNING *;
    `
    const res = await client.query(query, [userId, title, description]);
    return res.rows[0];

}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {

    const query = `
        UPDATE todos SET done=$1 WHERE id=$2 RETURNING *;
    `
    const res = await client.query(query, [true,todoId]);
    return res.rows[0];

}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {

    const query = `
        SELECT * FROM todos WHERE user_id = $1;
    `
    const res = await client.query(query, [userId]);

    return res.rows;

}