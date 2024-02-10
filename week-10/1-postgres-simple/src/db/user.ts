import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    const createUserQuery = `
        INSERT INTO users (username,password,name) VALUES ($1,$2,$3);
    `;

    const res = await client.query(createUserQuery, [username,password,name]);
    return res.rows[0];
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const getUserQuery = `
        SELECT * FROM users WHERE id = $1;
    `
    const res = await client.query(getUserQuery, [userId]);
    return res.rows[0];
}
