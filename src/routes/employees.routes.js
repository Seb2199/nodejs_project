import { Router } from "express";
import {get, create, update, drop, getEmployee} from "../controllers/employees.controllers.js"

const router = Router()

router.get("/employees", get)

router.get("/employees/:id", getEmployee)

router.post("/employees", create)

router.patch("/employees/:id", update)

router.delete("/employees/:id", drop)


export default router