import express, { Express } from "express";

const main = async () => {
  const app: Express = express();

  app.listen(3000, () => {
    console.log(`Server running on port ${3000}`);
  });
};

export default main;
