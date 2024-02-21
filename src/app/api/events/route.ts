import { connectDatabase, insertDocuments } from "../../../services/mongo";

export async function POST(request: Request) {
    const client = await connectDatabase();
    const body = await request.json();
    const result = await insertDocuments(client, 'events', body);
    client.close();
    return new Response(JSON.stringify(result), {
        headers: { 'Content-Type': 'application/json' },
    });
}
