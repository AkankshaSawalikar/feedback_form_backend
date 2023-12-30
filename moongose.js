const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/feeback")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("error");
  });
const feedbackschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const collection = new mongoose.model("feed", feedbackschema);
data = [
  {
    name: "techo",
  },
  {
    name: "akanksha",
  },
];

collection.insertMany(data);
