import app from "./app.js";
import logger from "./configs/logger.js";

//env variables
const PORT = process.env.PORT || 5000;

let server = app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}...`);
});

//handle server errors

const exitHandler = () => {
  if (server) {
    logger.info("Server closed");
    process.exit(1);
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

//sigterm
process.on("SIGTERM", () => {
  logger.info("SIGTERM received");
  if (server) {
    server.close();
  }
});
