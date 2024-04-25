
// Importing necessary modules
import express from 'express';
import cors from 'cors';
import { db_query, querydata } from './getdata.js';





// Creating an Express application
const app = express();
const port = 3000; // Port on which the server will listen


app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
  }));

app.get('/api/charts/', async (req, res) => {

        await db_query()
        console.log(querydata);
        res.json(querydata)
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
