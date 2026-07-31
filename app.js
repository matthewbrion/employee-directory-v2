import express from "express";
const app = express();
import employeesRouter from './routes/employees.js';

app.use(express.json());
app.use('/employees', employeesRouter);

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.use((err, req, res, next) => {
  res.status(500).send(`Something went wrong.  Please try again.`)
});

export default app;