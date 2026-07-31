import express from "express";
import { getEmployee, getEmployees, getRandomEmployee, createEmployee } from '#db/employees'

const router = express.Router();

router.get("/", (req, res) => {
    const employees = getEmployees();
    res.send(employees);
});

router.get("/random", (req, res) => {
    const employee = getRandomEmployee();
    res.send(employee);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const employee = getEmployee(+id);

    if (!employee) {
        return res.status(404).send(`Employee #${id} not found.`);
    }

    res.send(employee);
});

router.post('/', (req, res) => {
    if (!req.body) {return res.status(400).send('No body found in request.')}
    if (!req.body.name) {return res.status(400).send('Employee name not found in request body.')}
    const newEmployee = createEmployee(req.body.name);
    return res.status(201).send(newEmployee)
});

export default router;