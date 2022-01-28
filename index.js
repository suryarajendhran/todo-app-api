const express = require('express');
const router = require('./routes');
const cors = require('cors');
const { db, setupDatabase } = require('./db/db');

const app = express();
app.use(cors());
app.options('*', cors()); 
app.use(express.json());
app.use(router);

setupDatabase();


app.listen(process.env.PORT || 8080, () => {
    console.log('Server has started');
})