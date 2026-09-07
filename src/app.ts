import express, { Request, Response } from "express";
import serverless from "serverless-http";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello from Express + Lambda",
  });
});

app.get("/users", (req: Request, res: Response) => {
  res.json({
    users: ["Arvind", "Rahul", "Amit"],
  });
});

export const handler = serverless(app);

/* app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
}); */