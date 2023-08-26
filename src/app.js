import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import compression from "compression";
import fileUpload from "express-fileupload";
import cors from "cors";
dotenv.config();

const app = express();
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(helmet());

//parese json body

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());

//Enable cookie parser
app.use(cookieParser());

//sanitization

//gzip compression
app.use(compression());

//file upload
app.use(fileUpload({ useTempFiles: true }));

//cors
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("Login Successful");
});
export default app;
