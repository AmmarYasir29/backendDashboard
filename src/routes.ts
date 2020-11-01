import * as express from "express";
const router = express.Router();
import callbackFun from "./controller/callbackFun";
import auth from "./midleware"

router.post("/addstudent",auth,callbackFun.addStudent);
router.get("/studentdash",callbackFun.showStudent); // show student to dashboard without token
router.get("/student",auth,callbackFun.showStudent); //show to app need token 
router.post("/addteacher",callbackFun.addteach);
router.post("/login",callbackFun.login);
router.get("/teacher",callbackFun.showTeacher)
router.get("/student/:id",callbackFun.showSpecificStudent)

export default router;