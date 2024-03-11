import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export function middleware(req) {
    const jwt = req.cookies.get('sessionToken');

    if (req.nextUrl.pathname.includes('/dashboard')) {
        if (jwt === undefined) {
            return NextResponse.redirect(new URL('/auth/login', req.url));
        }
        const token = jwt.value;
        try {
            // Convertir la clave a un Uint8Array
            const secret = new TextEncoder().encode('juniorTupapa');
            const { payload } = jwtVerify(token, secret, { algorithms: ['HS256'] });
            console.log(payload);
            console.log("Entra al try: " + token);
        } catch (e) {
            console.log("Entra al catch");
            console.error(e);
            return NextResponse.redirect(new URL('/auth/login', req.url));
        }
    }
    return NextResponse.next();
}