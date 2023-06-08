const mongoose = require("mongoose")

const database = mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Conneted");
  })
  .catch((err) => {
    console.log(err.message);
  });


  module.exports = database;