import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./supply-chain-management-backend/config/db.js";
import routes from "./supply-chain-management-backend/src/routers/routes.js"

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// connect to MongoDB
connectDB();

// Middleware
app.use(cors())
app.use(express.json());

// Routes
app.use('/api/v1', routes);

// Private API's
// app.use('/api/user/', authRoutes)





