import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv"
import connectDb from './config/Db.js';
import authRoutes from "./routes/authRoute.js"
import { errorHandler, notFound } from './middleware/errorHandler.js';
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;
connectDb()

// Middleware
app.use(cors({origin:"http://localhost:5173",credentials:true}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth",authRoutes)


// middleware routes
app.use(notFound)
app.use(errorHandler)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});