import { client } from '../index.js';

export async function getJobdata() {
    return await client
        .db("StackOvercloned")
        .collection("jobsdata")
        .find({})
        .toArray();
}

export async function AddCompanies(data) {
    return await client
        .db("StackOvercloned")
        .collection("jobsdata")
        .insertMany(data);
}