const express = require("express");
const app = express()

require("dotenv").config();

const dbConnect = require("./db/dbConnect");
dbConnect();

const PORT = process.env.PORT || 5500;

app.use(express.json());
app.use("/students", require("./routes/routes"));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})