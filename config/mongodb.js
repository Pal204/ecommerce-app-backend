import mongoose from "mongoose";
const connsectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log(`DB Connected ${process.env.MONGODB_URI}/e-commerce`);
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
};

export default connsectDB;
