import { MongoClient } from "mongodb";

export async function connectDatabase() {
    const dbConnection: any = process.env.PUBLIC_DB_CONNECTION;
    return await MongoClient.connect(dbConnection);
}

export async function insertDocuments(client: any, collection: string, documents: object[]) {
    const db = client.db('xr');
    const result = await db.collection(collection).insertMany(documents);
    return result;
}
