import { client } from '../index.js';

export async function getAlldata() {
    return await client
        .db("StackOvercloned")
        .collection("stackdata")
        .find({})
        .toArray();
}

export async function getDataById(id) {
    return await client
        .db("StackOvercloned")
        .collection("stackdata")
        .findOne({ id: id });
}

export async function AddQuestion(data) {
    return await client
        .db("StackOvercloned")
        .collection("stackdata")
        .insertOne(data);
}

export async function AddAnswer(id, answers) {
    return await client
        .db("StackOvercloned")
        .collection("stackdata")
        .updateOne({ id: id }, { $push: { answers: answers } });
}

export async function AddQueComment(id, queComments) {
    return await client
        .db("StackOvercloned")
        .collection("stackdata")
        .updateOne({ id: id }, { $push: { queComments: queComments } });
}


