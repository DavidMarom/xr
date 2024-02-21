// 'use client';
import { MongoClient, ObjectId } from "mongodb";

export async function connectDatabase() {
    const dbConnection: any = process.env.PUBLIC_DB_CONNECTION;
    return await MongoClient.connect(dbConnection);
}

// export async function insertDocument(client: any, collection: string, document: object) {
//     const db = client.db('xr');
//     const result = await db.collection(collection).insertOne(document);
//     return result;
// }

export async function insertDocuments(client: any, collection: string, documents: object[]) {
    const db = client.db('xr');
    const result = await db.collection(collection).insertMany(documents);
    return result;
}

// export async function getAllDocuments(client: any, collection: string) {
//     const db = client.db('xr');
//     const documents = await db.collection(collection).find().toArray();
//     return documents;
// }

// export async function getDocumentsByFilter(client: any, collection: string, filter: object) {
//     const db = client.db('rb');
//     const documents = await db.collection(collection).find(filter).toArray();
//     return documents;
// }

// export async function updateDocument(client: any, collection: string, id: string, update: object) {
//     const db = client.db('xr');
//     try {
//         const objectId = new ObjectId(id);
//         const filter = { _id: objectId };
//         const result = await db.collection(collection).updateOne(filter, update);
//         return result;
//     } catch (error) {
//         console.log(error)
//     }
// }

// export async function updateDocumentByUID(client: any, collection: string, uid: string, update: object) {
//     const db = client.db('xr');
//     try {
//         const filter = { uid: uid };
//         const result = await db.collection(collection).updateOne(filter, update);
//         return result;
//     } catch (error) {
//         console.log(error)
//     }
// }
