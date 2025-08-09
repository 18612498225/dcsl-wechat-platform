const express = require('express');
const apiRoutes = require('./routes/api-routes.js');
const errorHandler = require('./middleware/error-handler.js');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Mount the API routes
// Any route starting with /api will be handled by apiRoutes
app.use('/api', apiRoutes);

// Error handling middleware should be last
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

// To avoid running the server during tests
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app; // Export for testing purposes
