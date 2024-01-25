const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

const startDatabase = async () => {
  await mongoose.connect('mongodb+srv://ansh:ansh@cluster0.dhmosqv.mongodb.net/?retryWrites=true&w=majority')
};

const stopDatabase = async () => {
  await mongoose.disconnect()
};

const isConnected = () => {
  return mongoose.connection.readyState === 1;
}

module.exports = { startDatabase, stopDatabase, isConnected };
