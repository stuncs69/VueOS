import { defineEventHandler } from "h3";
import mysql, { Pool, PoolConnection, QueryError } from "mysql2/promise";

const pool: Pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "vue-os",
    password: "",
    database: "vueos",
});

async function query(token: string, id: number): Promise<any> {
    const connection: PoolConnection = await pool.getConnection();
    try {
        const [rows, fields] = await connection.query("SELECT * FROM auth WHERE token = ? AND id = ?", [token, id]);
        return rows;
    } catch (err) {
        throw err;
    } finally {
        connection.release();
    }
}

export default defineEventHandler(async (event) => {

    const body = await readBody(event)

    try {
        const rows = await query(body.token, body.id);

        if (rows.length == 0) {
            return JSON.stringify({
                type:"BAD_AUTH",
                text:"Invalid"
            })
        } else {
            return JSON.stringify({
                type:"GOOD_AUTH",
                text:"Valid"
            })
        }
    } catch (err) {
        return JSON.stringify({ error: err });
    }
});
