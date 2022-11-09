
import express from "express"; // "type": "module"
import * as dotenv from 'dotenv';
import { Db, MongoClient } from "mongodb";
import bodyParser from "body-parser";
import stackRouter from "./routes/stackdata.route.js";
import jobsRouter from "./routes/jobs.route.js";
dotenv.config();


const app = express();

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT;

async function createConnection() {
    const client = new MongoClient(MONGO_URL); // 
    await client.connect(); // connecting to DB
    console.log("Mongo is connected ✌😊");
    return client;
}

export const client = await createConnection();

app.use("/home", stackRouter);
app.use("/jobs", jobsRouter);
app.use(express.json());

app.get("/", function (request, response) {
    response.send("🙋‍♂️ Welcome to Stackovercloned Backend");
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

