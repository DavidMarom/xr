import { connectDatabase, insertDocuments, getAllDocuments } from "../../../services/mongo";

export async function GET() {
    const client = await connectDatabase();
    const documents = await getAllDocuments(client, 'events');
    client.close();
    return new Response(JSON.stringify(documents), {
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function POST(request: Request) {
    const client = await connectDatabase();
    const body = await request.json();
    const result = await insertDocuments(client, 'events', body);
    client.close();
    return new Response(JSON.stringify(result), {
        headers: { 'Content-Type': 'application/json' },
    });
}
