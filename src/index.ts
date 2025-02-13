import express from "express";
import bodyParser from "body-parser";
import { userRoute } from "./routes/user.route";
import { users } from "./database/user.db";

const app = express();
const port = 4080;

app.use(bodyParser.json());
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
