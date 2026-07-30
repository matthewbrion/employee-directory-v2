import express from "express";
const app = express();
import employeesRouter from './routes/employees.js';

app.use('/employees', employeesRouter);

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

export default app;