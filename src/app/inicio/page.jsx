'use client'
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import axios from 'axios';
import HeaderNoLoggued from '@/components/header'

export default function Home() {
	const [user, setUser] = useState();

	useEffect( () => {
		const response = axios.get('/api/profile')
		    .then(res => {
                setUser(res.data );
            })
	}, [])

	return (
		<>
			<HeaderNoLoggued />
		</>
	)
}