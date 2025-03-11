const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://himakarreddy955:Himakar955@namastenode.cojhn.mongodb.net/devTinder"
  );
};

connectDB()
  .then(() => {
    console.log("Database connection established...");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = connectDB;
