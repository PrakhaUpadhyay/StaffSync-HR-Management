const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Mock MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/staffsync', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));

// JWT Role-Based Auth Middleware Placeholder
const verifyTokenAndRole = (roles) => (req, res, next) => {
    // In a full app, this verifies JWT and checks if user is HR, Manager, or Employee
    next();
};

// Core Module Routes
app.use('/api/auth', require('./routes/authRoutes')); // Login/Register
app.use('/api/employee', verifyTokenAndRole(['Employee', 'HR']), require('./routes/employeeRoutes')); // Attendance, Leaves
app.use('/api/manager', verifyTokenAndRole(['Manager', 'HR']), require('./routes/managerRoutes')); // Approvals
app.use('/api/hr', verifyTokenAndRole(['HR']), require('./routes/hrRoutes')); // Reports, Announcements

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));