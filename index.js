const mongoose = require("mongoose");
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/userdata");
  console.log("CONNECTED!");
}
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  specialWord: String,
});

const UserData = mongoose.model("UserData", userSchema);
const user1 = new UserData({
  firstName: "Sylvia",
  lastName: "Makuch",
  email: "sylviamakuch2@gmail.com",
  password: "$am#ot222.",
  specialWord: "Tobiisabadboi",
});
