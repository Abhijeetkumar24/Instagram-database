import mongoose from "mongoose";

const connection =() =>{ mongoose.connect('mongodb://localhost:27017/instagram', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
})};

export default connection;