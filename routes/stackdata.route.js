import express from 'express';
import { AddAnswer, createQuestion, getAlldata, getDataById } from '../services/stackdata.js';
const router = express.Router();


// GetStackData {All Questions and Answers}
router.get("/", async function (request, response) {
    console.log(request.query);
    const wholeData = await getAlldata();
    response.send(wholeData);
});

// GetDataById
router.get("/:id", async function (request, response) {
    const { id } = request.params;
    const queData = await getDataById(id);
    console.log(queData);
    queData ?
        response.send(queData)
        : response.status(404).send({ msg: 'Not Found' });
});

// //Add Question
// router.post("/", express.json(), async function (request, response) {
//     const data = request.body;
//     console.log(data);

//     const result = await createQuestion(data)
//     response.send(result)
// });
router.put("/:id", async function (request, response) {
    const { id } = request.params;
    const answers = request.body;
    const newAns = await AddAnswer(id, answers);
    console.log(newAns);
    newAns ?
        response.send({ newAns })
        : response.send(404).send({ msg: "Error occured " })
});


export default router;