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

const userdata = mongoose.model("userdata", userSchema);
const user1 = new userdata({
  firstName: "Sylvia",
  lastName: "Makuch",
  email: "sylviamakuch2@gmail.com",
  password: "$am#ot222.",
  specialWord: "Tobiisabadboi",
});
