import { db } from "./var.js";
import pg from "pg";

const { Pool } = pg;

export let querydata = [];

const pool = new Pool({
    host: db.host,
    user: db.user,
    password: db.password,
    database: db.db,
    ssl: db.ssl,
    port: db.port
});

export async function db_query() {
    let client;
    try {
        
        client = await pool.connect();

        // Execute the SQL script using the client
        
        const result = await client.query(`
SELECT name, COUNT(CASE WHEN independent = true THEN 1 ELSE NULL END) AS independent_count
FROM public."Countries_Fact"
GROUP BY name
order by independent_count desc;
        `)

        querydata = result.rows


       
        
    } catch (error) {
        console.error("Error initializing database:", error);
        // Throw the error to handle it in the caller
        throw error;
    } finally {
        // Release the client back to the pool
        if (client) {
            client.release();
        }
    }
}



