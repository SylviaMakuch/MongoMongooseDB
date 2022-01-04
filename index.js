const mongoose = require("mongoose");
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/user");
  console.log("CONNECTED!");
}
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  specialWord: String,
});

const User = mongoose.model("User", userSchema);
const user1 = new User({
  firstName: "Sylvia",
  lastName: "Makuch",
  email: "sylviamakuch2@gmail.com",
  password: "$am#ot222.",
  specialWord: "Tobiisabadboi",
});
