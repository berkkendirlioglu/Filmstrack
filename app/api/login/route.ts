import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { accessToken } = await req.json();

    if (!accessToken) {
        return NextResponse.json({ error: "No token provided" }, { status: 400 });
    }

    const headers = new Headers();
    headers.append(
        "Set-Cookie",
        `accessToken=${accessToken}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=86400`
    );

    return new NextResponse(JSON.stringify({ message: "Login successful" }), { headers });
}
