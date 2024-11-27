import express from "express"
import authRoute from "./routes/auth.route.js"
import testRoute from "./routes/test.route.js"
import userRoute from "./routes/user.route.js"
import postRoute from "./routes/user.route.js"
import cookieParser from "cookie-parser";
import cors from "cors";

const app =express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/test",testRoute)
app.use("/api/users",userRoute)
app.post('/api/posts', (req, res) => {
  const postData = req.body;
  console.log("Received Post Data:", postData); // Debugging
  res.status(201).json({ message: "Post created successfully", postData });
});


app.listen(8800,()=>{
  console.log("Server is running")
})