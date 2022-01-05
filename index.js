const mongoose = require("mongoose");
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/userdata");
  console.log("CONNECTED!");
}
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  specialWord: {
    type: String,
    required: true
  }
});

const userdata = mongoose.model("userdata", userSchema);
const user1 = new userdata({
  firstName: "Sylvia",
  lastName: "Makuch",
  email: "sylviamakuch2@gmail.com",
  password: "$am#ot222.",
  specialWord: "Tobiisabadboi",
});
