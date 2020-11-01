import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
const app = express();
import router from "./routes"
import {Student} from "./entity/Students"

createConnection().then(async connection => {
app.use(express.json());

app.use("/",router)

app.listen(3000, () => console.log("run on port 3000!"));
}).catch(error => console.log(error));
