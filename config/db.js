const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

// Without async/await
// const connectDB = () => {
//   mongoose
//     .connect(db, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//     })
//     .then(() => console.log("Mongodb Connected..."))
//     .catch((error) => {
//       console.log(error.message);
//       process.exit(1);
//     });
// };

// With async/await
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("KiranMAC Local MongoDB Connected...");
  } catch (err) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
