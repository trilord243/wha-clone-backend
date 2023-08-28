import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import compression from "compression";
import fileUpload from "express-fileupload";
import cors from "cors";
import createHttpError from "http-errors";
import routes from "./routes/index.js";

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

//routes api v1

app.use("/api/v1", routes);

app.use(async (req, res, next) => {
  next(createHttpError.NotFound("This route does not exist "));
});

//error handler
app.use(async (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message || "Internal Server Error",
    },
  });
});
export default app;
