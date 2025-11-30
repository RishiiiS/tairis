require('dotenv').config();
const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/user', require('./routes/dashboard'));

app.listen(3000, () => console.log("Server running on 3000"));
