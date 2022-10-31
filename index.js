
import express from "express"; // "type": "module"
import * as dotenv from 'dotenv';
import { Db, MongoClient } from "mongodb";
import bodyParser from "body-parser";
import stackRouter from "./routes/stackdata.route.js";
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
app.use(express.json());

app.get("/", function (request, response) {
    response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.post("/home", async function (request, response) {
    const data = request.body;
    console.log(data);
    const allData = await client
        .db("StackOvercloned")
        .collection("stackdata")
        .insertMany(data)
    response.send(allData);
    console.log("data added successfully")

});


app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

