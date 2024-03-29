// import Image from 'next/image';
// import ContinueCards from '@/components/cards/ContinueCards';
// import SignUpCards from '@/components/cards/SignUpCards';
// import DarkButtons from '@/components/DarkButtons';
'use client'
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import axios from 'axios';
import HeaderNoLoggued from '@/components/header/HeaderNoLoggued'

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
