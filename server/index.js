const express = require("express");
const dotenv = require("dotenv");
const connectToMongoDB = require("./db/database.connection");
const User = require("./models/user.model");
const UserRouter = require("./routes/user.routes");
const authRouter = require("./routes/auth.route");

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/user",UserRouter);
app.use("/api/auth",authRouter);

app.listen(process.env.PORT, () => {
    connectToMongoDB();
    console.log("Server is running on port 3000");
});

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});