'use client'

import { useAuthContext } from "@/contexts/authContext"
import { useEffect } from "react";

export default function Page() {
    const { logout} = useAuthContext();

    useEffect(()=>logout());

    return null
}