import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";
import { serialize } from 'cookie'
import { NextResponse } from "next/server";

export function GET(req, res) {
    const cookieStore = cookies();
    const sessionTokenValue = cookieStore.get('sessionToken')

    if(!sessionTokenValue.value){
        return NextResponse.json({error: "No token"})
    }

    try {
        verify(sessionTokenValue.value, "juniorTupapa")
        const serialized = serialize('sessionToken', null, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 0,
            path: '/'
        })
        res.setHeader('Set-Cookie', serialized)
        NextResponse.json('logout successful')
    } catch(err) {
        return NextResponse.json({error: 'invalid token'})
    }

}