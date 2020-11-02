import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
const app = express();
import router from "./routes"
const port = process.env.PORT || 3000;

createConnection().then(async connection => {
app.use(express.json());

app.use("/",router)

app.listen(port, () => console.log(`run on port ${port}!`));
}).catch(error => console.log(error));
