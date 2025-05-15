import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import pkg from 'pg';


const { Pool } = pkg;


dotenv.config()

const app = express();

app.use(cors({
    origin: 'https://workfission-internshipassignment-1.onrender.com',
    credentials: true
}))
app.use(express.json())


const pool = new Pool({
    connectionString: process.env.HOSTURL,
    ssl: {
        rejectUnauthorized: false
    }
});


export const initializeDb = async () => {
    try {
        await pool.query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        price NUMERIC NOT NULL,
        description TEXT,
        image_url TEXT
      );
    `);
        console.log('✅ products table is ready');
    } catch (err) {
        console.error('❌ Error creating products table:', err);
    }
};

initializeDb()


app.get('/check-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({ time: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).send('Database error');
    }
});

app.post('/api/add-product', async (req, res) => {
    try {
        const { name, price, description, image_url } = req.body;


        const result = await pool.query(
            'INSERT INTO products (name,price, description,image_url) VALUES ($1, $2,$3, $4) RETURNING *',
            [name, price, description, image_url]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json("Something went wrong during add product")

    }
})
app.get('/api/my-products', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM products',
        );
        res.status(201).json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).json("Something went wrong during fetch product")

    }
})

// app.delete('/api/delete-products', async (req, res) => {
//     try {
//         const result = await pool.query('DELETE FROM products');
//         res.status(200).json({ message: 'All products deleted' });

//     } catch (error) {
//         console.log(error);
//         res.status(500).json("Something went wrong during fetch product")
//     }
// })

app.listen(8000, () => {
    console.log(`Server is running at http://localhost:${8000}`);
}); 