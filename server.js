const express = require('express');
const connectDB = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();

connectDB();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/persons", require("./routes/personRoutes"));  
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
