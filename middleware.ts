import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request:NextRequest){
    const accessToken = request.cookies.get("accessToken")?.value;

    if(!accessToken){
        return NextResponse.redirect(new URL('/login',request.url));
    }
}

export const config = {
    matcher:["/", "/movie", "/tv-series", "/watchlist", "/movie/:path*", "/tv-series/:path*"],
}