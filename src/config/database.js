const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://himakarreddy955:Himakar@955@namastenode.cojhn.mongodb.net/"
    )
}


connectDB()
    .then(() => {
        console.log("Database connection established...")
    })
    .catch((err) => {
        console.error("Database connection failed...")
    })

