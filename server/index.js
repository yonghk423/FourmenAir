const express = require("express");
const cors = require('cors');
const cookieParser = require("cookie-parser");
const app = express();

const controllers = require("./controllers")
const port = 80;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PATCH']
  })
);
app.use(cookieParser());
app.get('/', (req, res) => {
  res.status(201).send('Hello World');
});
app.post("/user/signup", controllers.signup);
app.post("/user/login", controllers.login);
app.post("/user/signout", controllers.signout);
app.delete("/user/resign", controllers.resign);
app.get("/user/info", controllers.info);
app.patch("/user/edit", controllers.edit);

app.get("/post", controllers.post);
app.get("/post:id", controllers.postId);

app.get("/comment", controllers.comment);
app.post("/comment/post", controllers.postComment);

app.listen(port, () => {
  console.log(`서버가 ${port}번에서 작동중입니다.`);
});
