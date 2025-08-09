let express = require("express");
let path = require("path");
const app = express();
app.use(express.json());

let formDataParser = express.urlencoded({ extended: true });
app.get("/", (req, res) => {
  try{
    res
    .status(200)
    .sendFile("/form.html", { root: path.resolve(__dirname, "../public") });
  }catch{
        res
    .status(400)
    .send('error');
  }
});

app.post("/userDetail", formDataParser, (req, res) => {
  let { userName, age, gender } = req.body;
  if (!userName || !age || !gender) { 
    res.status(400).send("Unable to get the form data");
  } else {
    res.status(200).send("Details recieved successfully");
  }
});

app.get('/user', (req, res) => {
  res.status(200).send("success");
});
app.get(/.*/, (req, res) => {
  res.status(400).send("error");
});

app.listen(3000, () => {
  console.log("app listening at port 3000");
});
