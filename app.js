import express from "express"
import cors from "cors"
import { connectDB } from "./supply-chain-management-backend/config/db.js";
import authRoutes from "./supply-chain-management-backend/src/routes/authRoutes.js"

const app = express()
const PORT = process.env.PORT || 5000;

// connect to MongoDB
connectDB();

// Middleware
app.use(cors())
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});
// Private API's
app.use('/api/user/', authRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



