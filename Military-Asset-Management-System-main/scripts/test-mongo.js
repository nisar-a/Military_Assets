const mongoose = require("mongoose");
mongoose.set('debug', true);

const uri = "mongodb+srv://nisar:nisar@cluster0.7q9px.mongodb.net/military_asset_management_system?retryWrites=true&w=majority&appName=Cluster0";

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: String,
  firstName: String,
  lastName: String,
  rank: String
});

const User = mongoose.model("User", userSchema);

async function testInsert() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
    await User.create({
      username: "debuguser",
      email: "debug@example.com",
      password: "debug",
      role: "admin",
      firstName: "Debug",
      lastName: "User",
      rank: "Test"
    });
    console.log("Insert successful!");
    process.exit(0);
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
}

testInsert();