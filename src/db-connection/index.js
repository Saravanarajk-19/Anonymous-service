const mongoose = require('mongoose');

const mangoDB_url = 'mongodb+srv://anonymous:Hv9lcZdMutIzIpNZ@anonymous.t4v4250.mongodb.net/?retryWrites=true&w=majority';

exports.connectDB = () => {
  try {
    const conn = mongoose.connect(mangoDB_url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB connected:`);
  } catch (error) {
    console.log(`MognoDB Error: , ${error.message}`);
    // process.exit(1);
  }
};