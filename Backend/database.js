const { Sequelize } = require('sequelize');

// Create a Sequelize instance with individual connection parameters
const sequelize = new Sequelize({
  database: 'studentportal',
  username: 'SHUBHAM', // Specify your Windows username here
  host: 'localhost',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      trustedConnection: false, // Use trusted connection
      encrypt: false, // Encrypt the connection
      trustServerCertificate: false, // Trust the server certificate
      validateBulkLoadParameters: true, // Validate bulk load parameters
      enableArithAbort: true // Enable arith abort
    }
  }
});

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

//connectToDatabase();
