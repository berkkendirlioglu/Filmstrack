import { NextResponse } from "next/server";

export async function POST() {
    const headers = new Headers();
    headers.append(
        "Set-Cookie",
        "accessToken=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0"
    );

    return new NextResponse(JSON.stringify({ message: "Logout successful" }), { headers });
}
