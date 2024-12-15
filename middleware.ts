import { NextRequest, NextResponse } from "next/server";


export default function middleware(req : NextRequest){
    const token = req.cookies.get("next-auth.session-token");

    if(!token){
        return NextResponse.rewrite(new URL("/login" , req.nextUrl.origin))
    }   
    return NextResponse.next()    
}

export const config={
    matcher:["/"]
}