import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(req) {
    const jwt = req.cookies.get('sessionToken');

    if (jwt === undefined) {
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }
    // Obteniendo el valor del token jwt
    const token = jwt.value;
    // Convertir la clave a un Uint8Array
    const secret = new TextEncoder().encode('juniorTupapa');

    try {
        const { payload } = await jwtVerify(token, secret, { algorithms: ['HS256'] });
        console.log(payload);
        return NextResponse.next();
    } catch (e) {
        console.error(e);
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }
}

export const config = {
    matcher: ['/inicio', '/']
}