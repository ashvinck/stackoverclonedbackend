import express from 'express';
import { AddQuestion, AddAnswer, getAlldata, getDataById, AddQueComment } from '../services/stackdata.js';
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

// Add new Question
router.post("/", express.json(), async function (request, response) {
    const data = request.body
    console.log(data);
    const result = await AddQuestion(data)
    response.send(result)
});

// Add an answer to an existing Question
router.put("/:id", express.json(), async function (request, response) {
    const { id } = request.params;
    const answers = request.body;
    const updatedresult = await AddAnswer(id, answers);
    console.log(updatedresult);
    response.send({ updatedresult })
});


// Add a comment to an existing Question
router.put("/:id/question/comments", express.json(), async function (request, response) {
    const { id } = request.params;
    const queComments = request.body;
    const addedcomment = await AddQueComment(id, queComments);
    console.log(addedcomment);
    response.send({ addedcomment })
});

// Add a comment to an existing Answer
router.put("/:id", express.json(), async function (request, response) {
    const { id } = request.params;
    const anscomment = request.body;
    const addedcomment = await AddAnsComment(id, anscomment);
    console.log(addedcomment);
    response.send({ addedcomment })
});

export default router;
