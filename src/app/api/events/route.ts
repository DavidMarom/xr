import { connectDatabase, insertDocuments, getDocuments, clearDocuments } from "../../../services/mongo";

export async function GET(request: Request) {
    const client = await connectDatabase();
    const result = await getDocuments(client, 'events', {});
    client.close();
    return new Response(JSON.stringify(result), {
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function DELETE(request: Request) {
    const client = await connectDatabase();
    const result = await clearDocuments(client, 'events');
    client.close();
    return new Response(JSON.stringify(result), {
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
