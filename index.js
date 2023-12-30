const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/Client");
const feedback = require("./db/feedback");
const app = express();

// Enable CORS
app.use(cors());

app.use(express.json());

// Route
app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
});

app.post("/login", async (req, resp) => {
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "No user found" });
    }
  } else {
    resp.send({ result: "No user found" });
  }
});

// app.post("/add-feedback",async(req,resp)=>{
//     let Feedback= new feedback(Req.body);
//     let result=await Feedback.save();
//     resp.send(result);
// })
app.post("/add-feedback", async (req, res) => {
  try {
    let feedbackInstance = new feedback(req.body);
    let result = await feedbackInstance.save();
    res.status(200).json(result);
  } catch (error) {
    console.error("Error saving feedback:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
