import express from 'express';
import { AddCompanies, getJobdata } from '../services/jobsdata.js';

const router = express.Router();
// GetStackData {All Questions and Answers}
router.get("/", async function (request, response) {
    console.log(request.query);
    const wholeData = await getJobdata();
    response.send(wholeData);
});

router.post("/", express.json(), async function (request, response) {
    const data = request.body
    console.log(data);
    const result = await AddCompanies(data)
    response.send(result)
});

export default router;
