import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";
import { NextResponse } from "next/server";

export function GET(req, res) {
    const cookieStore = cookies(req);
    const sessionTokenValue = cookieStore.get('sessionToken');

    if(!sessionTokenValue){
        return res.status(401).json({error: "No token"})
    }

    try {
        const tokenValues = verify(sessionTokenValue.value, "juniorTupapa");
        console.log(tokenValues.user);
        // Utiliza el objeto res directamente para enviar la respuesta
        return NextResponse.json(tokenValues.user , { status: 200 })
    } catch (err) {
        console.log(err);
        // Envía el error como respuesta con código de estado 500
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}